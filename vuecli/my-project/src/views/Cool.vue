<template>
    <div>
        <h1>4</h1>
        <HelloWorld :msg="str"></HelloWorld>
    </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
    name:'Cool',
    data(){
        return{
            str:"Beautiful World"
        }
    },
    components:{
        HelloWorld
    }
}
</script>