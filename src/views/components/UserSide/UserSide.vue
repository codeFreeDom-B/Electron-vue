<template>
  <div class="side">
    <div class="verison">
      {{ viersion }}
    </div>
    <div class="user">
      <n-avatar round :size="48" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
      <div class="username">{{ userName }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const viersion = ref('V 1.0.1')
const userName = ref('SENU')
</script>
<style scoped lang="scss">
.side {
  width: 293px;
  height: 100%;
  padding: 20px;
  background-color: green;
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
    background: yellow;
    margin: 0 auto;
    margin-top: 30px;
    .username {
      margin-top: 20px;
      font-size: 24px;
      font-weight: 600;
    }
  }
}
</style>
