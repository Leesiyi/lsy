const Router = require('koa-router');
let router = new Router();
const cloud = require('tcb-admin-node');
const db = cloud.database();
const testuser = db.collection('test_user');

router.get("/list", async (ctx, next) => {
    console.log(ctx.query)
    let res = null;
    res = await testuser.get().then((res)=>{
        return res
    })
        ctx.body = {
            code: 20000,
            data: res
        }
    
})
router.get("/del", async (ctx, next) =>{
    try {
        await testuser.where({
          _id:ctx.query.id
        }).remove()
      } catch(e) {
        console.error(e)
      }
      ctx.body = {
          code:20000,
          data:"del"
      }
    
})
module.exports = router;
