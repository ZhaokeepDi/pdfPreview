import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
import store from "./store"
App.mpType = 'app'
Vue.prototype.$store = store
// 组件
import pageHead from './components/header.vue'
import serch from './components/serch.vue'
import display from './components/display.vue'
// 组件注册
Vue.component('page-head',pageHead)
Vue.component('page-serch',serch)
Vue.component('page-display',display)
const app = new Vue({
	...App,
	 store
})
app.$mount()
