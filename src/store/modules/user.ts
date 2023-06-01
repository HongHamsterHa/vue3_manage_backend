// 用户相关的小仓库
import { defineStore } from "pinia";
// 引入接口
import { reqLogin } from "@/api/user";
// 引入数据类型
import type { loginForm } from "@/api/user/type";


const useUserStore = defineStore('User', {
  // 存储数据
  state: () => {
    return {
      token: localStorage.getItem("TOKEN")
    }
  },
  // 处理异步/逻辑
  actions: {
    // 用户登陆
    async userLogin(data: loginForm) {
      const res = await reqLogin(data)

      // 登陆成功：保存token
      if (res.code === 200) {
        this.token = res.data.token
        localStorage.setItem("TOKEN", this.token)
        // 返回成功的promise
        return;
      } else {
        // 登陆失败：返回错误信息
        return Promise.reject(new Error(res.data.message))
      }

    }
  },
  getters: {}
})

export default useUserStore;