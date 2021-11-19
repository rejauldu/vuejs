require('./bootstrap');

import Vue from 'vue';
import App from './App.vue'
import CartComponent from './components/cart.vue'
Vue.component('cart', CartComponent)

import router from './router';
import store from './store';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://ecommerce';

const app = new Vue({
    el: '#app',
	render: h => h(App)
});
