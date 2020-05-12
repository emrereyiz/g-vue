import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

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
            userRequest: false,
            userData: [
            ],
        },
        mutations: {
            setUser(state, value){
                axios.post('users.json', {
                    userName: value.email,
                    userPass: value.pass,
                })
                .then(response => {
                    alert(`${value.email} ve ${value.pass} başarıyla eklendi.`)
                })
                .catch(function (error) {
                    alert(error);
                });
            },
            updateUser(state, value){
               axios.patch('users/'+value.key+'.json', {
                   userName: value.name,
                   userPass: value.pass,
               })
               .then(response => {
                   alert(`${value.name} ve ${value.pass} olarak güncellendi.`)
               })
               .catch(function (error) {
                   alert(error);
               });
            },
            deleteUser(state, value){
               axios.delete('users/'+value.key+'.json')
               .then(response => {
                   alert(`Üye silindi.`)
               })
               .catch(function (error) {
                   alert(error);
               });
            },
            getUser(state,value){
                axios.get('users.json')
                .then(response => {
                    this.state.userData = [];
                    this.state.userRequest = true;
                    let data = response.data;
                    for(let key in data){
                        this.state.userData.push(
                            {
                                key: key,
                                data: data[key],
                            },
                        );
                    };
                })
                .catch(function (error) {
                alert(error);
                });
            },
        },
        actions: {
            setUser({commit}, value){
                commit("setUser", value);
            },
            updateUser({commit}, value){
                commit("updateUser", value);
            },
            deleteUser({commit}, value){
                commit("deleteUser", value);
            },
            getUser({commit}, value){
                commit("getUser", value);
            },
        },
    }
);