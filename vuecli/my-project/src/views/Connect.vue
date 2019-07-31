<template>
    <div>
        <h1>3</h1>
        <h1>Call:13000000000</h1>
        <router-link :to="{name:'test1',params:{name:'xiaoa',age:'12'}}">Test1</router-link> |
        <router-link to="/connect/test2/bbb/12">Test2</router-link> |
        <router-link to="/connect/retest2/ccc/12">ReTest2</router-link>

        <router-view/>
    </div>
</template>