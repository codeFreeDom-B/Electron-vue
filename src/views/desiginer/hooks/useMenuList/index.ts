import { ref, type Ref, onMounted } from 'vue'
import type { MenuOption } from 'naive-ui'
import { useDesignMenuStore } from '@/stores/modules/designMenuStore/designMenuStore'
import { getUUID } from '@/utils/utils'

export default function () {
  const DesignMenuStore = useDesignMenuStore()
  DesignMenuStore.getPackageListData()
  const packageList: MenuOption[] = DesignMenuStore.getPackageList
  const MenuOptions: Ref<MenuOption[]> = ref([])
  packageList.map((item:MenuOption) => {
    MenuOptions.value.push({
      id:getUUID(),
      label: item.label,
      key: item.key,
      icon:item.icon,
      childrens: item.children
    })
  })
  const defaultMenuItem: Ref<string> = ref((MenuOptions.value[0]?.key) as string)
  // @ts-ignore
  const defaultMenu:Ref<MenuOption> =ref(MenuOptions.value[0])
  const handleChage = (key:string,obj:MenuOption) => {
    defaultMenu.value=obj
  }
  return { MenuOptions,defaultMenuItem,handleChage,defaultMenu }
}
