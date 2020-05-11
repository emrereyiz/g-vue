<template>
    <div class="col-12">
        <div class="row">
            <div class="col-6">
                <form>
                    <fieldset>
                        <div class="form-group">
                            <label for="exampleInputEmail1">E-posta</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-posta gir." v-model="email">
                            <small id="emailHelp" class="form-text text-muted">E-postanı kimseyle paylaşmayacağız.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Parola</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Parola gir." v-model="pass">
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <button type="button" class="btn btn-primary" v-on:click="addUser">Üye Ekle</button>
                            </div>
                            <div class="col-6">
                                <button type="button" class="btn btn-success" v-on:click="getUser">Üyeleri Göster</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div class="col-6">
                <ul class="list-group" v-if="request">
                    <li v-for="user in userList" class="list-group-item justify-content-between align-items-center">
                        <strong>E-posta</strong>
                        <span class="text-primary">{{user.data.userName}}</span>
                        <hr>
                        <strong>Parola</strong>
                        <span class="text-success">{{user.data.userPass}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios";

export default {
    data(){
        return {
            email: null,
            pass: null,
            request: false,
            userList: [],
        }
    },
    methods: {
        addUser(){
            if(this.email != null && this.pass != null){
                axios.post('https://vue-user-add.firebaseio.com/users.json', {
                    userName: this.email,
                    userPass: this.pass,
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }else{
                alert('Lütfen verileri giriniz.');
            }
        },
        getUser(){
            axios.get('https://vue-user-add.firebaseio.com/users.json')
            .then(response => {
                this.request = true;
                let data = response.data;
                this.userList = [];
                for(let key in data){
                    this.userList.push(
                        {
                            key: key,
                            data: data[key],
                        },
                    );

                };
            })
            .catch(function (error) {
                console.log(error);
            });
        },
    },
}
</script>

<style lang="scss" scoped>
.col-6 {
    align-items:center;
    display: flex;
}
span{
    display: inline-block;
    width: 100%;
}
form{
    width:100%;
}
ul{
    width:100%;
    padding:20px 0;
}
</style>