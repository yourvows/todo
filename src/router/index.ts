import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/pages/Main.vue')
  },
  {
    path: '/todos',
    name: 'todos',
    component: () => import('@/pages/Todos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router