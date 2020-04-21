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
firebase.initializeApp(config);

const messaging = firebase.messaging();
console.log('messaging', messaging);

messaging.usePublicVapidKey('BCY78_PZqo5lw1SRzIsjwrmPBSvU8_4M6uPTZqo_1eOf8OWuSx_UggmtNtVYlZ-6tH1W9_W-DvYWtkee15UdY-I'); // 1. Generate a new key pair

// Request Permission of Notifications
messaging.requestPermission().then(() => {
  console.log('Notification permission granted.');

  // Get Token
  messaging.getToken().then((token) => {
    console.log(token);
  });
}).catch((err) => {
  console.log('Unable to get permission to notify.', err);
});


new Vue({
  render: h => h(App),
}).$mount('#app')
