/*
 * @Author: SUN HENG
 * @Date: 2024-01-25 19:03:58
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-31 15:07:42
 * @FilePath: \Electronvite\src\views\login\hooks\useLogin.hook.ts
 * @Description:
 */
import { ref } from 'vue'
import { Person, LockClosed } from '@vicons/ionicons5'
import { useRouter } from 'vue-router'
import BaseApi from '@/apis/login'

export function useLogin() {
  const router = useRouter()
  const username = ref()
  const password = ref()
  const HandleClick = () => {
    BaseApi.Login({
      name: username.value,
      password: password.value
    })
      .then((res) => {
        if (res.data?.token) {
          window.$message.success('登录成功')
          window.localStorage.setItem('jwtToken', res.data.token)
          router.push({
            name: 'Main'
          })
        } else {
          window.$message.error(res.data.message)
        }
      })
      .catch((err) => {
        window.$message.error('网络错误,请联系管理员!')
      })
  }
  return {
    router,
    username,
    password,
    Person,
    LockClosed,
    HandleClick
  }
}
