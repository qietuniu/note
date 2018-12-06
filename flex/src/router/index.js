import Vue from 'vue'
import Router from 'vue-router'
import Flex from '@/components/Flex'
import MediaQuery from '@/components/MediaQuery'
import JSRem from '@/components/jsrem'
import Scss from '@/components/Scss'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Flex',
      component: Flex
    },
    {
      path: '/MediaQuery',
      name: 'MediaQuery',
      component: MediaQuery
    },
    {
      path: '/JSRem',
      name: 'JSRem',
      component: JSRem
    },
    {
      path: '/Scss',
      name: 'Scss',
      component: Scss
    }
  ]
})
