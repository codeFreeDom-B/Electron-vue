const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // 一些浏览器需要设置该项才能返回正确的状态码
}));

const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true
  }
});

// 监听连接事件
io.on('connection', (socket) => {
  console.log('新的 Socket.IO 连接已建立');

  // 处理文件传输请求
  socket.on('file', (data) => {
    console.log(data,'filefilefile');
    
    // 将文件数据广播给其他连接的客户端
    socket.broadcast.emit('file', data);
  });

  // 处理断开连接事件
  socket.on('disconnect', () => {
    console.log('Socket.IO 连接已断开');
  });
});
const IP_ADDRESS = '172.10.10.166';
const PORT = 3000;
// 启动服务器
server.listen(PORT,IP_ADDRESS, () => {
  console.log('Socket.IO 服务器已启动，监听端口 3000');
});