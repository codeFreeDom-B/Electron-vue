<template>
  <div class="login">
    <div class="login_canvas">
      <div class="container">
        <div class="arrow"></div>
        <div class="arrow2"></div>
      </div>
    </div>
    <div class="login_form">
      <div class="login_title">欢迎登录组态设计平台</div>
      <div class="login_params">
        <div class="user">
          <n-input placeholder="请输入账号名称" round v-model:value="username">
            <template #prefix>
              <n-icon :component="Person" />
            </template>
          </n-input>
        </div>
        <div class="pwd">
          <n-input
            type="password"
            v-model:value="password"
            show-password-on="mousedown"
            placeholder="请输入密码"
            :maxlength="16"
            round
          >
            <template #prefix>
              <n-icon :component="LockClosed" />
            </template>
          </n-input>
        </div>
        <div class="login_btn">
          <n-button type="primary" size="large" round @click="HandleClick"> 登录 </n-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useLogin } from './hooks/useLogin.hook'
const { LockClosed, HandleClick, password, Person, username } = useLogin()
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('../../assets/view/login/logobk.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.container {
  position: relative;
  width: 340px;
  height: 340px;
  margin-left: 235px;
  border-radius: 50%;
  margin-top: 150px;
  animation: spin 8s linear infinite;
}

.arrow {
  position: absolute;
  top: 0%;
  left: 3%;
  width: 151px;
  height: 100px;
  background: url('../../assets/view/login/arrow.png') no-repeat;
  background-size: 100% 100%;
}
.arrow2 {
  position: absolute;
  top: 57%;
  left: 60%;
  width: 151px;
  height: 100px;
  background: url('../../assets/view/login/arrow.png') no-repeat;
  background-size: 100% 100%;
  transform: rotate(158deg);
}

@keyframes spin {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.login_form {
  position: absolute;
  width: 399px;
  height: 505px;
  border-radius: 20px;
  top: 14%;
  right: 5%;
  .login_title {
    font-size: 26px;
    font-weight: 600;
    font-family: Georgia, serif;
    color: #fafafa;
    margin-top: 50px;
    text-align: center;
    overflow: hidden;
  }
  .login_params {
    width: 85%;
    height: 60%;
    margin: 0 auto;
    margin-top: 70px;
    :deep(.n-input) {
      user-select: none;
      -webkit-app-region: no-drag;
      height: 48px;
      background: rgba($color: #6b6b6b, $alpha: 0.1);
      border: none;
      .n-input__border {
        border: none;
      }
      .n-input__input-el {
        height: 100%;
      }
      input {
        font-size: 16px;
        color: #fafafa;
      }
    }
    .pwd {
      margin-top: 50px;
    }
    .login_btn {
      width: 100%;
      margin-top: 50px;
      button {
        width: 100%;
      }
    }
  }
}
</style>
