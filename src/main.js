import Vue from 'vue'
import App from './App'
import mpvueToastRegistry from 'mptoast/src/registry'
Vue.config.productionTip = false
App.mpType = 'app'
mpvueToastRegistry(Vue)
const app = new Vue(App)
app.$mount()
export default {
}
wx.cloud.init({
    env: 'dev',
    traceUser:true
  })