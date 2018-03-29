import Vue from 'vue';
import App from './App.vue';
import './style.scss';

new Vue({
  render: h => h(App)
}).$mount('#app');

// new Vue({
//   el: '#app',
//   components: { App }
// });