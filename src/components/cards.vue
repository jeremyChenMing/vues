<template>
	<div class="card">
		<el-card v-for="(item,index) in message" :key="index" class="box" >
			<div class="title">
				<i class="icon " :class="item.icon"></i>
				<h4 class="h4">{{item.title}}</h4>
				<p class="content">{{item.content}}</p>
			</div>
			<div class="bottom" @click="link(index)">
				<span class="line"></span>
				<p class="btn">查看详情</p>
			</div>
		</el-card>
	</div>
</template>
<script>
export default {
	data : function () {
		return{
			message:[
				{title:'指南',content:'原意指向南方，引申为指导等含义；也比喻辨别正确发展方向的依据',icon:'el-icon-message'},
				{title:'指南',content:'原意指向南方，引申为指导等含义；也比喻辨别正确发展方向的依据',icon:'el-icon-star-on'},
				{title:'指南',content:'原意指向南方，引申为指导等含义；也比喻辨别正确发展方向的依据',icon:'el-icon-menu'},
			]
		}
	},
	methods: { //方法
		link: function (index) {
			console.log(index)
			console.log(this.$router)
			// this.$router.push('/ex')
		}
	}
}
</script>
<style scoped>
	.el-card__body{
		/* padding: 0; */
	}
	.card{
		padding: 20px;display: flex;justify-content: center;
	}
	.box{
		width: 300px;margin: 0 20px;transition: box-shadow ease-in .2s,margin-top ease-in .2s;
	}
	.box:hover {
		box-shadow: 0px 0px 10px #9b9b9b;
		margin-top: -8px;
	}
	.title{
		height: 260px;text-align: center;
	}
	.line{
		height: 2px;width: 10%;background-color: #000;display: inline-block;
		transition: width ease-in .2s;
	}
	.btn{
		line-height: 40px;font-size: 13px;color: #9b9b9b;
	}
	.bottom{
		text-align: center;font-size: 20px;cursor: pointer;
		
	}
	.bottom:hover .line{
		width: 100%
	}
	.h4{
		text-align: center;margin: 40px 0;font-size: 20px;
	}
	.content{
		font-size: 13px;color: #9b9b9b;
	}
	.icon{
		font-size: 40px;padding: 20px 0;
	}
</style>