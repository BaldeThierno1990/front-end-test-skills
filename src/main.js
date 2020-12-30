import Vue from 'vue'
import App from './App.vue'
import router from './router'

//connect

import  Axios  from  'axios'

Vue.config.productionTip  =  false
Vue.prototype.$http  =  Axios;
const  accessToken  =  localStorage.getItem('access_token')

if (accessToken) {
Vue.prototype.$http.defaults.headers.common['Authorization'] =  accessToken
}

//

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
