import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/carousoul'
import Loading from '@/components/loading'
import Heade from '@/components/header'
import Regsiter from '@/components/regsiter'
import Login from '@/components/login'
import MainFrame from '@/components/mainframework'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/loading',
      name: 'loading',
      component: Loading
    },
    {
      path: '/header',
      name: 'header',
      component: Heade
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/regsiter',
      name: 'regsiter',
      component: Regsiter
    },
    {
      name: 'main',
      path: '/main',
      component: MainFrame
    }
  ]
})
