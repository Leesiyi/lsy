<template>
    <div>
        <div class="header" v-bind:style="{background:str}">{{msg}}</div>
        <div class="footer" v-bind:style="{background:str}"></div>
    </div>
</template>
<script>
export default {
    props:["str","msg"]
}
</script>
<style>
    *{
        margin: 0;
    }
    .header{
        width: 100%;
        height:1rem;
        
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
        
        position: fixed;
        bottom: 0;
    }
</style>