[   
    {name:'分享',key:'link',
        children:[
            {name:'新建链接',key:'commonLink'},
            {name:'新建安全链接',key:'secureLink'},
            {name:'新建Smart Share',key:'smartShare'},
            {name:'查看历史链接',key:'mgdelivery'},
        ]
    },
    {name:'编辑',key:'edit',
        children:[
            {name:'Docs编辑',key:'editOL'},
            {name:'本地编辑',key:'editNative'},
            {name:'本地编辑',key:'localEdit'},
        ]
    },
    {name:'下载',key:'download'},
    {name:'更多操作',key:'more',
        children:[
            {name:'预览',key:'preview'},
            {name:'本地编辑',key:'editNative'},
            {name:'本地编辑',key:'localEdit'},
            {name:'Docs编辑',key:'editOL'},
            {name:'共享管理',key:'auth'},
            //旧版逻辑
            // get name() {
            //     let vm = this.vm,
            //         cur = currentData;
            //     if (cur === null) return false;
            //     let { is_shared } = cur;
            //     return is_shared ? '共享管理' : cur.isDir ? '共享文件夹' : '共享文件';
            // },
            {name:'收藏',key:'favorite'},
            {name:'取消收藏',key:'rmfavorite'},
            {name:'添加/编辑标签',key:'edittag'},
            {name:'历史版本',key:'history'},
            {name:'重命名',key:'rename'},
            {name:'移动/复制',key:'copymove'},
            {name:'锁定',key:'lock'},
            {name:'解锁',key:'unlock'},
            {name:'请求解锁',key:'reqUnlock'},
            {name:'删除',key:'delete'},
            
        ]
    }
]