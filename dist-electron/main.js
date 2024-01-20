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
const fs = require("fs");
let win;
electron.Menu.setApplicationMenu(menu);
electron.app.whenReady().then(() => {
  win = new electron.BrowserWindow({
    width: 1200,
    height: 700,
    transparent: true,
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false
    }
  });
  electron.ipcMain.on("save-file", function(event, data) {
    const { fileData, fileName } = data;
    const savePath = path.join(electron.app.getPath("userData"), `${fileName}`);
    fs.writeFile(savePath, Buffer.from(fileData), (err) => {
      if (err) {
        console.error("err:", err);
        return;
      }
      console.log("success");
    });
  });
  electron.ipcMain.on("window-close", function() {
    win.close();
  });
  electron.ipcMain.on("window-min", function() {
    win.minimize();
  });
  electron.ipcMain.on("window-max", function() {
    win.maximize();
  });
  win.webContents.openDevTools();
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  }
});
