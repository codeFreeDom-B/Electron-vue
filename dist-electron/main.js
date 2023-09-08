"use strict";
const path = require("path");
const electron = require("electron");
let win;
electron.app.whenReady().then(() => {
  win = new electron.BrowserWindow({
    width: 1500,
    //初始化窗口宽度
    height: 900
    //初始化窗口高度
  });
  win.webContents.openDevTools();
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  }
});
