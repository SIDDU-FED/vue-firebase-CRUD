<template>
  <div>

     <el-row type="flex" class="row-bg" justify ="center">
       <el-col :span="8" class="bg">
         <div class="grid-content bg-purple">
            <el-input placeholder="email" v-model="logindata.email" type=email class="cmn-cls"></el-input>
             <el-input placeholder="password" v-model="logindata.password" type=password></el-input>
             <el-row type="flex" class="row-bg" justify ="center">
                 <el-button round @click="onSubmit">Login</el-button>
                
             </el-row>
             <el-row type="flex" class="row-bg" justify ="end">
              <p class="text-right forgot" justify="end" >Forgot Password?</p>
            <!--<el-button type="primary" @click="heading">Primary</el-button>-->
             </el-row>
           </div>
           </el-col>
      </el-row>

      <!-- <el-button type="primary" @click="heading">Primary</el-button>
      <div v-if="isvisible">
hai
      </div> -->
  </div>
</template>

<script>
    import axios from '../axios.auth'
export default {
  name: 'login',
  data () {
    return {
      logindata:{
        email:'',
        password:''
      }
    }
  },
  methods:{
    onSubmit(){

    this.$store.dispatch('login',{
        email:this.logindata.email,
        password:this.logindata.password,
    })
    }
},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.el-row {
    margin-bottom: 20px;
    
  }
  .el-col {
    border-radius: 4px;
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    
  }
  .el-input__inner{
    margin: 10px 0px;
    width: 100%
  }
  .bg{
    background-color: rgb(64, 158, 255);
    padding-top: 20px;
    padding: 20px
  }
  .el-row{
    margin-bottom: 0px;
  }
  .forgot{
    color: aliceblue;
  }
</style>
