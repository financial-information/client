import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import VueCookies from 'vue-cookies'

// 图表
import echarts from 'echarts'

// UI框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI)
// 使用cookie
Vue.use(VueCookies)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
