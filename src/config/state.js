import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store(
    {
        state:{
            nav: {
                tag: 'li',
                list: [
                    {
                        url: '/',
                        text: 'Ana Sayfa',
                    },
                    {
                        url: '/about',
                        text: 'Hakkımda',
                    },
                    {
                        url: '/user-add',
                        text: 'Üye Ekle',
                    },
                    {
                        url: '/Contact',
                        text: 'İletişim',
                    },
                ],
            },
        },
        getters:{

        },
    }
);