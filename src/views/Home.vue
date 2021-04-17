<template>
  <el-container class="container">
    <!-- header -->
    <el-header class="header">
      <el-row>
        <el-col :span="4"> LOGO </el-col>
        <el-col class="title-div" :span="16">
          <h2>电商后台管理系统</h2>
        </el-col>
        <el-col class="logout-div" :span="4">
          <a class="logout" @click="handleLogout">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <!-- container -->
    <el-container>
      <!-- Menu -->
      <el-aside class="aside" width="230px">
        <el-menu
          default-active="2"
          :router="true"
          class="el-menu-vertical-demo"
        >
          <!-- 用户管理 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">管理你的用户</template>
              <el-menu-item index="user-list">
                <span>用户列表</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!-- 商品管理 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">管理你的商品</template>
              <el-menu-item index="goods-list">商品列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!-- 订单管理 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">管理你的订单</template>
              <el-menu-item index="order-list">订单列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- Main -->
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {


  beforeMount() {
    this.$message.success('登录成功');
  },

  methods: {
    handleLogout() {
      this.$router.push('/login');
      this.$message.info('已退出');
    }
  },
  components: {
  }
}
</script>

<style lang="less">
.container {
  height: 100%;
  .header {
    line-height: 60px;
    background-color: #b3c0d1;
    .title-div {
      text-align: center;
    }
    .logout-div {
      text-align: right;
      a {
        cursor: pointer;
      }
    }
  }
  .aside {
    background-color: #d3dce6;
  }
  .main {
    background-color: #e9eef3;
  }
}
</style>