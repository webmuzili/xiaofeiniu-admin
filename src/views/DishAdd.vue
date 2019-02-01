<template>
  <div class="home">
    <h1>添加菜品</h1>

    <el-form label-width="100px">
        <el-form-item lable="菜品图片:">
          <el-upload class="xfn-upload" :action="uploadAction" :on-success="doUploadSucc" name="dishImg" >
            <img v-if="imgUrl" :src="imgUrl">
          </el-upload>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      uploadAction:this.$store.state.globalSettings.apiUrl+'/admin/dish/image',//可处理文件的api
      imgUrl:'',//要显示的预览图片地址
      formData:{
        title:'',
        imgUrl:'',
        price:'',
        detail:'',
        category:''
      }
    }
  },
  methods: {
    doUploadSucc(){
      //文件上传成功后，客户端得到响应消息之后的处理函数
      //res:服务器端返回的响应消息
      //file:从INPUT[TYPE=file] 中读取的第一个上传的文件独享
      console.log(res);
      this.formData.imgUrl=res.fileName;
      this.imgUrl=URL.createObjectURL(file,raw);
      //把上传的文件编码为DataURL字符串
  
    }
  },
}
</script>
<style lang="scss">
    .xfn-upload{
      .el-upload{
        border:1px dotted #aaa;
        border-radius:3px;
        cursor:pointer;
        width:250px;
        height:177px;
        overflow:hidden;
        &:hover{
          border-color:#409eff;
        }
      }
      img{
        max-width:100%;
      }
    }
</style>
