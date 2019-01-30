import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/carousoul'
import Loading from '@/components/loading'
import Heade from '@/components/header'

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
    }
  ]
})
