<template>
	<div class="person-name">
		<div class="grown-txt">
			<p class="stage">阶段：婴儿 <span class="level">1级</span></p>
			
		</div>
		<div class="grown-name">
			吊炸天
		</div>
	</div>
</template>

<script>
</script>

<style lang = "less">
	@import "../../assets/less/var.less";
	.person-name{
	    position: fixed;
	    width:200px;
	    text-align: center;
	    margin-left:-100px;
	    left:50%;
	    top:60px;
	   	color: rgb(255, 255, 255);
	    font-size: 14px;
	    text-shadow: rgb(248, 126, 167) 0px 0px 3px;
	    .grown-name{
	    	height:50px;
	    	width:200px;
	    	background:url(../../../static/img/index/ZhuYeMian_Name_BG.png) no-repeat center;
	    	background-size:contain;
	    	margin:0 auto;
	    	height: 60px;
		    line-height: 70px;
		    font-size: 16px;
		    font-weight: 600;
		    color: rgb(135, 160, 242);
		    text-shadow:none;
	    }
	}
</style>