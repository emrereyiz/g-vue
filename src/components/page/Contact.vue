<template>
    <div>
        <input v-model="test" v-bind:class="{'test': $v.test.required}" type="text" >
        {{$v.test.required}}
        <div class="row">
            <div v-bind:class="typeClass(form.tag) + ' form-group'" v-for="form in formList">
                <label class="col-form-label col-form-label-lg" v-bind:for="form.name">
                    {{form.label}}
                </label>
                <input v-model="formLog[form.name]" v-if="form.tag == 'text'" v-bind:name="form.name" class="form-control form-control-lg" v-bind:type="form.tag">
                <textarea v-model="formLog[form.name]" v-if="form.tag == 'textarea'" v-bind:name="form.name" class="form-control form-control-lg" v-bind:type="form.tag">
                </textarea>
            </div>
            <button v-on:click="sendMessage" type="button" class="btn btn-primary btn-lg btn-block">Gönder</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";

import {required} from "vuelidate/lib/validators"

    export default {
        data(){
            return{
                formList:[
                    {
                        name: 'name',
                        label: 'İsim',
                        tag: 'text',
                    },
                    {
                        name: 'surName',
                        label: 'Soy İsim',
                        tag: 'text',
                    },
                    {
                        name: 'email',
                        label: 'E-posta',
                        tag: 'text',
                    },
                    {
                        name: 'phone',
                        label: 'Telefon Numarası',
                        tag: 'text',
                    },
                    {
                        name: 'message',
                        label: 'Mesajın',
                        tag: 'textarea',
                    },
                ],
                formLog: {
                    name:null,
                    surName:null,
                    email:null,
                    phone:null,
                    message:null,
                },
                test: null,
            }
        },
        validations: {
            test:{
                required,
            }
        },
        methods:{
            typeClass(type){
                if(type == "textarea"){
                    return 'col-12';
                }else{
                    return 'col-6';
                }
            },
            sendMessage(){
                this.$store.state.contactForm = this.formLog;
                axios.post("contact.json", {
                    name: this.formLog.name,
                    surName: this.formLog.surName,
                    email: this.formLog.email,
                    phone: this.formLog.phone,
                    message: this.formLog.message,
                    date: new Date(),
                }).then(response =>{
                    alert('Mesajın gönderildi.')
                }).catch(response=>{
                    alert('Hata var');
                });
            },
        },
    }
</script>
<style lang="scss" scoped>
    .row{
        padding:40px 0;
    }
</style>