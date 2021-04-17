import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import UserList from '@/components/home/user-list.vue';
import GoodsList from '@/components/home/goods-list.vue';
import OrderList from '@/components/home/order-list.vue';

Vue.use(VueRouter);

const routes = [
  // 重定向 -> 登录页面
  {
    path: '/',
    redirect: '/login',
  },
  // 登录页面
  {
    path: '/login',
    component: Login,
  },
  // 首页
  {
    path: '/home',
    component: Home,
    children: [
      // 默认 + 用户列表
      {
        path: '',
        redirect: 'user-list',
      },
      {
        name: 'user-list',
        path: 'user-list',
        component: UserList,
      },
      // 商品列表
      {
        name: 'goods-list',
        path: 'goods-list',
        component: GoodsList
      },
      // 订单列表
      {
        name: 'order-list',
        path: 'order-list',
        component: OrderList
      }
    ]
  }
];

const router = new VueRouter({
  routes,
});

export default router;