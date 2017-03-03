let router = require('koa-router')();
//let  jwt = require('jsonwebtoken');
let crypto_= require('../util/crypto_.js');

router.get('/', function *(next) {
 // console.log(this.cookies.get('access_: ','access_'))
 let name = this.cookies.get('access_');
  if( name==undefined || name==null )
  {
    this.redirect('/users');
  } else {
    let user =JSON.parse(name);
    yield this.render('app',{
    	layout: 'layout'
    });
  }
});
module.exports = router;
