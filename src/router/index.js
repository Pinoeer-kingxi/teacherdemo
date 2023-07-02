import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '@/views/HomeView'
import NewsView from '@/views/NewsView'
import DiscussionView from '@/views/DiscussionView'
import SearchView from '@/views/SearchView'
import AboutView from '@/views/AboutView'
import MessageArea from '@/views/MessageArea'
import PAMH from "@/views/PAMH";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/NewsView',
    name: 'NewsView',
    component: NewsView
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
  },
  {
    path: '/message',
    name: 'MessageArea',
    component: MessageArea
  }
]

const router = new VueRouter({
  routes
})

export default router
