const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// 监听连接事件
io.on('connection', (socket) => {
  console.log('新的 Socket.IO 连接已建立');

  // 处理文件传输请求
  socket.on('file', (data) => {
    // 将文件数据广播给其他连接的客户端
    socket.broadcast.emit('file', data);
  });

  // 处理断开连接事件
  socket.on('disconnect', () => {
    console.log('Socket.IO 连接已断开');
  });
});

// 启动服务器
server.listen(3000, () => {
  console.log('Socket.IO 服务器已启动，监听端口 3000');
});