import { createRouter, createWebHistory } from 'vue-router'
import BienvenuView from '../views/BienvenuView.vue'
import AccueilView from '../views/AccueilView.vue'
import ConnexionView from '../views/ConnexionView.vue'

const routes = [
  {
    path: '/', //l'endroit sur le site, ce qu'on rajoute apres le lien
    name: 'bienvenu', //son nom, on l'appelera par celui la sur notre links
    component: BienvenuView  //source du fichier
  },
  {
    path: '/accueil',
    name: 'accueil',
    component: AccueilView
  },
  {
    path: '/connexion',
    name: 'connexion',
    component: ConnexionView
  },
  {
    path: '/a_propos',
    name: 'a_propos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
