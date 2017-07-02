
import Vue from 'vue';
import VueRouter from 'vue-router';
import Foo from './foo.vue';
import Home from './components/home.vue';
import Maps from './components/map.vue';
import Learn from './components/learn.vue';

// 定义一个异步加载的组件

const SyncMaps = resolve => {
	
	require.ensure(['./components/map.vue'], () => {
		resolve(require('./components/map.vue'))
	})
}


Vue.use(VueRouter);

var router = new VueRouter({

	routes : [
		{path:'/',component: Home},
		{path:'/ex',component: Foo},
		{path:'/jeremy',component: Home},
		{path:'/encounter',component: Learn},
		{path:'/map',component: SyncMaps},
	]
})

export default router