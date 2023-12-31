import path from 'path'
import { app, BrowserWindow, Menu,ipcMain } from 'electron'
import menu from './menu/topMenus'
const fs = require('fs');


let win: BrowserWindow
Menu.setApplicationMenu(menu)
app.whenReady().then(() => {
  win = new BrowserWindow({
    // width: 1500,//初始化窗口宽度
    // height: 900,//初始化窗口高度
    width: 1000,
    height: 700,
    transparent: true,
    frame: false /*去掉顶部导航 去掉关闭按钮 最大化最小化按钮*/,
    resizable: false,

   
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })
  
  

  ipcMain.on('save-file', function(event, data) {
    // 保存文件的路径和文件名
    const {fileData,fileName}=data
    
    const savePath = path.join(app.getPath('userData'), `${fileName}`);
    console.log(fileData,fileName,'fileData');
    
  fs.writeFile(savePath, Buffer.from(fileData), (err) => {
    if (err) {
      console.error('err:', err);
      return;
    }
    console.log('success');
  });
});
  ipcMain.on('window-close', function () {
    win.close();
})
  ipcMain.on('window-min', function () {
	win.minimize();
})

  win.webContents.openDevTools() //在开发者模式下打开控制台,后期可以搞成通过环境来判断是否开启
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'))
  }
})
