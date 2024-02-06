/*
 * @Author: SUN HENG
 * @Date: 2024-02-06 15:00:57
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-06 17:08:23
 * @FilePath: \Electronvite\src\views\WorkBenches\hooks.ts
 * @Description:
 */
import { computed, onMounted, ref } from 'vue'
import { FlashOutline, HammerOutline, Flower } from '@vicons/ionicons5'
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
  const ActionStatus = computed(() => (status: boolean) => {
    if (status) {
      return '已发布'
    } else {
      return '未发布'
    }
  })
  return {
    CaseList,
    getCaseList,
    ActionStatus,
    FlashOutline,
    HammerOutline,
    Flower
  }
}
