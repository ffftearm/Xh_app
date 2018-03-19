<template>
	<div class="grow-top">
		<div class="grow-left"></div>
		<div class="grow-con">
			<div class="progress"></div>
			<div class="progress-shadow"></div>
			<div class="grow-tit">距离下一级还差<span class="grow-num">123</span>点成长值</div>
		</div>
		<div class="grow-right"></div>
	</div>
</template>

<script>
</script>

<style lang="less">
	@import "../../assets/less/var.less";
	.grow-top{
		left:50%;
		top:30px;
		margin-left:-155px;
		width:310px;
		height:40px;
		position:fixed;
		.grow-left, .grow-right{
			position:absolute;
			width:40px;
			height:40px;
			background:url(../../../static/img/index/ChengZhangZhi__Left_girl.png) no-repeat center;
			background-size:cover;
			z-index:10;
		}
		.grow-left{
			left:5px;
		}
		.grow-con {
			width:260px;
			height:30px;
			position:absolute;
			background:url(../../../static/img/index/ChengZhangZhi_BG.png) no-repeat center;
			background-size:cover;
			left:25px;
			top:5px;

			.progress-shadow{
				position:absolute;
				top:2px;
				width:255px;
				height:25px;
				background:url(../../../static/img/index/ChengZhangZhi__ZheZhao.png) no-repeat center;
				background-size:cover;
			}
			.progress{
				position:absolute;
				width:20%;
				height:26px;
				top:2px;
				background:url(../../../static/img/index/ChengZhangZhi__blue.png) no-repeat center;
				background-size:cover;
			}
			.grow-tit{
				position:absolute;
				z-index:11;
				width:100%;
				text-align: center;
				height:30px;
				line-height: 30px;
				color:#Fff;
			}
		}
		.grow-right {
			right:5px;
			background:url(../../../static/img/index/ChengZhangZhi__Right.png) no-repeat center;
			background-size:cover;
		}
		
	}
	
</style>