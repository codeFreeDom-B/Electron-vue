import { nativeImage } from 'electron'

const { Menu } = require('electron')
const { dialog } = require('electron')

const menuItem = [
  {
    label: '帮助',
    submenu: [{ label: '检查更新' }, { label: '关于', click: aboutClick }]
  }
]
/**
 * 点击关于
 */
function aboutClick() {
  //   const icon = nativeImage.createFromPath('../../../public/img/github.png')
  dialog.showMessageBox({
    message: 'https://github.com/codeFreeDom-B/Electron-vue',
    type: 'info',
    // icon: icon,
    buttons: ['关闭'],
    title: '关于',
    detail: '',
    cancelId: 0
  })
}

const menu = Menu.buildFromTemplate(menuItem) // 根据template生成一个Menu对象
export default menu
