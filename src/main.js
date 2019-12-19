import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from "buefy";

import "@/components/header.scss";

Vue.config.productionTip = false

import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import { faGlobe, faCog, faCubes, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGlobe, faCog, faCubes, faSignOutAlt);
Vue.component('vue-fontawesome', FontAwesomeIcon);
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
