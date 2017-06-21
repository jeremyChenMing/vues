<template>
	<div class="box">
		<h1 class="big">学习篇</h1>
		<h3>vue介绍</h3>
		
		<div class="cell">
			<p class="title">1、初识：</p>
			<p v-if="item.seen" v-for="(item,key) in one" :data="item" :key="key"  is="p-one" @seen="callbackOne(key)"></p >
			<p>包涵：v-if v-for v-bind is Vue.component(props,template,$emit) 自定义事件@seen 及参数传递！</p>
		</div>

		<div class="cell">
			<p>2、生命周期</p>
			<ul>
				<li>created : 实例被创建后调用,已经完成了数据观测，属性，和方法的运算，但是挂载阶段还咩有开始，$el属性不可见</li>
				<li>mounted : 创建el并替换el，执行该方法</li>
				<li>updated : 由于数据更改导致的DOM重新渲染，执行该方法</li>
				<li>destroyed :  实例被销毁的时候调用</li>
			</ul>
		</div>

		<div class="cell">
			<p>3、模版语法</p>
			<el-button type="primary" v-bind:disabled="dis">默认按钮{{dis ? 'yes' : 'no'}}</el-button>
			<p>指令：v-on v-if v-for等等，要说的是指令修饰符：v-on:submit.prevent="onSubmit" 执行event.preventDefault(),其他的查看<a href="https://cn.vuejs.org/v2/api/#v-on">API</a></p>
			<p>自定义过滤器 ｛｛  message | cap ｝｝cap是处理数据的方法。<span>{{nameReverse | reverse}}</span></p>
		</div>

		<div class="cell">
			<p class="title">4、计算属性 computed</p>
			<p>原始数据：{{nameReverse}}</p>
			<p>计算数据（computed）：{{computedName}}</p>
		</div>

		<div class="cell">
			<p class="title">5、class和style, 一般用的是v-bind来绑定</p>
			<p class="red" :class="{need : size}">
				动态的切换class 
				<el-button @click="switchBtn(size)">行间切换</el-button>
				<span :class="classObj">obj来控制css</span>
				<span :class="computedClass" >计算属性computed来控制css</span>
				<span :class="['ac', true ? 'arr' : null]" >数组来控制css</span>
			</p> 
		</div>

		<div class="cell">
			<p class="title">6、条件渲染 v-if</p>
			<p>最主要的是用key管理可复用的元素，例如：</p>
			<p v-if="loginType === 'username' ">
				<label for="name">Username</label>
				<input type="text" id="name" key="name" />
			</p>
			<p v-else>
				<label for="email">email</label>
				<input type="text" id="email" key="email" />
			</p>
			<el-button @click="toggle">toggle</el-button>
			<p>默认key相同，所以输入值会被保留，而当加入不同的key了，输入值就不会被保留！</p>
		</div>


		<div class="cell">
			<p class="title">7、列表渲染，例子如下：</p>
			<div>
				<input v-model="todoText" @keyup.enter="addTodo" type="text" placeholder="请输入" />
				<ul>
					<li v-for="(todo,index) in todos" :key="index" :title="todo" @remove="todos.splice(index,1)" is="todoTemp"></li>
				</ul>
			</div>
			<p>(1)过滤的一个小例子</p>
			<div>
				<span style="padding:0 10px" v-for="num in ouNum" :key="num">{{num}}</span>
			</div>
		</div>

		<div class="cell">
			<p class="title">8、表单空间绑定</p>
			<div>
				<input type="text" v-model="text" /><span>input的值{{text}}</span>
			</div>
			<div>
				<input type="checkbox" v-model="checked" /><span>check的值{{checked}}</span>
			</div>
			<div>
				<input type="checkbox" id="jack" value="jack" v-model="checkedArr"><label for="jack">Jack</label>
				<input type="checkbox" id="join" value="join" v-model="checkedArr"><label for="join">join</label>
				<input type="checkbox" id="jeremy" value="jeremy" v-model="checkedArr"><label for="jeremy">jeremy</label>
				<span> 多选的数组值：{{checkedArr}}</span>
			</div>
			<div>
				<input type="radio" value="one" v-model="picked" id="one"><label for="one">one</label>
				<input type="radio" value="two" v-model="picked" id="two"><label for="two">two</label>
				<span> raido的单选值{{picked}}</span>
			</div>
			<div>
				<select v-model="selected">
				    <option value="a">A</option>
				    <option value="b">B</option>
				    <option value="c">C</option>
				</select>
				<span>Selected: {{ selected }}</span>
			</div>
			<div>
				1111{{count}}   ---- {{dones}} <el-button @click="callbacks">toggle</el-button>
			</div>
			<div>
				数字：{{numD}} <el-button @click="addnum">ADD</el-button>

				{{globalNum}}
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue';
	import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
	Vue.component('p-one',{
		props:['data'],
		template:`
			<a href="javascritp:;" @click="$emit('seen')" style="padding:0 10px">{{data.text}}</a>
		`
	})
	Vue.component('todoTemp',{
		props:['title'],
		template:`
			<li>
				{{title}}
				<button @click="$emit('remove')">X</button>
			</li>
		`
	})
	export default {
		data() {
			return{
				one:[
					{text:'版本1.0',seen:true},
					{text:'版本2.0',seen:false},
					{text:'版本3.0',seen:true},
				],
				dis:false,
				nameReverse:'jeremy',
				size: false,
				classObj: {
					'ac':true,
					'dises':true
				},
				loginType: 'username',
				todoText:'',
				todos:['你要那一个','第二条评论'],
				nums:[1,2,3,4,5,6,7,8,9],
				text:'',
				checked:false,
				checkedArr:[],
				picked:'',
				selected:'b'
			}
		},
		computed: {
			computedName :  function () {
				return this.nameReverse.split('').reverse().join('')
			},
			computedClass: function () {
				return{
					'ac':true
				}
			},
			ouNum: function () {
				return this.nums.filter( function (number) {
					return number % 2 === 0;
				})
			},
			...mapState('a',[   //在那个模块下
				'count','numD'
			]),
			...mapGetters('a',[
				'dones'
			]),
			...mapState([ //调用全局的
				'globalNum'
			]) 
		},
		filters: {
			reverse: function (value) {
				if (value) {
					console.log('1')
					return value.charAt(0).toUpperCase() + value.slice(1)+'---haha'
				}else{
					console.log('2')
					return value
				}
			}
		},
		methods: {
			callbackOne: function (key) {
				console.log('123',key)
				if (key==2) {
					this.one[1].seen = true;
				}else{
					this.one[1].seen = false
				}
			},
			switchBtn: function (bool) {
				console.log(bool)
				this.size = !bool
			},
			toggle: function () {
				this.loginType = 'email'
			},
			addTodo: function () {
				this.todos.push(this.todoText)
      			this.todoText = ''
			},
			...mapMutations('a',[
				'increment'
			]),
			...mapActions('a',[
				'inAdd'
			]),
			callbacks: function () {
				this.increment({name:'world'})  //两种方法都可以
				// this.$store.commit({
				// 	type:'increment',
				// 	name:'world'
				// })
			},
			addnum: function () {
				// this.$store.dispatch({  //两种方法都可以
				// 	type:'inAdd',
				// 	amount:10
				// })
				this.inAdd()
			}
		}
	}
</script>
<style scoped>
	.box{
		padding: 10px 20px;
	}
	ol,ul{
		list-style: none;
	}
	.big{
		text-align: center;
	}
	.cell{
		margin: 10px 0 20px;
	}
	a{
		color: #20A0FF;padding: 0 8px;
	}
	p{
		line-height: 32px;
	}
	.title{
		font-size: 16px;
		font-weight: bolder;
	}
	.red{
		color: red;
	}
	.need{
		font-size: 20px;
	}
	.ac{
		color: blue;
	}
	.dises{
		display: inline-block;width: 200px;background-color: #fcc;	
	}
	.arr{
		display: inline-block;border: 1px solid #ccc;line-height: 32px;padding: 0 10px;
	}
</style>