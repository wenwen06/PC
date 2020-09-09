import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import axios from 'axios'
import echarts from 'echarts'
import { DropdownMenu, DropdownItem } from 'vant';

Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.prototype.$echarts = echarts
Vue.prototype.$axios=axios
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
