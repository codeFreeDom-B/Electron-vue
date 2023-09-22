import { ref, type Ref, onMounted } from 'vue'
import type { MenuOption } from 'naive-ui'
import { useDesignMenuStore } from '@/stores/modules/designMenuStore/designMenuStore'
import { type PackageListType } from '@/stores/modules/designMenuStore/designMenuStore.d'
export default function () {
  const DesignMenuStore = useDesignMenuStore()
  DesignMenuStore.getPackageListData()
  const packageList: PackageListType[] = DesignMenuStore.getPackageList
  const MenuOptions: Ref<MenuOption[]> = ref([])
  packageList.map((item:MenuOption) => {
    MenuOptions.value.push({
      label: item.label,
      key: item.label as string,
      icon:item.icon
      // children: item.children
    })
  })
  return { MenuOptions }
}
