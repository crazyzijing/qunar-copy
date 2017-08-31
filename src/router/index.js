import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index/Index'
import Hotel from '../components/Hotel/Hotel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shouye',
      component: Index
    },
    {
    	path:'/hotel',
    	name:'hotel',
    	component:Hotel
    },
    {
    	path: '*',
     	redirect:'./'
    }
  ]
})
