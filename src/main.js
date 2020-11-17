import Vue from 'vue'
import App from './App.vue'
import store from "./store"
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Home from "./components/Home.vue"
import Cart from "./components/Cart.vue"
import Navbar from "./components/Navbar.vue"
import Books from "./components/Books.vue"

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const routes = [
  { path: '/Home', component: Home },
  { path: '/Cart', component: Cart }
]
// const routes = [{
//   path: '/',
//   components: {
//     default: Home,
//   }
// }]

const router = new VueRouter({
  routes 
})

Vue.component("app-Home",Home)
Vue.component("app-Cart",Cart)
Vue.component("app-Books",Books)
Vue.component("app-Navbar",Navbar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
