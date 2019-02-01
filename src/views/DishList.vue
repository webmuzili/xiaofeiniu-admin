<template>
  <div class="home">
    <h1>菜品列表</h1>
    <el-tabs type="border-card">
      <el-tab-pane v-for="(d,i) in dishLish" :key="i">
        <span slot="label">
          <el-badge :value="c.dishLish.length">{{c.cname}}</el-badge>
        </span>
     <!--<el-row >
        <img :src="require('../asset/img/dish'+d.imgUrl)"></img>
      </el-row>--> 
  
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>


export default {
  data() {
    return {
      dishLish:[]
    }
  },
  mounted() {
    //异步获取菜品列表
      var url=this.$store.state.globalSettings.apiUrl+'/admin/dish/';
      this.$axios.get(url).then(({data})=>{
              this.dishList=data
            }).catch((err)=>{
              console.log(err)
        })
  },
}
</script>
