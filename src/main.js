import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

/*
*插件和过滤器
*/

Vue.use(ElementUI)         //注册ElementUI插件
Vue.prototype.$axios=axios //把axios设置为所有的成员属性，以后可以使用this.$axios使用异步请求功能
Vue.config.productionTip = false

/*创建全集过滤器*/
Vue.filter('data',(val)=>{
  //把bigint转为yyyy--mm--dd hh:mm:ss
  var data=new Date(val);
  var yy=data.getFullYear();
  var mm=data.getMonth()+1;
  mm=mm>9?mm:'0'+mm
  var dd=data.getDate();
  dd=dd>9?dd:'0'+dd

  var hh=data.getHours();
  hh=hh>9?hh:'0'+hh
  var mi=data.getMinutes();
  mi=mi>9?mi:'0'+mi
  var ss=data.getSeconds();
  ss=ss>9?ss:'0'+ss


  return yy+'-'+mm+'-'+dd+' '+hh+':'+mi+':'+ss
})
Vue.filter('curryency',(val)=>{
  //把int转换为￥xx.yy
  return '￥'+val.toFixed(2)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
