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
    component: Home
  },
  {
    path: '/korisnici',
    name: 'Korisnici',
    component: Korisnici
  },
  {
    path: '/profil/:korisnicko_ime',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/grad/:ime',
    name: 'Grad',
    component: Grad
  },
  {
    path: '/grad/:ime/preporuka',
    name: 'PreporuceneRute',
    component: PreporuceneRute
  },
  {
    path: '/ruta/:id',
    name: 'Ruta',
    component: Ruta
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
