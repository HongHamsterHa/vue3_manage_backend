<!-- 一级路由组件 -->
<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div
      class="left_slider"
      :class="{ fold: layoutSettingStore.fold ? true : false }"
    >
      <h1 class="logo_title" v-if="!layoutSettingStore.fold">XXXXX管理平台</h1>
      <el-menu
        router
        :collapse="layoutSettingStore.fold ? true : false"
        :default-active="$route.path"
        background-color="#f8f9fd"
        text-color="#969799"
        active-text-color="#fff"
      >
        <myMenu :menuList="userStore.menuRoutes"></myMenu>
      </el-menu>
    </div>
    <!-- 顶部导航 -->
    <div
      class="top_tabbar"
      :class="{ fold: layoutSettingStore.fold ? true : false }"
    >
      <myTabber></myTabber>
    </div>
    <!-- 内容区域 -->
    <div
      class="layout_main"
      :class="{ fold: layoutSettingStore.fold ? true : false }"
    >
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
import { useRoute } from "vue-router";
// 引入相关组件
import myMenu from "./menu/index.vue";
import myTabber from "./tabber/index.vue";

// 获取用户相关的小仓库，从pinia中可以看到menuRoutes数据，动态生成菜单栏
import useUserStore from "@/store/modules/user";
import useLayoutSettingStore from "@/store/modules/setting";
let userStore = useUserStore();
let layoutSettingStore = useLayoutSettingStore();
let $route = useRoute();
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  .left_slider {
    width: $left-menu-width;
    height: 100vh;
    padding: 10px 20px;
    background-color: $left-menu-bgcolor;
    color: $theme-text-color;
    transition: all 0.3s;
    .logo_title {
      text-align: center;
      padding: 20px;
      color: #000;
    }
    .el-menu {
      border-right: none;
      background-color: $left-menu-bgcolor;
      color: $theme-text-color;
    }
    &.fold {
      width: $left-menu-min-width;
    }
  }
  .top_tabbar {
    position: fixed;
    top: 0;
    left: $left-menu-width;
    width: calc(100% - $left-menu-width);
    height: $top-tabbar-height;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - $left-menu-min-width);
      left: $left-menu-min-width;
    }
  }
  .layout_main {
    position: fixed;
    top: $top-tabbar-height;
    left: $left-menu-width;
    width: calc(100% - $left-menu-width);
    height: calc(100vh - $top-tabbar-height);
    padding: 20px;
    overflow: hidden;
    transition: all 0.3s;

    &.fold {
      width: calc(100vw - $left-menu-min-width);
      left: $left-menu-min-width;
    }
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
