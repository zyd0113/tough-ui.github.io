import Vue from 'vue'
import App from './App.vue'
import ThButton from './components/button.vue'
import ThDialog from './components/dialog.vue'
import ThInput from './components/input.vue'
import ThSwitch from './components/switch.vue'
import ThRadio from './components/radio.vue'
import './assets/fonts/font.scss'
Vue.config.productionTip = false

Vue.component(ThButton.name, ThButton)
Vue.component(ThDialog.name, ThDialog)
Vue.component(ThInput.name, ThInput)
Vue.component(ThSwitch.name, ThSwitch)
Vue.component(ThRadio.name, ThRadio)
new Vue({
  render: h => h(App)
}).$mount('#app')
