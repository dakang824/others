const mysql = require('mysql');


function connectMySql (config, app){

    // var conStr = "tcp://root:123456@127.0.0.1:3306/test";
    var connection = mysql.createConnection(config);

    connection.connect(function(isErr, arr){
        if(isErr){
            console.log('mysql-连接数据库失败:' + isErr);
        } else {
            console.log('mysql-连接数据库成功:');
        }
    });
    
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
        console.log('mysql-The solution is: ', results[0].solution);
    });

    return connection
}   

module.exports = connectMySql;



