<template>
	<div id="app">
		
 		<router-view name="one"></router-view>
 		<router-view name = "tab"></router-view>	 	
 		<transition :name="transitionName">
  			<router-view class="child-view" name = "two"></router-view>
  		</transition>
 			
	</div>
</template>

<script>
	export default {
	  name: 'app',
	  data () {
	      	return {
	        	transitionName: 'slide-left'
	      	}
    	},
    	beforeRouteUpdate (to, from, next) {
	      	let isBack = this.$router.isBack
	      	if (isBack) {
	        	this.transitionName = 'slide-right'
	      	} else {
	        	this.transitionName = 'slide-left'
	     	}
	      	this.$router.isBack = false
	     	next()
	    }
	}
</script>

<style lang="less">
	@import "assets/less/var.less";
	body,html{
		height:100%;
		margin:0;
		padding:0;
	}
	#app {
		width:100%;
		height:100%;
	}
 	.child-view {
  		position: absolute;
	 	width:100%;
	  	transition: all .8s cubic-bezier(.55,0,.1,1);
  	}
  	.slide-left-enter, .slide-right-leave-active {
    	opacity: 0;
    	-webkit-transform: translate(100%, 0);
    	transform: translate(100%, 0);
  	}
  	.slide-left-leave-active, .slide-right-enter {
    	opacity: 0;
    	-webkit-transform: translate(0, 0);
    	transform: translate(0, 0);
  	}
</style>
