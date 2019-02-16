<!--<template>-->
  <!--<div class="dash">-->
    <!--<div class="page-layout">-->
    <!--<side-bar></side-bar>-->
    <!--<header-bar></header-bar>-->
    <!--<main>-->
     <!--<router-view/>-->

    <!--</main>-->
  <!--</div>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->

<!--import SideBar from '@/components/SideBar.vue'-->
<!--import Header from '@/components/Header.vue'-->
<!--export default {-->
  <!--name: 'dash',-->
  <!--components:{-->
      <!--'side-bar': SideBar,-->
      <!--'header-bar': Header,-->

  <!--},-->
  <!--mounted() {-->

    <!--},-->
  <!--data () {-->
    <!--return {-->
      <!--msg: 'Welcome to Your Vue.js App',-->
    <!--}-->
  <!--},-->
  <!--method:{-->

    <!--}-->
   <!---->

<!--}-->
<!--</script>-->


<style>

#app .page-layout main{
  z-index: 1;
    overflow-x: auto;
    padding-top: 80px;
    transform-style: preserve-3d;
    will-change: transform;
    transition-property: transform;
    transform: translateZ(0)!important;
}
@media only screen and (min-width: 1025px)
{
#app .page-layout main {
    width: calc(100% - 200px);
    transform: translate3d(200px,0,0)!important;
}
}
</style>
