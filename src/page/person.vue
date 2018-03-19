<template>
	<div class="person">
		<m-grown></m-grown>
		<m-name></m-name>
		<left-tip></left-tip>
		<right-tip></right-tip>
		<m-echar></m-echar>
		<m-child></m-child>
	</div>
	
</template>

<script>
  	import mGrown from '../components/person/grown';
  	import leftTip from '../components/person/left-tip';
  	import rightTip from '../components/person/right-tip';
  	import mName from '../components/person/name'
  	import mEchar from '../components/person/echar'
  	import mChild from '../components/person/child'
	export default {
	  name: 'home',
	  components: {
			mGrown,
			leftTip,
			rightTip,
			mName,
			mEchar,
			mChild
		}
	}
</script>

<style lang="less">
	.person{
		width:100%;
		height:667px;
		background:url(../../static/img/index/ZhuYeMian_BG.png) no-repeat top center;
		background-size:cover;
	}
</style>