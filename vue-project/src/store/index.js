import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import store_01 from './modules/store_01.js';//引入某个store对象

export default new vuex.Store({
    modules: {
        store_01: store_01
    }
})