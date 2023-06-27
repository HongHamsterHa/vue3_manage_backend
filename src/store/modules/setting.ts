// layout组件相关配置仓库
import { defineStore } from 'pinia';

const useLayoutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      fold: false, // 用于控制侧边栏是否展开收起
    }
  }
})

export default useLayoutSettingStore