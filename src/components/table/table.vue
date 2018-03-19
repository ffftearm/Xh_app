<template>
	<table>
		<tr class="head">
			<th v-for = "item in tableHeader">{{item}}</th>
		</tr>
		<table-con :data='tableStr'></table-con>
	</table>
</template>

<script>
	import tableCon from '@/components/table/table-con'
	
	export default {
		props: ['tableHeader','tableStr'],
		data() {
			return {
				
			}
		},
		created(){
//			console.log(this.tableHeader)
		},
		components: {
			tableCon
		}
	}
</script>

<style lang="less">
	@import "../../assets/less/var.less";

	table{
		width:100%;
		font-size:16px;
		border-collapse:collapse;
		background:@baseBg;
		.head {
			width:100%;
			th{
				width:25%;
				background:@tableHeadBg;
				color:#fff;
				height:35px;
			}
		}
	}
</style>