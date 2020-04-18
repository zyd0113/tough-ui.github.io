import Vue from 'vue'
import App from './App.vue'
import ThUI from '../packages'
Vue.config.productionTip = false
Vue.use(ThUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
