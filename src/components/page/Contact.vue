<template>
    <div>
        <div class="row">
            <div v-bind:class="typeClass(form.tag) + ' form-group'" v-for="form in formList">
                <label class="col-form-label col-form-label-lg" v-bind:for="form.name">
                    {{form.label}}
                </label>
                <input
                v-bind:class="[
                {'has-error':$v.formLog[form.name].$model != null},
                {'has-success':!$v.formLog[form.name].$invalid}]"
                v-model="formLog[form.name]"
                v-if="form.tag == 'text'"
                v-bind:name="form.name"
                class="form-control form-control-lg"
                v-bind:type="form.tag">

                <textarea
                v-model="formLog[form.name]"
                v-if="form.tag == 'textarea'"
                v-bind:name="form.name"
                class="form-control form-control-lg"
                v-bind:type="form.tag">
                </textarea>
            </div>
            <b-button v-on:click="sendMessage()"
            v-b-tooltip.hover v-bind:title="tooltipMessage"
            v-bind:class="{'c-disabled': $v.$invalid}"class="btn btn-primary btn-lg btn-block">Mesajı Gönder</b-button>
        </div>
    </div>
</template>

<script>
import axios from "axios";

import {required, minLength, email, alpha, numeric, maxLength} from "vuelidate/lib/validators"

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
            }
        },
        computed: {
            tooltipMessage(){
                return this.$v.$invalid ? 'Tüm formu doldurmalısın.' : ''
            },
        },
        validations: {
            formLog:{
                name:{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(100),
                },
                surName:{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(100),
                },
                email:{
                    required,
                    minLength: minLength(3),
                    email,
                    maxLength: maxLength(100),
                },
                phone:{
                    required,
                    minLength: minLength(9),
                    numeric,
                    maxLength: maxLength(11),
                },
                message:{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(200),
                },
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
                if(!this.$v.$invalid){
                    this.$store.state.contactForm = this.formLog;
                    axios.post("contact.json", {
                        name: this.formLog.name,
                        surName: this.formLog.surName,
                        email: this.formLog.email,
                        phone: this.formLog.phone,
                        message: this.formLog.message,
                        date: new Date(),
                    }).then(response =>{
                        alert('Mesajın başarıyla gönderildi.');
                    }).catch(response=>{

                    });
                }else{
                    return false;
                    alert('Lütfen tüm formu doldurunuz.');
                }
            },
        },
    }
</script>
<style lang="scss" scoped>
    .row{
        padding:40px 0;
    }
    input,textarea{
        border-width: 2px;
    }
    .has-error{
        border-color:red;
    }
    .has-success{
        border-color:green;
    }
    .c-disabled{
        opacity: 0.3;
    }
</style>