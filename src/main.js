import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import interact from "interactjs";
// import 'wowjs/dist/wow';
// import 'tiny-slider/dist/tiny-slider';
// import '@/utils/custom';
// import '@/utils/css/style.css';

const app = createApp(App);

app.use(router);
app.use(interact);
app.mount('#app');
