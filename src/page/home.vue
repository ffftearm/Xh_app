<template>
	<div class="home">
		<m-header title="BABA SPACE">
			<a href="javascript:void(0)" slot="left"><img class="m-icon-img" src="../assets/footer/XiaoXi.png" alt=""   /></a>
			<a href="javascript:void(0)" @click="router"  slot="right"><img class="m-icon-img" src="../assets/footer/SaoYiSao.png" alt="" /></a>
		</m-header>

		<my-scroll class="scroll" 
			:tableHeader = "tableHeader" 
			:tableStr ="tableStr"
			></my-scroll>
	</div>	
</template>

<script>
	import mHeader from '../components/header';
	import myScroll from '../components/scroll';
	export default {
	  	name: 'home',
	  	data() {
	  		return {
	  			//	  			table数据
	  			tableHeader: ['日期','时间','课程','教室'],
				tableStr:[
					{name:'老王',id:1,dateTime:10,room:"一班"},
					{name:'老习',id:5,dateTime:13,room:"二班"},
					{name:'老胡',id:3,dateTime:15,room:"三班"},
					{name:'老蛤',id:6,dateTime:11,room:"四班"}
				]
	  		}		
	  	},
	  	created(){
	  	},
		components: {
			mHeader,
			myScroll
		},
		methods:{
			router(){
				this.$router.push('other');
			},
			
		}
	}

</script>

<style lang="less">
	@import "../assets/less/var.less";
	.home{
		width:100%;
		height:100%;
		background:#f3f3f3;
	}
	
	.mySchool {
		span{
			font-size:14px!important;
		}
	}
</style>