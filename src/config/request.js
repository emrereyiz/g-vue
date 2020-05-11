import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL = 'https://vue-user-add.firebaseio.com/';
axios.defaults.headers.common['Authorization'] = 'reyiz-gvue';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';