<template>
  <div class="about">
    <input type="file" @change="handleFileSelect" />
    <div v-if="isConnected">
      <p v-if="isSender">连接已建立，选择文件后即可发送。</p>
      <p v-else>连接已建立，等待对方发送文件。</p>
    </div>
    <div v-else>
      <p>等待连接...</p>
      <p>请确保两个应用程序在同一局域网中。</p>
      <button @click="connect">连接</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import { io } from 'socket.io-client'
import SimplePeer from 'simple-peer/simplepeer.min.js'
import { useIpcRenderer } from '@vueuse/electron'
export default {
  setup() {
    const isConnected = ref(false)
    const isSender = ref(false)
    const socket = ref(null)
    const peer = ref(null)
    const CHUNK_SIZE = 100 * 1024
    const ipcRenderer = useIpcRenderer()

    const connect = () => {
      // 连接到 Socket.IO 服务器
      socket.value = io('http://172.10.10.166:3000')

      // 处理连接成功事件
      socket.value.on('connect', () => {
        console.log('Socket.IO 连接已建立')
        isConnected.value = true
        isSender.value = true

        peer.value = new SimplePeer({
          channelConfig: {
            maxRetransmitTime: 100, // 设置最大重传时间为 100 毫秒
            maxPacketLifeTime: null,
            ordered: true // 设置为 false，以便支持无序传输（针对大文件传输）
            // maxRetransmits: 0 // 禁用重传（针对大文件传输）
          },

          channelName: 'file-transfer-channel', // 数据通道名称
          initiator: true,
          trickle: false
        })

        // 创建 WebRTC 连接对象

        peer.value.on('signal', (data) => {
          // 发送 WebRTC 信令给其他客户端
          localStorage.setItem('signal', true)
          socket.value.emit('file', data)
        })

        peer.value.on('connect', () => {
          console.log('WebRTC 连接已建立')
        })

        let receivedChunks = []
        const concatenateArrayBuffers = (...buffers) => {
          const totalLength = buffers.reduce((total, buffer) => total + buffer.byteLength, 0)
          const result = new Uint8Array(totalLength)
          let offset = 0

          for (const buffer of buffers) {
            result.set(new Uint8Array(buffer), offset)
            offset += buffer.byteLength
          }

          return result.buffer
        }
        peer.value.on('data', async (JSONdata) => {
          const { name, isAll, fileData } = JSON.parse(JSONdata) // ArrayBuffer
          const arrayBuffer = new Uint8Array(fileData).buffer
          receivedChunks.push(arrayBuffer)
          if (isAll) {
            const fileData = concatenateArrayBuffers(...receivedChunks)
            // console.log(fileData, '完整的fileData')
            ipcRenderer.send('save-file', { fileName: name, fileData })
            receivedChunks = []
          }
        })
      })

      // 处理接收到的信令
      socket.value.on('file', (data) => {
        console.log('接受的心灵', data)
        peer.value.signal(data)
      })
    }

    const handleFileSelect = (event) => {
      const file = event.target.files[0]
      sendFile(file)
    }
    const sendFile = (file) => {
      const fileReader = new FileReader()
      fileReader.onload = () => {
        const chunkSize = 64 * 1024 // 每个数据块的大小
        const fileData = fileReader.result // ArrayBuffer
        const totalChunks = Math.ceil(fileData.byteLength / chunkSize)
        let chunkIndex = 0

        const sendNextChunk = () => {
          const start = chunkIndex * chunkSize
          const end = Math.min(start + chunkSize, fileData.byteLength)
          const chunk = fileData.slice(start, end)
          let sendData = {
            name: file.name,
            isAll: chunk.byteLength < chunkSize,
            fileData: Array.from(new Uint8Array(chunk))
          }
          console.log(sendData, chunk.byteLength, 'sendDatasendData')
          const jsonString = JSON.stringify(sendData)
          peer.value.send(jsonString)
          if (++chunkIndex < totalChunks) {
            setTimeout(sendNextChunk, 10) // 延迟发送下一个数据块
          }
        }

        sendNextChunk()
      }
      fileReader.readAsArrayBuffer(file)
    }
    onMounted(() => {
      // 在组件挂载时执行的逻辑
      // connect()
      // 可以在此处调用 connect() 方法进行连接
    })

    return {
      isConnected,
      isSender,
      connect,
      handleFileSelect
    }
  }
}
</script>
<style lang="scss" scoped>
.about {
  user-select: none;
  -webkit-app-region: no-drag;
}
</style>
