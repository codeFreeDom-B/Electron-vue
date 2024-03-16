/*
 * @Author: SUN HENG
 * @Date: 2024-02-06 15:00:57
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-03-16 12:10:54
 * @FilePath: \Electronvite\src\views\WorkBenches\hooks.ts
 * @Description:
 */
import { computed, onMounted, ref } from 'vue'
import { FlashOutline, HammerOutline, Flower } from '@vicons/ionicons5'
import BenchApi from '@/apis/workBenches'
import type { CaseType } from './index.d'
import { useRouter } from 'vue-router'
export function getCaseData() {
  const router = useRouter()
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

  const handleEdit = (item: CaseType) => {
    router.push({
      name: 'X6Design',
      query: {
        id: item.id
      }
    })
  }
  return {
    CaseList,
    getCaseList,
    ActionStatus,
    handleEdit,
    FlashOutline,
    HammerOutline,
    Flower
  }
}
