const pgOpt = require('pg');

/**
 * 用连接池
 * @param {*} config 
 * @param {*} app 
 * 连接池连接存在问题(PostgreSQL安全问题,no pg_hba.conf entry for host) ip未认证
 * 
 */
function connectPgWithPool(config, app){
    
    var pool = new pgOpt.Pool(config);
    // 查询
    pool.connect(function (isErr, client, done) {
        if (isErr) {
            console.log('pg-连接数据库失败:' + isErr.message);
            // return;
        } else{
                console.log('pg-连接数据库成功:');
        }
        client.query('select now();', [], function (isErr, rst) {
            done();
            if (isErr) {
                console.log('pg-查询失败:' + isErr.message);
            } else {
                console.log('pg-查询成功, data is: ' + rst.rows[0].now);
            }
        })
    });

    return pool
}



/**
 * 不使用连接池
 * @param {*} config 
 * @param {*} app 
 * 直接连接数据库客户端
 */
function connectPgWithoutPool(config, app) {
    // tcp://用户名：密码@localhost/数据库名
    var conStr = "tcp://postgres:123456@192.168.100.181:5432/postgres";
    var client = new pgOpt.Client(conStr);
    client.connect(function (isErr) {
        
        if (isErr) {
            console.log('连接数据库失败:' + isErr.message);
            client.end();
            // return;
        } else{
            console.log('连接数据库成功:');
        }
        const test = 'select now()'
        const querySQL = 'SELECT * from t_user'
        client.query(test, [], function (isErr, rst) {
            if (isErr) {
                console.log('查询失败:' + isErr.message);
            } else {
                console.log('查询成功, data is: ' + rst.rows[0].now);
            }

        })
    })
    //client.end();
    return client;
} 



module.exports = connectPgWithoutPool;