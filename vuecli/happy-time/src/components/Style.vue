<template>
    <div>
        <div class="header" v-bind:style="{background:str}"><p @click="goback" id="back">返回</p>{{msg}}</div>
        <div class="footer" v-bind:style="{background:str}"></div>
    </div>
</template>
<script>
export default {
    props:["str","msg"],
    methods: {
        goback(){
            this.$emit("backup")
        }
    },
}
</script>
<style>
    *{
        margin: 0;
        
    }
    .header{
        width: 100%;
        height:1rem;
        z-index: 10;
        position: fixed;
        top:0;
        font-size: 0.5rem;
        text-align: center;
        line-height: 1rem;
        color:white
    }
    .footer{
        width: 100%;
        height: 1rem;
        z-index: 10;
        position: fixed;
        bottom: 0;
    }
    #back{
        position: fixed;
        right: 0;
        font-size: 0.35rem;
        margin-right: 4%;
    }
</style>