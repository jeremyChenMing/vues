import Vue from 'vue';
import Vuex from 'vuex';
import App from './src/App.vue';
import elementui from './src/elementui';
import router from './src/router.js';
import store from './src/store'
import {sync} from 'vuex-router-sync';


// 引入高德地图
import AMap from 'vue-amap';
Vue.use(AMap);
AMap.initAMapApiLoader({
  key: '0347fd71b38b04e6438e784b9b67f148',
  plugin: [
  	'AMap.Autocomplete', 
  	'AMap.PlaceSearch', 
  	'AMap.Scale', 
  	'AMap.OverView', 
  	'AMap.ToolBar', 
  	'AMap.MapType', 
  	'AMap.PolyEditor', 
  	'AMap.CircleEditor',
  	'AMap.Geolocation',
  ]
});



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI)
// 上面三行是全部引入ui的方式

// elementui() //部分引入样式




sync(store, router); // done.同步




export default new Vue({
  router,
	store,
	render : h => h(App)
}).$mount('#root');



