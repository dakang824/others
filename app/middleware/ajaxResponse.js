
/**
 * 获取请求参数中间件
 * 可以使用ctx.params获取get或post请求参数
 */

module.exports = option => {
    return async function ajaxResponse(ctx, next) {
        await next();
        if(ctx.status === 200){

        } else {
            if (ctx.status === 404 && !ctx.body) {
                if (ctx.acceptJSON) {
                    ctx.body = { error: 'Not Found' };
                } else {
                    ctx.body = '<h1>Page Not Found</h1>';
                }
            } else {
                
            }
        }
        

        // try {
           
        //     console.log("response", ctx.response.body)

        // } catch(e) {

        // } finally{

        // }
        // await next();
    };
}