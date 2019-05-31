
// const pgOpt = require('pg');

const connectPgWithoutPool = require('./app/db/postgres')

const connectMySql = require('./app/db/mysql')

module.exports = app => {

    // 自定义内容
    // app.projectName = 'eggManual'
    
// 生命周期
    app.beforeStart(async () => {
        // 应用会等待这个函数执行完成才启动
        
        console.log("==app beforeStart==");
    });

    app.ready(async () => {
        console.log("==app ready==");
        console.log(app);
        // app.loggers.debug('app init');
    })

    app.beforeClose(async () => {
        // 断开数据库连接
        connectMySql.destroy();
        console.log("==app beforeClose==");
    })

// 事件监听
    app.once('server', server => {
    // websocket
    });
    app.on('error', (err, ctx) => {
    // report error
    });
    app.on('request', ctx => {
    // log receive request
    });
    app.on('response', ctx => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    // log total cost
    });

    // 插件挂载
    // 第一个参数 mysql 指定了挂载到 app 上的字段，我们可以通过 `app.mysql` 访问到 MySQL singleton 实例
    // 第二个参数 createPostgreSQL 接受两个参数(config, app)，并返回一个 MySQL 的实例
    
    app.logger.info('mysql参数:' + app.config.mysql);
    app.addSingleton('mysql', connectMySql);
    
    // app.logger.info('pg参数:' + app.config.pg);
    // app.addSingleton('pg', connectPgWithoutPool);

    //createPostgreSQL(app.config.pg, app)
};