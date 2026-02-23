import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import User from '../components/User.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/user/:id', component: User },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router