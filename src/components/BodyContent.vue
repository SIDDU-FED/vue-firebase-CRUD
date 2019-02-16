<template>
    <div>
        <!-- <router-link to="/addclient" tag="button">nextrouterlink</router-link> -->
        <el-row type="flex" class="row-bg" justify ="end">
              <!-- <p class="text-right forgot" justify="end" >Forgot Password?</p> -->
            <!-- <el-button type="primary" > -->
                
            <!-- </el-button> -->

            <el-button>
                <router-link to="/addclient" tag="strong">Add Client</router-link>
            </el-button>
             </el-row>
             <el-row>
                 <el-col :span="12">
                     <result></result>
                     <comp1></comp1>
                 </el-col>
                 <el-button>
                Add Client
            </el-button>
                 <el-col :span="12" >s </el-col>
             </el-row>
    </div>
</template>
<script>
import CompResult from '../components/CompResult'
import Comp1 from '../components/Comp1'
    export default{
        name:'dashboard',
        components:{
            result: CompResult,
            comp1: Comp1,
        },
        data(){
            return{
//                token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcHBuaW5ncy1sYXJhdmVsLnRlc3RcL2FwaVwvbG9naW4iLCJpYXQiOjE1NTAyMTg5MTgsImV4cCI6MTU1MDgyMzcxOCwibmJmIjoxNTUwMjE4OTE4LCJqdGkiOiJhczhxdUJ2NmVYcEhpVVYxIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIiwidXNlcl9yb2xlIjpudWxsLCJyb2xlcyI6WyJzdXBlcmFkbWluIl19.duIYtxqSWgm7V8tIGLwdVAiBD99_jpHOBtL8XPXsNms'
            }
        },
        methods:{
        // test1(){
        //     axios.get('http://appnings-laravel.test/api/clients/list').then(res=>{
        //         console.log(res);
        //     })
        // },

        }
        

    }
</script>
<style>

</style>