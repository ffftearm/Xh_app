<template>
	<header class="m-header" :class="{'is-fiexd':fiexd}">
		<div class="m-header-button is-left">
			<slot name="left"></slot>
		</div>
		
		<h1 class="m-header-title" v-text="title"></h1>
		
		<div class="m-header-button is-right">
			<slot name="right"></slot>
		</div>
	</header>
</template>

<script>
	export default {
		props:{
			title:{
				type:String,
				default:''
			},
			bg:{
				type:Boolean,
				default:false
			},
			fiexd:{
				type:Boolean,
				default:false
			}
		}
	}
</script>

<style lang="less">
	@import "../assets/less/var.less";
	.m-header{
		width:100%;
	    display: flex;
	    align-items: center;
	    height: 44px;
	    padding: 0 10px;
	    position:fixed;
	    top:0;
	    left:0;
	    z-index:10;
	    background: @headerBg;
	    color: @headerDefaultColor;
	    box-sizing: border-box;
	    a{
	        color: @headerDefaultColor;
	    }
	    .m-header-button{
	        width: 70px;
	        align-items:stretch;
	        &.is-left{
	            text-align: left;
	        }
	        &.is-right{
	            text-align: right;
	        }
	        .m-icon-img{
	            width: 25px;
	            height: 25px;
	        }
	        .margin-right-10{
	            margin-right: 10px;
	        }
	    }
	    .m-header-title{
	        flex: 1;
	        text-align: center;
	        font-size: 16px;
	        text-overflow: ellipsis;
	        white-space: nowrap;
	        overflow: hidden;
	    }
	    &.is-bg{
	        background:@headerBg;
	        color: #fff;
	        a{color: #fff;}
	        .m-header-title{
	            color: #fff;
	        }
	    }
	    &.is-fiexd{
	        position: fiexd;
	        left: 0;
	        right: 0;
	        top: 0;
	        z-index: 9;
	    }
	}
</style>