// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: function (h) { return h(App) }
// }).$mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Ensure this path is correct

const app = createApp(App); // Create the app instance

app.use(router); // Use the router

app.mount('#app'); // Mount the app
