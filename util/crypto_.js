let crypto = require('crypto');
let  algorithm = 'aes-256-ctr',
    password = 'ljchat';

module.exports = {

  Encrypt:function(text){
    let cipher = crypto.createCipher(algorithm,password)
    let crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
  },
   
   Decrypt:function(text){
    let decipher = crypto.createDecipher(algorithm,password)
    let dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
  }
} 