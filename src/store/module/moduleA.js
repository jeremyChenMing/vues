/**  by jeremy 2017/06/20
* 	也可以定义constant.js 文件，在多人开发中使用
*
*/


const moduleA = {
    namespaced:true,
    state: {
      count:'jeremuy',
      numD:0
    },
    getters: { //类似state， 是计算过的state，跟随state变动而变动
       dones: (state, getters, rootState) => {
        // console.log(state) //局部state
        // console.log(getters) //getters下的state(new)
        // console.log(rootState)//最外层也就是根下的节点state，包涵所有的state
          return state.count+'hello'
       }
    },
    mutations: { // 类似于action 但只能是同步的  使用时是提交状态(state)
      increment(state,payload) {
          state.count+=payload.name
      },
      add(state,payload) {
        // console.log(payload)
        state.numD++
      }
    },
    actions: {
      inAdd(context,b) { //第一个类似store的实例，第二个参数就是载荷payload
        // console.log('--',context,b)
        context.commit('add',b)
      }
    }
}

export default moduleA;