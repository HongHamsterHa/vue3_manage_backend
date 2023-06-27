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
defineProps(["menuList"]);
</script>
<script lang="ts">
export default {
  name: "myMenu",
};
</script>


<style lang="scss" scoped>
.el-menu-item {
  margin: 10px 0;
}
.el-menu-item.is-active {
  background-color: #030303;
  color: #fff;
  border-radius: 15px;
}
.el-menu-item:hover {
  transition: background-color 0.3s ease;
  background-color: #bebebe;
  color: #fff;
  border-radius: 15px;
}
</style>
