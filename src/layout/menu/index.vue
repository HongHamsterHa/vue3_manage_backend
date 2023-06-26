<template>
  <template v-for="item in menuList" :key="item.path">
    <!-- 没有子路由 -->
    <template v-if="!item.children">
      <el-menu-item
        v-if="!item.meta.hidden"
        :index="item.path"
        :route="item.path"
      >
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有子路由且只有一个 -->
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item
        v-if="!item.children[0].meta.hidden"
        :index="item.children[0].path"
        :route="item.children[0].path"
      >
        <template #title>
          <el-icon>
            <component :is="item.children[0].meta.icon"></component>
          </el-icon>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有子路由且不止一个 -->
    <el-sub-menu
      v-if="item.children && item.children.length > 1"
      :index="item.path"
      :route="item.path"
    >
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <myMenu :menuList="item.children"></myMenu>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
// import { useRouter } from "vue-router";
// let $router = useRouter();

// 获取父组件传递的菜单数组
defineProps(["menuList"]);
// 点击菜单跳转
// const goRoute = (vc: any) => {
//   console.log(vc.index);
//   // 路由跳转
//   // $router.push(vc.index);
// };
</script>
<script lang="ts">
export default {
  name: "myMenu",
};
</script>


<style lang="scss" scoped>
</style>
