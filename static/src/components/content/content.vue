<style lang="less" >
	.chat-content-wrapper {
		display: flex;
		flex-direction:column;
		padding:0.25rem;
		flex:10000 1 auto;
	}
	.chat-content {
		background: #fff;
		color:#000;
		overflow-y: scroll;

		flex:1000 1 auto;
		padding:0.25rem;
		 span {
            em{
                padding: 0.25rem;
				border-radius: 10px;
				font-style: normal;
				display: inline-block;
				word-break: break-all; 
                word-wrap: break-word; 
                white-space: pre-wrap;
            }
			strong {
				display: block;
			}
        }
		span.others {
			padding:0.125rem;
			font-style: normal;
			text-align: right;
			font-size:0.5rem;
			display: block;
			em {
				background: #3090fe;
				color:#fff;
			}
		}
        span.own {
			padding:0.125rem;
			font-style: normal;
			text-align: left;
			font-size:0.5rem;
			display: block;
			em {
				background: rgb(221, 221, 221);

			}
		}
	}
	.chat-footer {
		background: #fff;
		
		input {
			
			font-style: normal;
			text-align: left;
			font-size:0.5rem;
			padding:0.125rem;
		}
		button {
			
			text-align: center;
			font-size:0.5rem;
			text-align: center;
			padding:0.125rem;
		}
	}
</style>
<template>
	<div class="chat-content-wrapper">
		<div class="chat-content"  v-if="chatMSG.length > 0">
			<span v-for="msg in chatMSG " :class="{own:msg.type===1,others:msg.type===2}"><strong>{{msg.time}}</strong><br/> <em>{{msg.say}}</em></span>
			
		</div>
		<div class="chat-content" v-else></div>
		<footer class="chat-footer">
			<input type="text" v-model="messageOBJ">
			<button v-on:click="send">提交</button>
		</footer>
	</div>
</template>
<script>
import IO from 'socket-io-client';
let Socket = IO();
    export default {
       data () {
       		return {
       			chatMSG:[],
       			messageOBJ:"",
       			
       		}

       },
        created () {
			let _this = this;
        	//监听message消息
   			Socket.on("service output",function(data) {
  					
		        	var msg = {
				        time: _this.gettimenow(),
				        say: data,
				        type:2
      				}
      				this.messageOBJ="";
      				this.chatMSG.push(msg);
      			}.bind(this));
   			//console.log(Socket)
  		},
  		methods:{
  			initChat () {
  				

  				return this.chatMSG;
  			},
			  gettimenow(){
                var DATE = new Date;
  					var y = DATE.getFullYear().toString();
  					var m = (DATE.getMonth()+1)<10?"0"+(DATE.getMonth()+1).toString():(DATE.getMonth()+1).toString();
  					var d = DATE.getDay()<10?"0"+DATE.getDay().toString():DATE.getDay().toString();
  					var hh = (DATE.getHours())<10?"0"+(DATE.getHours()).toString():(DATE.getHours()).toString();
  					var mm = DATE.getMinutes()<10?"0"+DATE.getMinutes().toString():DATE.getMinutes().toString();
  					var ss = DATE.getSeconds()<10?"0"+DATE.getSeconds().toString():DATE.getSeconds().toString();
  					var fullDate = y+"-"+m+"-"+d+" "+hh+":"+mm+":"+ss;
                      return fullDate;
            },
  			send () {
  				if(this.messageOBJ==""){
  					alert("不能发空消息")
  				} else {
  					let val =this.messageOBJ;

  					//console.log(this.getCookie('access_'));
  					var msg = {
				        time: this.gettimenow(),
				        say: val,
				        type:1
      				}
  					//this.io.emit('message', msg);
  					this.chatMSG.push(msg); 					 					 					
  					Socket.emit('client input', val);
					  this.messageOBJ="";
  				}
  			}
  		}
    }
</script>