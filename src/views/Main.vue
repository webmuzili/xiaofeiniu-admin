<template>
  <div class="main">
  <el-container>
      <el-aside width='200px'>左侧边栏</el-aside>
      <el-container>
          <el-header height="60px">顶部</el-header>
          <el-main>
             <router-view></router-view>
          </el-main>
      </el-container>
  </el-container>
  </div>
</template>
<script>
export default {
  beforeCreate() {
    //组件创建之前先要检查是否登录为管理员
    if(!this.$store.state.adminName){
      this.$router.push('/login');//未登录跳转
    }
  },
}
</script>
