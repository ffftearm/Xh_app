<template>
	<div class="news">
		<m-header title="消息"></m-header>
		<m-integral></m-integral>
	</div>	
</template>

<script>
  	import mHeader from '../components/header';
  	import mIntegral from '../components/add-integral/integral'
	export default {
	  name: 'home',
	  components: {
		mHeader,
		mIntegral
		}
	}
</script>

<style lang="less">
	@import '../assets/less/var.less';
	.news{
		position:absolute;
		height:auto;
		width:100%;
		top:@headerTop;
		bottom:@headerBot;
	}
</style>