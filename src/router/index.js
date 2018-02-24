import Vue from 'vue'
import Router from 'vue-router'

import App from '../App'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/atest'
    },
    {
      path: '/atest',
      name: 'App',
      component: App,
      children: [
        {
          path: '',
          component: r => require.ensure([], () => r(require('../page/home')), 'home'),
        }, {
          path: 'question',
          component: r => require.ensure([], () => r(require('../page/question'), 'question'))
        }, {
          path: 'score',
          component: r => require.ensure([], () => r(require('../page/score')), 'score')
        }
      ]
    }
  ]
})
