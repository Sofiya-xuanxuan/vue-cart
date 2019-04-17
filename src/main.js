import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import './plugins/element.js'
import router from './router'

Vue.config.productionTip = false;
//总线模式
Vue.prototype.$bus=new Vue();
Vue.prototype.$axios=axios;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
