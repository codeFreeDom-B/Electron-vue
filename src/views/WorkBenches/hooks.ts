/*
 * @Author: SUN HENG
 * @Date: 2024-02-06 15:00:57
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-06 15:07:40
 * @FilePath: \Electronvite\src\views\WorkBenches\hooks.ts
 * @Description:
 */
import { onMounted, ref } from 'vue'
import { FlashOutline } from '@vicons/ionicons5'
import BenchApi from '@/apis/workBenches'
import type { CaseType } from './index.d'
export function getCaseData() {
  onMounted(() => {
    getCaseList()
  })

  const CaseList = ref<CaseType[]>([])
  const getCaseList = () => {
    BenchApi.getCaseList().then((res) => {
      CaseList.value = res.data
    })
  }
  return {
    CaseList,
    getCaseList,
    FlashOutline
  }
}
