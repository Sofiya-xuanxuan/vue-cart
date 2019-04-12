import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false;
//总线模式
Vue.prototype.$bus=new Vue();
new Vue({
  render: h => h(App),
}).$mount('#app')
