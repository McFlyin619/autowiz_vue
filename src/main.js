import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'
import BaseCard from '@/components/ui/BaseCard.vue';
import BaseModal from '@/components/ui/BaseModal.vue';
import VueTour from 'v3-tour';

require('v3-tour/dist/vue-tour.css');

const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueTour)
app.component('base-card', BaseCard);
app.component('base-modal', BaseModal);
app.mount('#app')
