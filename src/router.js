import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'

import  GlobalSettings  from './views/GlobalSettings.vue'
import  TableAdd  from './views/TableAdd.vue'
import  TableList  from './views/TableList.vue'
import  TableDelete  from './views/TableDelete.vue'
import  TableUpdata  from './views/TableUpdata.vue'
import  CategoryList  from './views/CategoryList.vue'
import  CategoryAdd  from './views/CategoryAdd.vue'
import  CategoryDelete  from './views/CategoryDelete.vue'
import  CategoryUpdata  from './views/CategoryUpdata.vue'
import  DishLish  from './views/DishLish.vue'
import  DishAdd  from './views/DishAdd.vue'
import  DishDelete  from './views/DishDelete.vue'
import  DishUpdata from './views/DishUpdata.vue'
import  OrderList  from './views/OrderList.vue'
import  Security  from './views/Security.vue'

Vue.use(Router)
//整个项目的路由词典：访问路径 <=> 视图组件
export default new Router({
  routes: [
   {path:'/',redirect:'/login'},
   {path:'/login',component:Login},
   {path:'/main',component:Main,children:
    [
     {path:'/setting',component:GlobalSettings},
     {path:'/table/add',component:TableAdd},
     {path:'/table/list',component:TableList},
     {path:'/table/delete',component:TableDelete},
     {path:'/table/updata',component:TableUpdata},
     {path:'/category/list',component:CategoryList},
     {path:'/category/add',component:CategoryAdd},
     {path:'/category/delete',component:CategoryDelete},
     {path:'/category/updata',component:CategoryUpdata},
     {path:'/dish/list',component:DishLish},
     {path:'/dish/add',component:DishAdd},
     {path:'/dish/delete',component:DishDelete},
     {path:'/dish/updata',component:DishUpdata},
     {path:'/order/list',component:OrderList},
     {path:'/security',component:Security}
    ]
  },
   {path:'*',component:NotFound},
  ]
})
