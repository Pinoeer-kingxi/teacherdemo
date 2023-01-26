import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import DiscussionView from '@/views/DiscussionView'
import SearchView from '@/views/SearchView'
import AboutView from '@/views/AboutView'
import PAMH from "@/views/PAMH";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/DiscussionView',
    name: 'DiscussionView',
    component: DiscussionView
  },
  {
    path: '/search',
    name: 'SearchView',
    component: SearchView
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/PAMH',
    name: 'PAMH',
    component: PAMH
  }
]

const router = new VueRouter({
  routes
})

export default router
