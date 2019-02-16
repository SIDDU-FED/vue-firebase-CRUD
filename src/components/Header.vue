<template>
    <div class="header-bar">
        <header v-bind:class="{active : isActive}">
        <div class="box-hamburger" @click="toggleMenu">
            <i class="material-icons" >view_list</i>
            </div>    
        </header>
            
    </div>
</template>

<script>
export default {
    name: 'headerbar',
    data(){
        return{
           isActive: false
        }
    },
     methods:{
          toggleMenu:function(){
              this.isActive = !this.isActive
              Event.fire('menushrink')
              Event.fire('bodyexpand')
          }
        },
       
}
</script>
<style>
header{
     z-index: 6;
    background: #fff;
    border-bottom: 1px solid #dbe2e8;
    box-shadow: inset 0 0 0 0 #dbe2e8, 0 2px 1px 0 rgba(47,61,73,.05);
    color: #2e3d49;
    position: fixed;
    transform-style: preserve-3d;
    will-change: transform;
    transition-duration: .2s;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-property: transform;
    width: 100%;
    height: 60px;
    background-color:#479bff;
    color: white;
    margin-left: 250px;
}
.box-hamburger{
    width: 50px;
    height: 50px;
    cursor: pointer;
}
.box-hamburger i{
    position: relative;
    top: 15px;
    left: 15px;
}

@media only screen and (min-width: 1025px){
   
.header-bar header.active {
   margin-left: 64px;
  
} 
   
}



</style>

