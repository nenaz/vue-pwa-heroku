import Vue from 'vue'
import App from './App.vue'
// import * as firebase from 'firebase';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import wb from "./registerServiceWorker";

Vue.prototype.$workbox = wb;
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
