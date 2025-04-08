import { createRouter, createWebHistory } from 'vue-router'
import Products from '@/pages/Products.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'produtos',
      component: Products,
    },
  ],
})

export default router
