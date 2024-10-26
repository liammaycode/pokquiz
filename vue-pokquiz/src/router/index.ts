import { createRouter, createWebHistory } from 'vue-router'
import TexasHoldem from '@/views/TexasHoldem.vue'
import Omaha from '@/views/Omaha.vue'
import BigO from '@/views/BigO.vue'
import Razz from '@/views/Razz.vue'
import Stud from '@/views/Stud.vue'
import App from '@/App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: App },
    { path: '/texasholdem', component: TexasHoldem },
    { path: '/omaha', component: Omaha },
    { path: '/bigo', component: BigO },
    { path: '/razz', component: Razz },
    { path: '/stud', component: Stud }
  ]
})

export default router
