<template>
	<tbody>
		<tr v-for="(item,index) in data" class="list-td">
			<td v-for ="items in item">{{items}}</td>
		</tr>
		
	</tbody>
	
</template>

<script>
	export default {
		props: ['data'],
//		data(){
//			return {
//				tableStr:''
//			}
//		},
		created(){
//			console.log(this.data)
		}
	}
</script>

<style lang="less">
	tbody{
		.list-td{
			width:100%;
			border-bottom:1px solid #e6e6e6;
			td{
				height:37px;
				padding:0;	
				text-align: center;	
			}	
		}
		width:100%;
	}
</style>