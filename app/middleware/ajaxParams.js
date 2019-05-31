/**
 * 获取请求参数中间件
 * 可以使用ctx.params获取get或post请求参数
 */

module.exports = option => {
    return async function ajaxParams(ctx, next) {
        ctx.ajaxParams = {
          ...ctx.request.query,
          ...ctx.request.body
        }
        await next();
    };
}