import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/styles/common.css'
import '@/assets/js/flexible'
import echarts from 'echarts'
import 'echarts-gl';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import scroll from 'vue-seamless-scroll'
import pluginaxios from '@/config/axiosConfig.js'
import * as utils from './utils/index'
Vue.config.productionTip = false
Vue.use(pluginaxios)
Vue.prototype.$utils = utils
Vue.use(scroll)
//import 'lib-flexible/flexible'

Vue.use(ElementUI)
Vue.prototype.$echarts = echarts



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
