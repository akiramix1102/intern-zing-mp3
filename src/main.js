import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// plugins
import "./plugins/element-ui";

import "./assets/styles/index.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
