import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/Home.vue'),
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const el = document.querySelector(to.hash)
          if (el) {
            const offset = 80 // Navbar h-16 (64px) + padding
            const y = el.getBoundingClientRect().top + window.scrollY - offset
            window.scrollTo({ top: y, behavior: 'smooth' })
            resolve(true)
          } else {
            console.warn(`Element not found: ${to.hash}`) // For debugging
            resolve({ top: 0 })
          }
        }, 150) // Increased slightly — 100-200ms works best in Vite
      })
    }
    return { top: 0 }
  },
})

export default router