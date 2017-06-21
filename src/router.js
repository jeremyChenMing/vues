
import Vue from 'vue';
import VueRouter from 'vue-router';
import Foo from './foo.vue';
import Home from './components/home.vue';
import Maps from './components/map.vue';
import Learn from './components/learn.vue';

// 写一个组件


Vue.use(VueRouter);

var router = new VueRouter({

	routes : [
		{path:'/',component: Home},
		{path:'/ex',component: Foo},
		{path:'/jeremy',component: Home},
		{path:'/encounter',component: Learn},
		{path:'/map',component: Maps},
	]
})

export default router