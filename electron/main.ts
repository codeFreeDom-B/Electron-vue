/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-08 11:00:55
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-10 13:30:10
 * @FilePath: \Electronvite\electron\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import path from 'path'
import { app, BrowserWindow, Menu, ipcMain } from 'electron'
import menu from './menu/topMenus'
const fs = require('fs')
let win: BrowserWindow
Menu.setApplicationMenu(menu)
app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 1200,
    height: 700,
    transparent: true,
    frame: false /*去掉顶部导航 去掉关闭按钮 最大化最小化按钮*/,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity:false
    }
  })
  ipcMain.on('save-file', function (event, data) {
    // 保存文件的路径和文件名
    const { fileData, fileName } = data
    const savePath = path.join(app.getPath('userData'), `${fileName}`)
    fs.writeFile(savePath, Buffer.from(fileData), (err) => {
      if (err) {
        console.error('err:', err)
        return
      }
      console.log('success')
    })
  })
  ipcMain.on('window-close', function () {
    win.close()
  })
  ipcMain.on('window-min', function () {
    win.minimize()
  })
  ipcMain.on('window-max', function () {
    win.maximize()
  })

  win.webContents.openDevTools()
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
    
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'))
  }
})
