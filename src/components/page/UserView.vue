<template>
    <div class="col-9">
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">E-posta</th>
                <th scope="col">Parola</th>
                <th scope="col"></th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">
                        <span class="id">{{userKey}}</span></th>
                    <td>
                        <div class="form-group">
                            <input
                            v-bind:disabled="!updateStatus"
                            type="text"
                            v-model="userName"
                            class="form-control"
                            v-bind:class="{'b-red': $v.userName.$invalid}">
                        </div>
                        </td>
                    <td>
                        <div class="form-group">
                            <input
                            v-bind:disabled="!updateStatus"
                            type="text"
                            v-model="userPass"
                            class="form-control"
                            v-bind:class="{'b-red': $v.userPass.$invalid}">
                        </div>
                        </td>
                    <td><a v-on:click="updateUser"
                    href="javascript:;"
                    class="btn"
                    v-bind:class="{
                        'btn-primary': !updateStatus,
                        'btn-success': updateStatus,
                    }">
                    {{!updateStatus ? 'Güncelle' : 'Onayla'}}
                    <b-icon icon="pencil-square"></b-icon></a></td>
                    <td><a v-on:click="deleteUser"
                    href="javascript:;"
                    class="btn"
                    v-bind:class="{
                        'btn-warning': !deleteStatus,
                        'btn-danger': deleteStatus,
                    }"
                    >{{!deleteStatus ? 'Sil' : 'Onayla'}} <b-icon icon="trash-fill"></b-icon></a></td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>
<script>
import {required} from "vuelidate/lib/validators";
export default {
    data(){
        return{
            userKey: null,
            userName: null,
            userPass: null,
            updateStatus: false,
            deleteStatus: false,
        }
    },
    created(){
        for(let key in this.$store.state.userData){
            let item = this.$store.state.userData[key];
            if(this.$route.params.id == item.key){
                this.userKey = item.key;
                this.userName = item.data.userName;
                this.userPass = item.data.userPass;
            };
        };
    },
    validations: {
        userName: {
            required,
        },
        userPass: {
            required,
        },
    },
    methods: {
        updateUser(){
            this.updateStatus = !this.updateStatus;
            if(!this.updateStatus){
                this.$store.dispatch('updateUser', {name: this.userName, pass: this.userPass, key: this.userKey});
            }else{
            };
        },
        deleteUser(){
            this.deleteStatus = !this.deleteStatus;
            if(!this.deleteStatus){
               this.$store.dispatch('deleteUser', {name: this.userName, pass: this.userPass, key: this.userKey});
            };
        }
    }
}
</script>
<style lang="scss" scoped>
    .btn{
        min-width: 150px !important;
    } 
    .id{
        font-size: 10px;
        opacity: .4;
    }
    .b-red{
        border:solid 2px red;
    }
</style>