import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import calendar from '@/page/calendar'
import person from '@/page/person'
import search from '@/page/search'
import news from '@/page/news'
import other from '@/page/other'
import tabber from '@/components/tabber/tabber'
import login from '@/components/login'

Vue.use(Router)

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
export default new Router({
	mode:'history',
  	routes: [
    {
      path: '/',
     	redirect: '/home',
    },
    {
  		path: '/home',
  		name: 'home',
  		components: {
	 			one:home, 
				tab:tabber
   		},
	},
    {
	    path: '/calendar',
	    name: 'calendar',
	    components: {
     		one:calendar, 
     		tab:tabber
      }
	},
    {
	    path: '/person',
	    name: 'person',
	    components: {
     		one:person,  
     		tab:tabber
      }
	},
  	{
  		path: '/search',
  		name: 'search',
  		components: {
     		one:search,
     		tab:tabber
   		}
	},
    {
      	path: '/news',
      	name: 'news',
      	components: {
	     		one:news, 
	     		tab:tabber
       	}
	},
    {
      	path: '/other',
      	name: 'other',
      	components: {
     			two:other, 
       	}
	},
	{
		path:'/login',
		name:'login',
		components: {
 			one:login, 
   	}
	}

  ]
})