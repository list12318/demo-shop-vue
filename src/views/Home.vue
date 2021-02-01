<template>
  <el-container class="container">
    <!-- header -->
    <el-header class="header">
      <Header />
    </el-header>
    <!-- container -->
    <el-container>
      <!-- Menu -->
      <el-aside class="aside" width="230px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <!-- 1 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">管理你的用户</template>
              <el-menu-item index="1-1">
                <span>用户列表</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!-- 2 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">管理你的商品</template>
              <el-menu-item index="2-1">商品列表</el-menu-item>
              <el-menu-item index="2-2">分类参数</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!-- 3 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">管理你的订单</template>
              <el-menu-item index="3-1">订单列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- Main -->
      <el-main class="main">
          
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from '@/components/Home/home-header.vue';
export default {
  components: {
    'Header': Header
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
      text-align: center;
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