<template>
	<div class="con">
		<el-row :gutter="10">
		  	<el-col :xs="6" :sm="5" :md="4" :lg="3">
		  		<div class="grid-content containImg">
		  			<img class="imgbox" src="http://oo0r740ex.bkt.clouddn.com/superCar.png" alt="logo">
		  		</div>
		  	</el-col>
		  	<el-col :xs="12" :sm="13" :md="15" :lg="17">
		  		<div class="grid-content bg-purple-light">
		  			<ul class="list clearfix">
						<li v-for="(item,index) in titles" :key="item" @click="changtitle(index)">
							 <span class="cell" :class="index == active ? 'border-color' : null">{{item}}</span>
						</li>
					</ul>
		  		</div>
		  	</el-col>
		  	<el-col :xs="6" :sm="6" :md="5" :lg="4">
		  		<div class="grid-content bg-purple-light">
		  			<el-input placeholder="请输入" icon="search" v-model="searchValue" :on-icon-click="handleIconClick" />
		  		</div>
		  	</el-col>
		</el-row>

		<el-dialog
		  title="搜索内容"
		  :visible.sync="dialogVisible"
		  size="small"
		  :close-on-click-modal="false"
		  :show-close="false"
		  >
		  <span >{{searchValue}}</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>
<script>
	export default {
		data: function () {
			return{
				titles:['标题','JEREMY','ENCOUTER','MAP'],
				active:'0',
				searchValue:'',
				dialogVisible:false,
			}
		},
		created: function () {
			console.log('有没有路有参数',)
			const path = this.$router.history.current.path;
			if (path.indexOf("jeremy") !== -1) {
				this.active = '1'
			}else if (path.indexOf("encounter") !== -1) {
				this.active = '2'
			}else if (path.indexOf("map") !== -1) {
				this.active = '3'
			}else{
				this.active = '0'
			}
		},
		methods:{
			changtitle: function (index) {
				this.active = index
				if (index==0) {
					this.$router.push('/')
				}else if (index==1) {
					this.$router.push('/jeremy')
				}else if (index==2) {
					this.$router.push('/encounter')
				}else if (index==3) {
					this.$router.push('/map')
				}
			},
			handleIconClick: function () {
				console.log('value',this.searchValue)
				if (this.searchValue) {
					this.dialogVisible = true	
				}
				
			},
		}
	}
</script>
<style scoped>
	.con {
		padding: 0 40px;
	}
	.containImg{
		text-align: center;
	}
	.imgbox{
		transform: rotate(90deg);
		width: 100%;
		width: 60px;
		height: 140px;
		margin-top: -20px;
	}
	.clearfix:after{
		content: '';display: block;clear: both;
	}
	.list{
		list-style: none;
	}
	li{
		float: left;width: 25%;text-align: center;font-size: 20px;cursor: pointer;
		line-height: 100px;
	}
	.cell{
		display: inline-block;height: 80px;border-bottom: 2px solid transparent;box-sizing: border-box;
	}

	.border-color{
		border-color: #000;
	}
	
	.bg-purple-light {
	    line-height: 100px;
	}
	.grid-content {
	    height: 100px;
	}
</style>