import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'
import BaseModal from '@/components/ui/BaseModal.vue';

const app = createApp(App)
app.use(store)
app.use(router)
app.component('base-modal', BaseModal);
app.mount('#app')
