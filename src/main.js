import Vue from 'vue'
import App from './App.vue'
import router from '../src/router/router'
import store from '../src/store/store'

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')