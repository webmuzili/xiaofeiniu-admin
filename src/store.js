import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//多组件所公用的储存仓库
export default new Vuex.Store({
  //公共数据的读取方法:this.$store.adminName
  //公共数据的读取方法:this.$store.globalSettings
  state: {//当前数据的状态，类似于组件对象的data属性
    adminName:'', //当前登录的管理员名
    globalSettings:{//项目的全局设置信息
      apiUrl:'http://127.0.0.1:8090' //初始的默认值
    },
  },
  mutations: {//控制数据的进化（修改数据state）,类似组件对象中的methods 
      //用mutations修改数据可以保证数据的“响应式”
      setAdmin(state,value){
        state.adminName=value
      },
      setglobalSettings(state,value){
        state.globalSettings=value
      }
  },
  //公共数据的修改方法:this.$store.commit('setAdmin','boss')
  //公共数据的修改方法:this.$store.commit('setglobalSettings','...')
  actions: {

  }
})
