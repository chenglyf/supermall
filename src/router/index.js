import { createRouter, createWebHashHistory } from 'vue-router'


const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Category = () => import('../views/category/Category')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Profile',
    component: Profile
  },
  {
    path: '/Cart',
    component: Cart
  },
  {
    path: '/Category',
    component: Category
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
