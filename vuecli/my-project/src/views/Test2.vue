<template>
    <div>
        <h1>{{$route.params.username}}{{$route.params.userage}}</h1>
        <div>
            <button @click="isshow=!isshow">click</button>
        </div>
        <transition name="fadee">
        <div v-show="isshow">hello world</div>
        </transition>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isshow:true,
        }
    }
}
</script>
<style scoped>
    .fadee-enter{
        opacity: 0;
    }
    .fadee-enter-active{
        transition: all 1s ease;
    }
    .fadee-enter-to{
        opacity:1
    }
    .fadee-leave{
        opacity: 1;
    }
    .fadee-leave-active{
        transition: all 1s ease;
    }
    .fadee-leave-to{
        opacity: 0;
    }
</style>