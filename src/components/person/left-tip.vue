<template>
	<div class="left-tip">
		<div class="share">
			<img src="../../../static/img/index/FenXiang.png" alt="" />
		</div>
		<div class="news">
			<img src="../../../static/img/index/XiaoXi.png" alt="" />
		</div>
	</div>
</template>

<script>
</script>

<style lang="less">
	@import "../../assets/less/var.less";
	.left-tip{
		width:70px;
		height:180px;
		background:rgba(255,255,255,.5);
		border-radius: 25px;
		position:fixed;
		top:35%;
		text-align:center;
		left:15px;
		.share img, .news img{
			width:70%;
			margin:10px 0;
		}
	}
</style>