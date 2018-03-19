<template>
	<div class="login">
		<div class="logo">
			<img src="../../static/img/index/logo.png" alt="" />
		</div>
		<div class="phone-num">
			<input class="phone" v-model="phone" type="text" placeholder="请输入登陆的手机号" />
		</div>			
		<div class="login-btn" @click = "login">登录</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				phone:""
			}
		},
		created(){
			
			
		},
		methods:{
			login(){
				this.$http.post('/map/v1/user/login',{
					'user_tel':this.phone
				}).then(function(res){
					console.log(res.status);
					if(res.status==200){
					let data = JSON.stringify(res.body.data);
					localStorage.setItem("data",data);
					this.$router.push("home");
					}

				});
			}
		}
		
	}
</script>

<style lang="less">
	.login{
		width:100%;
		height:100%;
		overflow: hidden;
		background:url(../../static/img/index/ShouYe_BG.png) no-repeat center;
		background-size:contain;
		.logo{
			width:150px;
			position:absolute;
			left:50%;
			margin-left:-75px;
			top:110px;
			img{
				width:100%;
			}
		}
		.phone-num{
			width:60%;
			margin:0 auto;
			border-radius: 30px;
			overflow: hidden;
			margin-top:360px;
			margin-bottom:20px;
			.phone{
				display: block;
			    margin: 0;
			    padding: 0;
			    width: 100%;
			    height: 50px;
			    outline: 0;
			    border: 0;
			    text-align: center;	
			}	
		}
		.login-btn{
			width:60%;
			margin:0 auto;
			text-align: center;
			color:#fff;
			font-size:18px;
			background:rgb(255, 158, 140);
			height:50px;
			line-height: 50px;
			border-radius:30px;
			
		}
	
		
	}
	
</style>