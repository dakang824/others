'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

    const { router, controller } = app;

    router.redirect('/', controller.home.index, 302);
    router.get('/index', controller.home.index);
    router.post('/login', controller.user.login);

    router.post('/addUser', controller.user.addUser);
    router.post('/updateUser', controller.user.updateUser);
    router.post('/deleteUser', controller.user.deleteUser);
    router.get('/users', controller.user.queryAllUser)
    // router.get('/user/queryAll', controller.user.queryAll)
};
