import Vue from 'vue'
import Router from 'vue-router'
import HomeInfo from '@/components/HomeInfo'
import WordDefinition from '@/components/WordDefinition'
import AddWordForm from '@/components/forms/AddWordForm'
import UserRegistrationForm from '@/components/forms/UserRegistrationForm'
import ReportWordForm from '@/components/forms/ReportWordForm'

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
    },
    {
      path: '/addword',
      name: 'HomeInfo',
      component: AddWordForm
    },
    {
      path: '/userreg',
      name: 'HomeInfo',
      component: UserRegistrationForm
    },
    {
      path: '/report',
      name: 'HomeInfo',
      component: ReportWordForm
    }
  ]
})
