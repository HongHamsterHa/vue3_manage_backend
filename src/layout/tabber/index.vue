<template>
  <div class="tabber">
    <div class="tabber_left">
      <!-- 缩放侧边栏图标 -->
      <el-icon style="margin-right: 8px; cursor: pointer" @click="changeIcon">
        <component
          :is="layoutSettingStore.fold ? 'Expand' : 'Fold'"
        ></component>
      </el-icon>
      <!-- 左侧面包屑 -->
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="tabber_right">
      <!-- 日期显示 -->
      <div class="tabber_right_date">
        <el-icon style="vertical-align: middle; margin-right: 8px">
          <Calendar />
        </el-icon>
        <span class="date_text">{{ date }}</span>
      </div>
      <div class="tabber_divide"></div>
      <!-- 头像 -->
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        style="margin-right: 10px"
      />
      <!-- 下拉菜单 -->
      <el-dropdown>
        <span class="el-dropdown-link">
          admin
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";
import useLayoutSettingStore from "@/store/modules/setting";
// 获取当前日期
const date = ref("");
const getCurrentDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  date.value = `${year} / ${month} / ${day}`;
};
getCurrentDate();
// 切换侧边栏缩放图标
const layoutSettingStore = useLayoutSettingStore();
const changeIcon = () => {
  layoutSettingStore.fold = !layoutSettingStore.fold;
};
</script>
<script lang="ts">
export default {
  name: "myTabber",
};
</script>

<style lang="scss" scoped>
.tabber {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 20px 30px;
  .tabber_left {
    display: flex;
  }
  .tabber_right {
    display: flex;
    align-items: center;
    .tabber_divide {
      width: 2px;
      height: 20px;
      background-color: #f1f1f1;
      margin: 0 15px;
    }
    .tabber_right_date {
      background-color: #f8f9fd;
      height: 40px;
      width: 150px;
      padding: 10px;
      border-radius: 10px;
      text-align: center;
      .date_text {
        font-size: 13px;
        color: $theme-text-color;
      }
    }
  }
}
</style>
