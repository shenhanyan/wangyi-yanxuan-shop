import Home from '@/pages/Home';
import Classify from '@/pages/Classify';
import Cart from '@/pages/Cart';
import Personal from '@/pages/Personal';
import Worthbuy from '@/pages/Worthbuy';


export default {

}[
  {
    path: '/',
    name: Home,
    component: () => import('../views/Home.vue')
  },

  {
    path: '/Classify',
    name: Classify,
    component: () => import('../views/Classify.vue')
  },

  {
    path: '/Cart',
    name: Cart,
    component: () => import('../views/Cart.vue')
  },

  {
    path: '/Personal',
    name: Personal,
    component: () => import('../views/Personal.vue')
  },
  {
    path: '/Worthbuy',
    name: Worthbuy,
    component: () => import('../views/Worthbuy.vue')
  }
]
