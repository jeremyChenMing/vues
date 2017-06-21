<template>
	<div id='#root'>
		<layoutTop></layoutTop>
		<router-view></router-view>
	</div>
</template>

<script>
	import layoutTop from './components/layoutTop.vue';
	import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
	export default {
		components:{layoutTop},
	}

</script>
<style>
	
</style>