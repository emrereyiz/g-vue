import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import {routes} from "./config/routing";
import {request} from "./config/request"
import {store} from './config/state';
import {validate} from './config/validate';
import {bootsrap} from "./config/bootsrap";



const router = new VueRouter({
  routes: routes,
  mode: 'history',
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
