'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller{

    async login(){
      let result;
      let option = this.ctx.request.body;
      try {
        result = await this.ctx.service.user.login(option);
        this.ctx.body = {
          code: 200,
          message: '登录成功',
          data: result,
        }
      } catch(e){
        this.ctx.body = {
          code: 500,
          message: e,
        }
      }finally{
        this.logger.info('登录', result)
      }
    }

    async queryAllUser() {
      let result;
      try {
        // 请求数据
        result = await this.ctx.service.user.queryAllUser();
        this.ctx.response.body = {
          code: 200,
          message: 'ok',
          data: result,
        } 
      } catch(e){
        this.ctx.body = {
          code: 500,
          message: e,
        }
      }finally {
        this.logger.info('查询所有用户', result)
        // 渲染数据
        // await this.ctx.render('user.html', {list : result});

        // this.ctx.body = {
        //   code: 200,
        //   message: 'ok',
        //   data: result,
        // }
      }
    }

    async addUser() {
      let result;
      let option = this.ctx.request.body;
      try {
        // 请求数据
        result = await this.ctx.service.user.addUser(option);
        this.ctx.response.body = {
          code: 200,
          message: result,
        } 
      } catch(e){
        this.ctx.response.body = {
          code: 500,
          message: result,
        } 
      }finally {
        this.logger.info('新增用户', result)
      }
    }

    async updateUser() {
      let result;
      let option = this.ctx.ajaxParams;
      try {
        // 请求数据
        result = await this.ctx.service.user.updateUser(option);
        this.ctx.response.body = {
          code: 200,
          message: result,
        } 
      } catch(e){
        this.ctx.response.body = {
          code: 500,
          message: result,
        } 
      } finally {
        this.logger.info('编辑用户', result)
        
      }
    }

    async deleteUser() {
      let result;
      let option = this.ctx.request.body;
      try {
        // 请求数据
        result = await this.ctx.service.user.deleteUser(option);
        this.ctx.response.body = {
          code: 200,
          message: result,
        } 
      } catch(e){
        this.ctx.response.body = {
          code: 500,
          message: result,
        } 
      }finally {
        this.logger.info('删除用户', result)
        
      }
    }
}

module.exports = UserController;
