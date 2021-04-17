<template>
  <div class="login-wrap">
    <el-form
      class="login-form"
      label-position="top"
      label-width="80px"
      :model="fromData"
    >
      <h2>管理员登录</h2>
      <el-form-item label="用户名">
        <el-input
          v-model="fromData.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="fromData.password"
          placeholder="请输入密码"
          type="password"
        ></el-input>
      </el-form-item>
      <el-button class="btn-login" @click="handleLogin" type="primary">
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fromData: {
        username: '',
        password: '',
      }
    };
  },

  methods: {
    checkEmpty() {
      return this.fromData.username !== '' && this.fromData.password !== '';
    },

    // 点击登录按钮
    handleLogin() {
      if (this.checkEmpty()) {
        this.$router.push('/home');
      } else {
        this.$message({
          type: 'warning',
          showClose: true,
          message: '用户名或密码为空'
        });
      }
    }
  }

};
</script>

<style lang="less" scoped>
.login-wrap {
  height: 100%;
  background: #324152;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form {
    background: #fff;
    width: 560px;
    height: 400px;
    padding: 30px;
    border-radius: 12px;

    .btn-login {
      width: 100%;
    }
  }
}
</style>
