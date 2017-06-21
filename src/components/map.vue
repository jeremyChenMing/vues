<template>
	<div>
		<h3 class="title">{{ msg }}</h3>
		<div class="toolbar">
        <span v-if="loaded">
          location: lng = {{ lng }} lat = {{ lat }}
        </span>
        <span v-else>正在定位</span>
      </div>
	    <div class="amap-wrapper">
	      	<el-amap 
	      		:vid="'amap-vue'" 
	      		:center="center" 
	      		:zoom="zoom"  
	      		:events="events" 
	      		:map-manager="amapManager"

	      	></el-amap>
	    </div>
	</div>
</template>
<script>
	import  VueAMap  from 'vue-amap';
	let amapManager = new VueAMap.AMapManager();
	export default {
	  data () {
	  	let self = this;
	    return {
	    	lng: 0,
          	lat: 0,
          	loaded: false,
	      	msg: 'vue-amap向你问好！',


	      	amapManager,
	      	zoom: 12,
	      	center: [121.59996, 31.197646],
          	
          	events: {
          		init(o) {
          			console.log(o)
          		}
          		
          	}
	    }
	  },
	  methods: {

	  }

	}
</script>
<style scoped>
	.amap-wrapper {
	  width: 800px;
	  height: 600px;
	  margin: 20px auto;
	  position: relative;
	}
</style>