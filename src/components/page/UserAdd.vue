<template>
    <div class="col-12">
        <div class="row">
            <div class="col-6">
                <form>
                    <fieldset>
                        <div class="form-group">
                            <label for="exampleInputEmail1">E-posta</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-posta gir." v-model="userObj.email">
                            <small id="emailHelp" class="form-text text-muted">E-postanı kimseyle paylaşmayacağız.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Parola</label>
                            <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Parola gir." v-model="userObj.pass">
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <button type="button" class="btn btn-primary" v-on:click="addUser">Üye Ekle</button>
                            </div>
                            <div class="col-4">
                                <button type="button" class="btn btn-success" v-on:click="getUser">Üyeleri Göster</button>
                            </div> 
                        </div>
                    </fieldset>
                </form>
            </div>
            <div class="col-6">
                <ul class="list-group" v-if="getRequest">
                    <app-list>
                    </app-list>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import List from "../page/UserList";

export default {
    components: {
        appList: List,
    },
    data(){
        return {
            userObj: {
                email: null,
                pass: null,
            },
        }
    },
    computed: {
        getRequest(){
            return this.$store.state.userRequest;
        },
    },
    methods: {
        addUser(){
           if(this.userObj.email != null && this.userObj.pass != null){
                this.$store.dispatch('setUser', this.userObj);

           }else{
               alert('Lütfen verileri giriniz.');
           }
        },
        getUser(){
            this.$store.dispatch('getUser', this.userObj);
        },
    },
    destroyed(){
        this.$store.state.userRequest = false;
    }
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
button{
    width:100%;
}
</style>