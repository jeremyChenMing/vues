


import Vue from 'vue';
import Vuex from 'vuex';

import moduleA from './module/moduleA';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      globalNum: '100px'
    },
    modules: {
      a:moduleA
    }
})


