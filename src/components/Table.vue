<template>
  <div class="xfn-table-info">
    <el-card shadow="hover">
      <div class="xfn-table" :style="{background:getTableColor(data.status)}">{{data.tid}}号桌:{{data.status | tableStatus}}</div>
      <el-button type="success" plain size="mini" @click="showTableDetail">详情</el-button>
      <el-button type="danger" plain size="mini">修改</el-button>
    </el-card>

    <!--桌台详情对话框-->
    <el-dialog :title="data.tid+'号桌台详情'" :visible="dialogTableDetailVisible" :before-close="closeDialogTableDetail" >
    <el-tabs type="border-card" @tab-click="makeQRcode">
      <el-tab-pane label="桌台状态">桌台状态</el-tab-pane>
      <el-tab-pane label="桌台二维码">
        <img :src="qrcodeData"></img>
      </el-tab-pane>
    </el-tabs>
    <div slot="footer">
      <el-button type="primary" @click="dialogTableDetailVisible = false">确 定</el-button>
    </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return {
      dialogTableDetailVisible:false,
      qrcodeData:''
    }
  },
  props:['data'],
  methods: {
    makeQRcode(){
      //创建二维码--此方法不能在当前组件的mounted中调用，因为绘图所需的canvas在el-dialog中  对话框在组件加载时并不在dom树上
      var qrcode=require("qrcode");
      // var canvas=document.getElementById('qrcanvas');
     //http://127.0.01:8092/#/3
     var tableUrl=this.$store.state.globalSettings.apiUrl+'/#/'+this.data.tid;
     //把绘制的图片二进制数据转换为base64的编码字符串
     qrcode.toDataURL(tableUrl,{width:300,errorCorrectionLevel:'H'},(err,url)=>{
       console.log('二维码图片绘制完成,数据如下')
       this.qrcodeData=url;

     })
      // qrcode.toCanvas(canvas,tableUrl,{errorCorrectionLevel:'L',width:300},(err,canvas)=>{
      //   console.log(err)
      //   console.log(canvas)
      // })
    },
    getTableColor(status){
        if(status==1) return '#67C23A';
        else if(status==2) return '#E6A23C';
        else if(status==3) return '#F56C6C';
        else  return '#909399';

    },
    showTableDetail(){
      // console.log(this.data)当前桌子的数据
      this.dialogTableDetailVisible=true;
    },
    closeDialogTableDetail(){
      this.dialogTableDetailVisible=false;
    }
  },  
}
</script>

<style lang="scss">
  .xfn-table-info{
    padding:3px;
    text-align:center;
    .xfn-table{
        width:90%;
        height:120px;
        line-height:120px;
        border:1px solid #aaa;
        box-shadow:3px -4px 5px #666;
        margin:5px auto;
        border-radius:50%;
    }
  }
</style>