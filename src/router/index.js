import Vue from 'vue'
import VueRouter from 'vue-router'
import Listado from '../views/Listado.vue'
import Login from '../views/Login.vue'
import EditOrder from '../components/EditOrder.vue'
import Logout from '../components/Logout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Listado',
    component: Listado
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/editOrder',
    name: 'EditOrder',
    component: EditOrder
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
