import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/page/Home";
import About from "../components/page/About";
import Error from "../components/page/error_404";
import UserAdd from "../components/page/UserAdd";
import UserView from "../components/page/UserView";
import Contact from "../components/page/Contact";
export const routes = [
    {
        path: '/',
        component: Home,
        name: 'anasayfa',
    },
    {
        path: '/about',
        component: About,
        name:'hakkimizda',
    },
    {
        path: '/user-add',
        component: UserAdd,
        name:'uye-ekle',
    },
    {
        path: '/user-view/:id',
        component: UserView,
        name:'uye-goruntule',
    },
    {
        path: '/contact',
        component: Contact,
        name:'iletisim',
    },
    {
        path: '*',
        component: Error,
        name:'hata',
    }
];

Vue.use(VueRouter);