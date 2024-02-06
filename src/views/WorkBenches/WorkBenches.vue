<!--
 * @Author: SUN HENG
 * @Date: 2023-11-13 10:21:09
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-06 17:14:22
 * @FilePath: \Electronvite\src\views\WorkBenches\WorkBenches.vue
 * @Description: 
-->
<template>
  <div class="benches">
    <div class="header">
      <div class="left-info">
        <div style="font-size: 32px">Welcome to Venus!</div>
      </div>
      <div class="right-search">
        <NInput round placeholder="搜索">
          <template #suffix>
            <n-icon :component="FlashOutline" />
          </template>
        </NInput>
      </div>
    </div>
    <div class="sourcelist">
      <div class="title">组态精选</div>
      <div class="source-itme">
        <div class="item" v-for="item in CaseList" :key="item.id">
          <NCard>
            <div class="item-img">
              <NImage width="260" :src="item.backgroundUrl" />
            </div>
            <template #action>
              <div class="item-action">
                <div>{{ item.name }}</div>
                <div>
                  <NBadge :value="1" dot :type="item.isPublish ? 'success' : 'error'" processing />
                  {{ ActionStatus(item.isPublish) }}
                </div>
                <div>
                  <n-tooltip placement="bottom" trigger="hover">
                    <template #trigger>
                      <n-button>
                        <template #icon>
                          <n-icon :component="HammerOutline" />
                        </template>
                      </n-button>
                    </template>
                    <span> 编辑 </span>
                  </n-tooltip>
                </div>
                <div>
                  <n-tooltip placement="bottom" trigger="hover">
                    <template #trigger>
                      <n-button>
                        <template #icon>
                          <n-icon :component="Flower" />
                        </template>
                      </n-button>
                    </template>
                    <div class="activeMore">
                      <div><n-button quaternary> 预览 </n-button></div>
                      <div><n-button quaternary> 发布 </n-button></div>
                      <div><n-button quaternary> 删除 </n-button></div>
                    </div>
                  </n-tooltip>
                </div>
              </div>
            </template>
          </NCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { NImage } from 'naive-ui'
// @ts-ignore
import { getCaseData } from './hooks.ts'
const { CaseList, ActionStatus, FlashOutline, HammerOutline, Flower } = getCaseData()
</script>
<style lang="scss" scoped>
.benches {
  width: 100%;
  height: 100%;
  // user-select: none;
  // -webkit-app-region: no-drag;
}
.header {
  display: flex;
  align-items: center;
  height: 75px;
  width: 100%;
  .left-info {
    color: #5acea7;
    flex: 1;
    div {
      padding-left: 100px;
    }
    // text-align: center;
  }
  .right-search {
    width: 300px;
    margin-right: 100px;
    user-select: none;
    -webkit-app-region: no-drag;
  }
}
.sourcelist {
  width: 100%;
  height: calc(100% - 75px);
  .title {
    font-size: 22px;
    color: #5acea7;
    margin-left: 50px;
    font-weight: 500;
  }
  .source-itme {
    width: 90%;
    height: calc(100% - 40px);
    margin: 0 auto;
    display: flex;
    .item {
      width: 320px;
      height: 200px;
      margin-left: 20px;
      margin-top: 20px;
      &-img {
        width: 260px;
        height: 180px;
        margin: 0 auto;
      }
      .item-action {
        display: flex;
        justify-content: space-between;
        height: 100%;
        align-items: center;
        user-select: none;
        -webkit-app-region: no-drag;
        .activeMore {
          user-select: none;
          -webkit-app-region: no-drag;
        }
      }
    }
  }
}
</style>
