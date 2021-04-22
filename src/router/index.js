import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Korisnici from '../views/Korisnici.vue'
import Profil from '../views/Profil.vue'
import Grad from '../views/Grad.vue'
import Ruta from '../views/Ruta.vue'
import PreporuceneRute from '../views/PreporuceneRute.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Pocetna - Dijamant turizam' }
  },
  {
    path: '/korisnici',
    name: 'Korisnici',
    component: Korisnici,
    meta: { title: 'Korisnici - Dijamant turizam' }
  },
  {
    path: '/profil/:korisnicko_ime',
    name: 'Profil',
    component: Profil,
    meta: { title: 'Profil - Dijamant turizam' }
  },
  {
    path: '/grad/:ime',
    name: 'Grad',
    component: Grad,
    meta: { title: 'Ture grada - Dijamant turizam' }
  },
  {
    path: '/grad/:ime/preporuka',
    name: 'PreporuceneRute',
    component: PreporuceneRute,
    meta: { title: 'Nasa preporuka - Dijamant turizam' }
  },
  {
    path: '/ruta/:id',
    name: 'Ruta',
    component: Ruta,
    meta: { title: 'Tura - Dijamant turizam' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to, from) => {
  Vue.nextTick(() => {
      document.title = to.meta.title || "Dijamant turizam";
  })
})

export default router
