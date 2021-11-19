require('./bootstrap');

import Vue from 'vue';
import CartComponent from './components/cart.vue'
import App from './App.vue'
Vue.component('cart', CartComponent)

import router from './router';
import store from './store';



new Vue({
    el: '#app',
	render: h => h(App),
    router,
    store
});