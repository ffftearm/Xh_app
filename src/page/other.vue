<template>
	<div class="other">
		<m-header title="其他">
			<a @click="goback" href="javascript:void(0)" slot="left"><img class="m-icon-img" src="../../../github/src/assets/footer/back.png" alt="" /></a>
			<a href="javascript:void(0)" slot="right"><img class="m-icon-img" src="../../../github/src/assets/footer/SaoYiSao.png" alt="" /></a>
		</m-header>
	</div>	
	
</template>

<script>
	import mHeader from '../components/header';
	export default {
		components: {
			mHeader
		},
		methods:{
			goback () {
		     	this.$router.goBack()
		    }
		}
	}
</script>

<style lang="less">
	@import "../assets/less/var.less";		
	.other{
		height:667px;
		width:100%;
		background:#000;
	}
</style>