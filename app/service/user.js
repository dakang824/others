'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    /**
     * 登录
     * @param {*} option 
     */
    login(option) {
        const pool = this.app.mysql;
        const querySQL = `select * from user where username = '${option.username}'`
        return new Promise((resolve, reject) => {
            pool.query(querySQL, function(err, row){
                if(err){
                    reject(err);
                } else {
                    if(row && row.length > 0){
                        // 成功
                        if(row[0].password === option.password){
                            resolve(row);
                        } else {
                        // 密码不对    
                            reject("密码输入有误");
                        }
                    } else {
                    // 未查询到用户    
                        reject("用户名输入有误");
                    }
                    
                }
            })
        })
    }

    /**
     * 查询所有用户
     */
    queryAllUser() {
        let querySQL = 'SELECT * FROM USER'
        return this.commonSql(querySQL);
    }

    /**
     * 新增用户
     * @param {*} option 
     */
    addUser(option){
        let { name,username,password,phone,city } = option;
        let addsql = 'INSERT INTO user(name,username,password,phone,city) VALUES(?,?,?,?,?)';
        let addsqlparams = [name,username,password,phone,city];
        return this.commonSql(addsql, addsqlparams, "新增成功");
    }

    /**
     * 编辑用户
     * @param {*} option 
     */
    updateUser(option){
        let { name,username,password,phone,city } = option;
        let updatesql = `UPDATE user SET name = ?,username = ?,password = ?,phone = ?,city = ? WHERE id = '${option.id}'`;
        let addsqlparams = [name,username,password,phone,city];
        return this.commonSql(updatesql, addsqlparams, "修改成功");
    }

    /**
     * 删除用户
     * @param {*} option 
     */
    deleteUser(option){
        let mysql = this.app.mysql;
        let delsql = `DELETE FROM user WHERE id = '${option.id}'`
        return this.commonSql(delsql,null,'删除成功');
        // try {
        //     return new Promise((resolve, reject) => {
        //         mysql.query(delsql, function(err, row){
        //             if(err){
        //                 reject(err);
        //             } else {
        //                 resolve("删除成功");
        //             }
        //         })
        //     })
        // } catch (error) {
        //     throw (500);
        // }
    }

    commonSql(sql, value = null, successMsg = null){
        let mysql = this.app.mysql;
        try {
            return new Promise((resolve, reject) => {
                mysql.query(sql, value, function(err, row){
                    if(err){
                        reject(err);
                    } else {
                        resolve(successMsg ? successMsg : row);
                    }
                })
            })
        } catch (error) {
            throw (500);
        }
    }
}

module.exports = UserService;