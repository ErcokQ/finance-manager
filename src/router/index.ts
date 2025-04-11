import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout.vue'
import LoginApp from '@/views/Auth/LoginApp.vue'
import RegisterApp from '@/views/Auth/RegisterApp.vue'
import RecoverApp from '@/views/Auth/RecoverApp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: '',
          name: 'login',
          component: LoginApp
        },
        {
          path: 'register',
          name: 'register',
          component: RegisterApp
        },
        {
          path: 'recover',
          name: 'recover',
          component: RecoverApp
        }

      ]
    },
  ],
})

export default router
