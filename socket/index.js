
let io = require('socket.io');
//let other_io = require('socket.io-client')('http://localhost:3300');;
//let Jwt = require('socketio-jwt');
var users = {};//存储在线用户列表的对象
module.exports = function(server) {
    io = io(server);
    let messageId = 1;
/**
 * using jwt
 */
    /*io.use(Jwt.authorize({
        secret: 'ljchat',
        handshake: true
    }));
    
other_io.on("connect",function(){
    console.log('---------------------socket2---------------------')
    other_io.on('server message',function(data){
       
        io.emit('message',data);
    });
});
*/
    io.on('connection', function(socket) {
        //console.log('client: ',socket.id)

        //console.dir(socket);           
        //监听talking消息
        socket.on('client input', function(data) {
            console.log('client input id:',socket.id);
            users[socket.id]="conn"
            //data.id = messageId++;
            console.dir(data);
            //socket.emit('message', data);
            io.emit('client output', {id:socket.id,data:data});
            //other_io.emit('message',data);
        });
        socket.on('service input', function(data) {
            let clients = io.sockets.clients();
            console.log(users)
            for(var item in clients) {
                if(item == 'connected') {
                    var clients_ = clients[item];
                    for(var j in clients_) {
                        if(users[clients_[j].id]) {
                            io.emit('service output', data);
                        }
                        //console.log(clients_[j].id);
                    }
                    
                }
                
            }
            
            console.log('service input id:',socket.id);
            //data.id = messageId++;
            console.dir(data);
            //socket.emit('message', data);
            
            //other_io.emit('message',data);
        });

    });
    io.on("disconnect",function(socket){
        console.log('a user disconnect,  id: ' + socket.id);
    });
  
}