import Vue from 'vue'
import Router from 'vue-router'
import Photo from './views/Photo'
import Home from './views/Home.vue'
import ScrollBarPlugin from './views/ScrollBarPlugin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/scrollbarplugin',
      name: 'ScrollBarPlugin',
      component: ScrollBarPlugin
    },
    { 
      path: '/photo',
      name: 'Photo',
      component: Photo
    },
  ]
})
