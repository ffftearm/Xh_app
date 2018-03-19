<template>
	<div class="title-wrap">
		<div class="tit-icon hehe">
			<slot name="title"></slot>
		</div>		
		<span  v-text="titleCon"></span>
	</div>
</template>

<script>
	
	export default {
		props:{
			titleCon:{
				type:String,
				default:''
			}
		}
	}
</script>

<style lang="less">
	@import "../assets/less/var.less";
	.title-wrap{
		width:100%;
		height:40px;
		display: flex;
		justify-content:flex-start;
		align-items: center;
		background:@baseBg;
		.tit-icon{
			width:27px;
			height:25px;
			margin:0 10px;
			img{
				width:100%;
			}
		}
		span{
			font-size:18px;
			font-family: "微软雅黑";
			font-weight:bold;
		}
	}
</style>