var router = require('koa-router')();
//let  jwt = require('jsonwebtoken');
let crypto_= require('../util/crypto_.js');
//let SJCL = require('sjcl');
router.get('/', function *(next){
  //console.log("users")
 
   yield this.render('users/login', {
        title: 'Hello World Koa!'
        
      });
})
.post('/login',function *(next){
  //console.dir(this.request.body);
  let body =  this.request.body;

  

   /**
   * 测试数据
   */
  let profile = {
    first_name: body.username,
    id: 123
  };
 
  /**
   * 生成令牌
   */
  let user = JSON.stringify(profile);
 
  //获取当前时间
  var date=new Date();
  var expireDays=1;
  //将date设置为1天以后的时间
  date.setTime(date.getTime() + (expireDays*24*3600*1000)); 
 
  this.cookies.set("access_",user,{ expires:date });
   this.response.redirect('/');
  //yield this.render('users/login', {
  //      title: 'Hello World Koa!',
  //      token:token
  //    });
})
module.exports = router;
