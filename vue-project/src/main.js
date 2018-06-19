// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//vuex
import store from './store'

// 第一个插件 vue-toast
import vueToast from './plugins/vue-toast'

// 第一个全局组件
import GlobalComponent from '@/components/common/global_component'

// 第一个全局指令
import vImg from '@/directives/v-img'

Vue.use(vueToast);

Vue.config.productionTip = false

Vue.component('global-component',GlobalComponent);

Vue.directive('img', vImg);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
