"use strict";
const path = require("path");
const electron = require("electron");
const { Menu } = require("electron");
const { dialog } = require("electron");
const menuItem = [
  {
    label: "帮助",
    submenu: [{ label: "检查更新" }, { label: "关于", click: aboutClick }]
  }
];
function aboutClick() {
  dialog.showMessageBox({
    message: "https://github.com/codeFreeDom-B/Electron-vue",
    type: "info",
    // icon: icon,
    buttons: ["关闭"],
    title: "关于",
    detail: "",
    cancelId: 0
  });
}
const menu = Menu.buildFromTemplate(menuItem);
let win;
electron.Menu.setApplicationMenu(menu);
electron.app.whenReady().then(() => {
  win = new electron.BrowserWindow({
    // width: 1500,//初始化窗口宽度
    // height: 900,//初始化窗口高度
    width: 1e3,
    height: 700,
    transparent: true,
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  electron.ipcMain.on("window-close", function() {
    win.close();
  });
  electron.ipcMain.on("window-min", function() {
    win.minimize();
  });
  win.webContents.openDevTools();
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  }
});
