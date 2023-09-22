<template>
  <div style="overflow: hidden; position: relative; width: 100%; height: 100%">
    <div class="navge">
      <div class="logo">
        <div>WELCOME</div>
        <div>组态设计</div>
      </div>
      <div class="btnlist">
        <MyButton @click.stop="handleClick"></MyButton>
      </div>
    </div>
    <Transition>
      <MyLogin v-if="IsLogin"></MyLogin>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import MyButton from './btn.vue'
import MyLogin from './login.vue'
let IsLogin = ref(false)
const handleClick = () => {
  IsLogin.value = true
}
</script>
<style lang="scss" scoped>
.navge {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('../../assets/view/login/background-back.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  // overflow: hidden;

  .logo {
    font-size: 90px;
    font-weight: 600;
    background-image: linear-gradient(to right, #fafafa, #0a67f3 30%);
    -webkit-background-clip: text;
    color: transparent;
    margin-top: 50px;
    margin-left: 90px;
  }
  .btnlist {
    margin-left: 80px;
    width: auto;
    margin-top: 80px;
    user-select: none;
    -webkit-app-region: no-drag;
  }
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translate(100%, 0);
}
.v-enter-to,
.v-leave-from {
  transform: translate(0%, 0);
}
</style>
