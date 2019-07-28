new Vue({
    el:"#gen",
    data:{
        name:"mrwu",
        job:"kaifa",
        age:22,
        website:"http:",
        webtag:"<p>hhh</p>",
        isshow:false,
        num:1

    },
    methods:{
        greet:function(time){
            return 'good'+time+this.name;
        },
        add:function(inc){
            this.age+=inc
        }
    }
})
//el element 需要获取的元素，一定是html中的根容器元素
//data 用于数据存储
//放入虚拟dom
//methods 用于存储方法
//data-binding 给属性绑定对应的值