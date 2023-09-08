import path from 'path'
import { app, BrowserWindow } from 'electron'

let win: BrowserWindow

app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 1500,//初始化窗口宽度
    height: 900,//初始化窗口高度
  })
  win.webContents.openDevTools()//在开发者模式下打开控制台
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'))
  }
})
