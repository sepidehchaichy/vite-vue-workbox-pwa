import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
  if(import.meta.env.PROD){

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      const registration = await navigator.serviceWorker.register(`${import.meta.env.BASE_URL}service-worker.js`)
      registration.update();
    })
  }
}
