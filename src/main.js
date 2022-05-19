import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import globalDirectives from './plugins/global-directives';
// import focus from '@/directives/focus';
// import globalComponents from '@/plugins/global-components';

const app = createApp(App);
// app.use(globalComponents);
// app.directive('focus', focus);
app.use(router);
app.use(globalDirectives);
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';

// console.log('MODE: ', import.meta.env.MODE);
// console.log('BASE_URL: ', import.meta.env.BASE_URL);
// console.log('PROD: ', import.meta.env.PROD);
// console.log('DEV: ', import.meta.env.DEV);
// console.log('VITE_APP_API_URL: ', import.meta.env.VITE_APP_API_URL);
