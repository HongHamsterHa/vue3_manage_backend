<template>
  <div class="login_container">
    <el-form
      class="login_form"
      :model="loginForm"
      :rules="rules"
      ref="loginForms"
    >
      <h1>LOGIN</h1>
      <el-form-item label="账号：" prop="username">
        <el-input v-model="loginForm.username" clearable> </el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="loginForm.password" show-password> </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          class="login_btn"
          type="primary"
          @click="login"
          :loading="loading"
          >LOGIN</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import userUserStore from "@/store/modules/user";
import { useRouter } from "vue-router";
import { ElMessage, FormRules } from "element-plus";

// 用户相关仓库
let useStore = userUserStore();
// 路由器
let $router = useRouter();
// loading
let loading = ref(false);
// 表单
let loginForm = reactive({
  username: "",
  password: "",
});
// 获取整个表单
let loginForms = ref();

// 表单校验规则
const rules = reactive<FormRules>({
  username: [{ required: true, message: "账号不能为空", trigger: "blur" }],
  password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
});

// 点击登陆按钮事件
const login = async () => {
  // 表单校验通过发请求
  await loginForms.value.validate();
  loading.value = true;
  // ------第一种写法
  // try {
  //   await useStore.userLogin(loginForm);
  //   ElMessage.success("登陆成功");
  //   $router.push("/");
  // } catch (error) {
  //   ElMessage.error((error as Error).message);
  // }

  // -------第二种写法
  useStore
    .userLogin(loginForm)
    .then(() => {
      ElMessage.success("登陆成功");
      loading.value = false;
      $router.push("/");
    })
    .catch((error) => {
      loading.value = false;
      ElMessage.error(error.message);
    });
};
</script>

<style lang="scss" scoped>
.login_container {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;

  .login_form {
    position: absolute;
    width: 400px;
    height: 300px;
    background-color: #fff;
    left: 38%;
    top: 20%;
    padding: 40px 30px;
    border-radius: 15px;

    h1 {
      margin: 20px;
      font-size: 20px;
      text-align: center;
    }

    .login_btn {
      width: 45%;
      margin-left: 28%;
    }
  }
}
</style>
