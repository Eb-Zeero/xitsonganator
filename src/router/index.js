import Vue from 'vue'
import Router from 'vue-router'
import WordDefinition from '@/components/WordDefinition'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WordDefinition',
      component: WordDefinition
    }
  ]
})
