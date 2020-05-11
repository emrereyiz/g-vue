import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import {routes} from "./config/routing";
import {request} from "./config/request"
import {store} from './config/state';


const router = new VueRouter({
  routes: routes,
  mode: 'history',
})

new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
})
