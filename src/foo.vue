<!-- @click="update"   -->
<template>
	<div class="box">
		123!!!!! {{target}}
		<p :title="target">第一行的文字</p>
		<p v-bind:title="target">第一行的文字</p>
		<p v-if="seen">是否可以看见我</p>
		<p class="color">
			{{target | capitalize}}
		</p>

		<p class="color">original text {{message}}</p>
		<p class="color">now text {{reMessage}}</p>

		<div class="test" :class="{'active': isActive, size: hasError}">
			v-bind class 尝试
		</div>

		<div :class="classObj" :style="styleObj">
			尝试
		</div>

		<h1 v-if="ok">Yes</h1>
		<h1 v-else>No</h1>
		<h1 v-show="seen">v-show</h1>
	

		<template v-if="loginType === 'username'">
		  <label>Username</label>
		  <input placeholder="Enter your username" key="username-input">
		</template>
		<template v-else>
		  <label>Email</label>
		  <input placeholder="Enter your email address" key="email-input">
		</template>
		<button @click="switches">切换</button>

		<div>
			<input v-model="newTodoText" type="text" 
			@keyup.enter="addNewTodo" 
			placeholder="add new todo">
			<ul>
				<li
				is="todo-item"
				:todo="todo"
				v-for="(todo,index) in todos"
				v-on:remove="todos.splice(index, 1)"
				
				></li>
			</ul>
		</div>


		<p v-for="(item,index) in items" v-if="item.is" :key="index">{{item.text}} {{index}}</p>

		<p v-for="n in evenNumbers">{{ n }}</p>
		<p @click.once.stop.prevent="doWhat">点击事件</p>
		<input type="text" @keyup.enter="callback">


		<input v-model="mes" placeholder="edit me">
		<p>Message is: {{ mes }}</p>
		<div>
			<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
			<label for="jack">Jack</label>
			<input type="checkbox" id="john" value="John" v-model="checkedNames">
			<label for="john">John</label>
			<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
			<label for="mike">Mike</label>
			<br>
			<span>Checked names: {{ checkedNames }}</span>
		</div>


		<div>
			<input v-model.number="age" placeholder="age" @change="change" type="number">
			<p>age is {{ age }}</p>
		</div>

		<div>
			<counter></counter>
			<counter></counter>
		</div>

	</div>
</template>
<style>
	p{
		margin: 0;
	}
	.box{
		font-size: 18px;
	}
	.color{
		color: red;
	}
	.test{
		color: blue;font-size: 20px;
	}
	.active{
		font-weight: bold;
	}
	.size{
		color: red;
	}
</style>
<script>
	import Vue from 'vue';
	Vue.component('counter',{
		template:`<button @click="count += 1">{{ count }}</button>`,
		data : function () {
			return {
				count:0
			}
		}
	})


	Vue.component('todo-item', {
		props:['todo'],
		template: '<li>{{todo}}<button @click="$emit(\'remove\')">X</button></li>'
	});//二者的写法是一样的，具体的可以看看印象笔记
	Vue.component('todo-items', {
	  template: '\
	    <li>\
	      {{ todo }}\
	      <button v-on:click="$emit(\'remove\')">X</button>\
	    </li>\
	  ',
	  props: ['todo']
	})
	export default {
		data : function () {
			return{
				target : 'hello world',
				ok:true,
				age:'',
				mes:'',
				checkedNames:[],
				seen:false,
				isActive:true,
				hasError:false,
				message : 'message!!!',
				todoes: ['ni','wo','ta','and'],
				items:[
					{text:'ABC',is:true},
					{text:'DEF',is:true},
					{text:'GHI',is:false},
					{text:'JKL',is:true},
				],
				todos:[
					'do you know',
					'i do not know'
				],
				gro:['蔬菜','肉类','水果'],
				styleObj:{
					color:'red',
					fontSize:'30px'
				},
				loginType: 'username',
				newTodoText:'',
				numbers:[1,2,3,4,5,6,7,8,9]

			}
		},
		computed: {
			reMessage: function () {
				return this.message.split('').reverse().join('')
			},
			classObj: function () {
				return{
					active: this.isActive,
					size: this.hasError	
				}
			},
			evenNumbers: function () {
				return this.numbers.filter(function (number) {
					return number % 2 === 0;
				})
			}
		},
		filters: {
			capitalize: function (value) {
				return value+'!!!!'
			}
		},
		created : function () { // 生命周期
			console.log('created')
		},
		mounted : function () {
			console.log('mounted')
		},
		updated : function () {
			// console.log('updated')
		},
		destroyed : function () {
			console.log('destroyed')
		},
		methods: {
			update: function (e) {
		        this.target = 'Weex',
		        this.seen = true
		    },
		    switches:function () {
		    	if (this.loginType == 'username') {
		    		this.loginType = 'mail'
		    	}else{
		    		this.loginType = 'username'
		    	}
		    	console.log(this.loginType)
		    },
		    addNewTodo: function () {
		      this.todos.push(this.newTodoText)
		      console.log('@@',this.todos)
		      this.newTodoText = ''
		    },
		    doWhat: function () {
		    	console.log('1')
		    },
		    callback: function () {
		    	console.log('监听键盘事件')
		    },
		    change: function (e) {
		    	console.log('change',e.target.value, typeof e.target.value)
		    	console.log(this.age)
		    }	
		}

		
	}
</script>