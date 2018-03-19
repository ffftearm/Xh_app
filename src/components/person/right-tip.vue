<template>
	<div class="right-tip">
		<div class="sign-in">
			<img src="../../../static/img/index/QianDao_n.png" alt="" />
		</div>
		<div class="luck">
			<img src="../../../static/img/index/YunQi.png" alt="" />
		</div>
		<div class="knowledge">
			<img src="../../../static/img/index/ZhiShi.png" alt="" />
		</div>
	</div>
</template>

<script>
</script>

<style lang="less">
	@import "../../assets/less/var.less";
	.right-tip{
		width:70px;
		height:260px;
		background:rgba(255,255,255,.5);
		border-radius: 25px;
		position:fixed;
		top:23%;
		text-align:center;
		right:15px;
		.sign-in img, .luck img, .knowledge img{
			width:70%;
			margin:10px 0;
		}
	}
</style>