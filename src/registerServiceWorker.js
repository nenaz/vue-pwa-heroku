/* eslint-disable no-undef */
import { Workbox } from "workbox-window";

let wb;

if ("serviceWorker" in navigator) {
  wb = new Workbox(`${process.env.BASE_URL}service-worker.js`);

  wb.addEventListener("controlling", () => {
    window.location.reload();
  });

  wb.addEventListener('push', (event) => {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);
  
    const title = 'Firebase service worker';
    const options = {
      body: 'Yay it works.',
      icon: 'images/icons/icon.png',
      badge: 'images/icons/badge.png',
      image: 'img/pic/chrome-image.png',
    };
  
    event.waitUntil(wb.registration.showNotification(title, options));
  });
  
  wb.addEventListener('notificationclick', (event) => {
    console.log('[Service Worker] Notification click Received.');
  
    event.notification.close();
  
    event.waitUntil(
      clients.openWindow('https://vue-pwa-nenaz.firebaseapp.com/'),
    );
  });
  

  wb.register();
} else {
  wb = null;
}

export default wb;