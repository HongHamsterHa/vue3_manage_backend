<!-- 一级路由组件 -->
<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="left_slider">
      <h1 class="logo_title">XXXXX管理平台</h1>
      <el-menu router>
        <myMenu :menuList="userStore.menuRoutes"></myMenu>
      </el-menu>
    </div>
    <!-- 顶部导航 -->
    <div class="top_tabbar"></div>
    <!-- 内容区域 -->
    <div class="layout_main">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <!-- 添加切换特效，不需要的话将transition和v-slot去掉即可 -->
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
// 引入菜单组件
import myMenu from "./menu/index.vue";
// 获取用户相关的小仓库，从pinia中可以看到menuRoutes数据，动态生成菜单栏
import useUserStore from "@/store/modules/user";
let userStore = useUserStore();
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  .left_slider {
    width: $left-menu-width;
    height: 100vh;
    // padding: 10px 20px;
    background-color: $left-menu-bgcolor;
    .logo_title {
      text-align: center;
      padding: 20px;
      color: $theme-main-color;
    }
    .el-menu {
      border-right: none;
    }
  }
  .top_tabbar {
    position: fixed;
    top: 0;
    left: $left-menu-width;
    width: calc(100% - $left-menu-width);
    height: $top-tabbar-height;
    background-color: aqua;
  }
  .layout_main {
    position: fixed;
    top: $top-tabbar-height;
    left: $left-menu-width;
    width: calc(100% - $left-menu-width);
    height: calc(100vh - $top-tabbar-height);
    background-color: aquamarine;
    padding: 20px;
    overflow: hidden;
  }
}
// 路由切换特效
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
}
</style>
