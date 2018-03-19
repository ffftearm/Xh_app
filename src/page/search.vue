<template>
	<div class="search">
			<m-header title="我的练习"></m-header>
		<m-table :tableHeader="tableHeader" :tableStr = "tableStr"></m-table>
	</div>
</template>

<script>
  	import mHeader from '../components/header';
  	import mTable from '../components/table/table'
	export default {
		data(){
			return {
				tableHeader: ['课程','练习数','完成数'],
				tableStr:[]
			}
			
		},
		name: 'home',
		components: {
			mHeader,
			mTable
		},
		created() {     
			this.$http.post('/map/v1/role_sign/practice',{
				"token": "0a61d7e40681a49309664de7695ae15e",
				"stu_id": 112,
				"start": 0,
				"limit": 10
			}).then(function(res){
				let data = res.body.data;
				let  aaa;
				for(var i = 0,len = data.length;i<len;i++){
					let total = data[i].total==undefined?'0':data.total;
					let completion= data[i].completion==undefined?'0':data.completion;
					aaa={"course_name":data[i].course_name,"total":total,"completion":completion};
					this.tableStr.push(aaa);
				}	
				
			});
   		}
	}
</script>
<style lang="less">
	@import "../assets/less/var.less";
	.search{
		width:100%;
		position:absolute;
		top:@headerTop;
		bottom:@headerBot;
	}
</style>