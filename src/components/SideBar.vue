<template>
    <div class="left-menu">
<el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <div class="logo">
    <img src="../assets/app-logo.png" alt="" style="width: 100%;">
  </div>
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">Clients</span>
    </template>
    <router-link to="/clientlist">
      <el-menu-item index="1-1" >Clients List</el-menu-item>
    </router-link>
      <!-- <el-menu-item index="1-2">item two</el-menu-item> -->
  </el-submenu>

  <el-menu-item index="2">
    <i class="el-icon-setting"></i>
    <span slot="title">Navigator Four</span>
  </el-menu-item>
</el-menu>   

</div>
</template>

<script>
export default {
    name:'sidebar',
    data(){
        return{
            isCollapse: false,
    
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    tglMenu:function(){
      this.isCollapse = !this.isCollapse;
    }
      
    },
    
 created(){
           Event.listen('menushrink',this.tglMenu) 
        }

}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 250px;
    /* min-height: 400px; */
    border-right: 0px
  }
  .left-menu{
    position: fixed;
    /* width: 250px; */
    height: 100%;
    top: 0px;
    z-index: 2;
  }
  .left-menu{
    
    /* padding-top: 64px; */
    background: #fff;
    box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.08);
    transition: 0.2s ease-in;
  }
  .el-menu a{
    text-decoration: none;

  }
</style>

