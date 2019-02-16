<template>
    <div id="app">
        <div class="loader" v-if="loadSpinner">
            <div class="loader-outer">
        <flower-spinner
        :animation-duration="2500"
        :size="70"
        color="#52a4fa"
        />
            </div>
        </div>l
        <div class="dash">
            <div class="page-layout">
                <side-bar></side-bar>
                <header-bar></header-bar>

                <main v-bind:class="{active : isActive}">
                    <router-view/>

                </main>
            </div>
        </div>
    </div>
</template>

<script>
    import SideBar from '@/components/SideBar.vue'
    import Header from '@/components/Header.vue'
    import { FlowerSpinner } from 'epic-spinners'

    export default {
        name: 'App',
        data() {
            return {
                isActive: false,
                loadSpinner:false
            }
        },
        components: {
            'side-bar': SideBar,
            'header-bar': Header,
            'flower-spinner': FlowerSpinner,

        },
        methods: {
            bodyexpand: function () {
                this.isActive = !this.isActive;
            },
            activeSpinner(){
                this.loadSpinner = true;
            },
            deactiveSpinner(){
                this.loadSpinner = false;
            }
        },
        created() {
            Event.listen('bodyexpand', this.bodyexpand);
            Event.listen('showLoader', this.activeSpinner);
            Event.listen('hideLoader', this.deactiveSpinner);
        },
    }
</script>

<style>
    body {
        margin: 0px;
        overflow-x: hidden;
        background: #eef5fa;
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
    }

    .white-bg {
        background: #ffffff;
    }
    .white-bg.active{
        background-color: #FFF9C4;
    }
    .padd-10 {
        padding: 10px;
    }

    .dash {
        display: block;
        width: 100%;
        overflow: hidden;
    }

    .page-layout {

    }

    #app .page-layout main {
        padding-top: 75px;
        margin-left: 250px;
        background: #eef5f9;
        position: relative;
        transition: 0.2s ease-in;
        padding-left: 15px;
        padding-right: 15px;
    }

    #app .page-layout main.active {
        margin-left: 64px;
    }

    @media only screen and (min-width: 1025px) {
        /* #app .page-layout main {
            width: calc(100% - 200px);
            transform: translate3d(200px,0,0)!important;
        } */
    }

    .loader{
        position: fixed;
        width:100%;
        height:100vh;
        z-index:9999;
        /*background-color: #51a6ffd6;*/
    }
    .loader-outer{
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        background-color: #212121d4;
    }
</style>
