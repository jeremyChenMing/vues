<template>
	<div>
		<div class="carousel">
			<el-carousel trigger="click" height="450px" type="card" :autoplay="false">
		      <el-carousel-item v-for="item in 5" :key="item" >
		      </el-carousel-item>
		    </el-carousel>
		</div>
		<card></card>
		<colla></colla>
	</div>
</template>
<script>
	import card from './cards.vue';
	import colla from './collapse.vue';
	export default {
		components: {card,colla},
		data : function () {
			return{
				items : [ "1", "1", "1", "1", "1"]
			}
		}
	}
</script>
<style scoped>
	.carousel{
		width: 100%;
	}
	h3{
		text-align: center;font-size: 70px;line-height: 450px;
	}
	img{
		width: 100%;height: 100%;
	}
	.el-carousel__item{
		/* width: 1000px; */
	}
	.el-carousel__item:nth-child(3){
		background: url('../assets/images/chedui.jpg') no-repeat center center;
		background-size: cover;
	}
	.el-carousel__item:nth-child(4){
		background: url('../assets/images/da.jpg') no-repeat center center;
		background-size: cover;
	}
	.el-carousel__item:nth-child(5){
		background: url('../assets/images/jiti.jpg') no-repeat center center;
		background-size: cover;
	}
	.el-carousel__item:nth-child(6){
		background: url('../assets/images/night.jpg') no-repeat center center;
		background-size: cover;
	}
	.el-carousel__item:nth-child(7){
		background: url('../assets/images/gouhuo.jpg') no-repeat center center;
		background-size: cover;
	}
</style>
