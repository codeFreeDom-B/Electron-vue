<template>
  <div class="side">
    <div class="verison">
      {{ viersion }}
    </div>
    <div class="user">
      <n-avatar round :size="48" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
      <div class="username">{{ userName }}</div>
    </div>
    <div class="menu">
      <n-menu v-model:value="activeKey" :options="menuOptions" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { Ref, VNodeChild } from 'vue'
import { useMenuOptionStore } from '@/stores/modules/menuOptionsStore/menuOptionsStore'
const viersion = ref('V 1.0.1')
const userName = ref('SENU')

const menuOptionsStore = useMenuOptionStore()
const menuOptions = menuOptionsStore.getMenuOptions
let activeKey: Ref<string | (() => VNodeChild)> = ref(menuOptions[0].label as () => VNodeChild)
console.log(activeKey.value, 'activeKey')
</script>
<style scoped lang="scss">
.side {
  width: 293px;
  height: 100%;
  padding: 20px;
  background-color: rgba($color: #99c6fd, $alpha: 0.2);
  .verison {
    font-size: 20px;
    color: #9aa2b0;
    text-align: center;
    padding-right: 5px;
  }
  .user {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 95%;
    height: 155px;
    margin: 0 auto;
    margin-top: 30px;
    .username {
      margin-top: 20px;
      font-size: 24px;
      font-weight: 600;
      cursor: pointer;
    }
  }
  .menu {
    user-select: none;
    -webkit-app-region: no-drag;
    :deep(.n-menu-item):hover {
      background: #18a058;
      --n-item-color-hover: rgba(243, 243, 245, 0);
      .n-menu-item-content--selected {
        a {
          color: #fafafa !important;
        }
      }
      a {
        color: #fafafa !important;
      }
    }

    :deep(.n-menu-item-content):hover {
      background: #18a058;
    }
  }
}
</style>
