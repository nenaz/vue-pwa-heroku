import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import wb from "./registerServiceWorker";

Vue.prototype.$workbox = wb;
Vue.config.productionTip = false
Vue.use(ElementUI);

const config = {
  apiKey: 'AIzaSyBOWCi6YL01wPgvyPS8OqFqlOmc-JcO0fs',
  authDomain: 'vue-pwa-nenaz.firebaseapp.com',
  databaseURL: 'https://vue-pwa-nenaz.firebaseio.com',
  projectId: 'vue-pwa-nenaz',
  storageBucket: 'vue-pwa-nenaz.appspot.com',
  messagingSenderId: '475688906451',
  appId: '1:475688906451:web:0766398ea2cac54bc16e26',
  measurementId: 'G-7RXMKFRCZF',
}; // 4. Get Firebase Configuration
// firebase.initializeApp(config);

new Vue({
  render: h => h(App),
}).$mount('#app')
