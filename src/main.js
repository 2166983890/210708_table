// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import Element from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Avue);
Vue.use(Element)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render:h=>h(App)
}).$mount("#app")
