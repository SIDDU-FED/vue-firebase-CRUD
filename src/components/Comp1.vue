<template>
    <div>
        
    </div>
    
</template>
<script>


export default {
    name: 'comp1',
    methods:{
        test1(){
            axios.get('http://appnings-laravel.test/api/container1/list').then(res=>{
                console.log('res');
            })
        }
    }
}
</script>

<style>

</style>

