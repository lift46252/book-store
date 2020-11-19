import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from "vue-router";
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Home from "./components/Home.vue";
import Cart from "./components/Cart.vue";
import Form from "./components/Form.vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

const routes = [
  {path: "/", component: Home, name: "home"},
  {path: "/cart", component: Cart, name: "cart"},
  {path: "/add-book", component: Form, name: "add-book"}
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
