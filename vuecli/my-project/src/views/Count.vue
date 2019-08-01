<template>
    <div>
        <button @click="add">+</button>
        <button @click="reduce(2)">-</button>
        <button @click="$store.dispatch('actionadd')">action+</button>
        <h1>{{count}}</h1>
        <h1>{{$store.getters.count2}}</h1>
    </div>
</template>
<script>
import{mapState,mapMutations}from 'vuex'
export default {
    methods:{
        ...mapMutations(['add','reduce'])
    },
    computed:{
        ...mapState(['count'])
    }
}
</script>