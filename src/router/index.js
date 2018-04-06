import Vue from 'vue'
import Router from 'vue-router'
import HomeInfo from '@/components/HomeInfo'
import WordDefinition from '@/components/WordDefinition'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/word',
      name: 'WordDefinition',
      component: WordDefinition
    },
    {
      path: '/',
      name: 'HomeInfo',
      component: HomeInfo
    }
  ]
})
