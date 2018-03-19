<template>
 	 <scroller 
 	 	class="scroll-wrap"
 	 	:on-infinite="infinite" ref="myscroller">
 	 	<banner-wrap :bannerCon ="bannerCon"></banner-wrap>
		<m-title titleCon="本周课程">
			<img  src="../../../github/src/assets/footer/WoDeKeCheng_Icon.png" class="t-icon" slot="title">
		</m-title>
		<m-table :tableHeader = "tableHeader" :tableStr ="tableStr" ></m-table>
		<m-title titleCon="我的校区" class="mySchool" style="border-bottom:1px solid #e6e6e6;margin-top:10px;">
			<img src="../../../github/src/assets/footer/WoDeXiaoQu_Icon.png" class="t-icon" slot="title">
		</m-title>
	 	<template v-for ="item in newsArray">
	 		<!--展示上拉加载的数据列表-->
			<div class="news-wrap">
				<div class ="news-con">
					<div class="news-left">
						<h1 name="news-title">{{item.title}}</h1>
						<span name="news-time" >{{item.time}}</span>
					</div>
					<div class="news-right">
						<div class="news-img" :style="{background:'url(' + item.img + ')no-repeat center',backgroundSize:'contain'}"></div>
					</div>	
				</div>
			</div>
 		</template>
	</scroller>	
</template>
<script>
	import img from "../assets/logo.png";
	import bannerWrap from '../components/bannerWrap';
	import mTitle from '../components/title';
	import mTable from '../components/table/table';
	var count = 0;
	const newsArray = [
		  			{title:"今日说法",time:"17-01-02",img:img},
		  			{title:"迅雷不及眼耳盗铃儿响叮当仁不让之势打出这一串的标题",time:"17-12-12",img:img},
		  			{title:"很皮很刁很嚣张",time:"17-8-8",img:img},
		  			{title:"afaf",time:"17-8-8",img:img},
		  			{title:"沙发沙发",time:"17-8-8",img:img},
		  			{title:"如题如题如果",time:"17-8-8",img:img},
		  			{title:"好机会vv你发给回复",time:"17-8-8",img:img},
		  			{title:"v才能被关怀他人",time:"17-8-8",img:img},	
		  		]
	const addArray = [				
					{title:"那个女孩变成",time:"17-8-8",img:img},
		  			{title:"让他bbc的",time:"17-8-8",img:img},
		  			{title:"nhk谬也看i有",time:"17-8-8",img:img},
		  			{title:"咯普ii美好明天",time:"17-8-8",img:img},
		  			{title:"你要吐一口玫瑰花",time:"17-8-8",img:img},
		  			{title:"而提出v不给发货",time:"17-8-8",img:img},
		  			{title:"权威人士程序",time:"17-8-8",img:img} 
		  		]
	export default {
		props: ['tableHeader','tableStr'],
		data() {
			return {
				newsArray:newsArray,
				noData: '',
				bannerCon:[],
			}
		},
		components: {
			bannerWrap,
			mTitle,
			mTable
		},
		created() {     
			this.$http.post('/map/v1/news/banner',{"shop_id":0}).then(function(res){
				console.log(res);  
				let data = res.body.data;
				let len = data.length;
				for(var i=0;i<len;i++){
					this.bannerCon.push(data[i].img);
				}
			});
   		},
		mounted() {

		},
		methods:{
			infinite(done) {
                if(this.noData) {
	                setTimeout(()=>{
	                    this.$refs.myscroller.finishInfinite(true);
	                })
                	return;
                }
                let self = this;
                let start = this.newsArray.length;
                setTimeout(() => {
                    for(let i = 0; i <5; i++) {
                    	console.log(i)
                        self.newsArray.push(addArray[i])
                    }
                    if(start > 10) {
                        self.noData = "没有更多数据"
                    }
//                  self.$refs.myscroller.resize();
                    done()
                }, 1500)
//              setTimeout(() => {
//                  for(let i = start + 1; i < start + 5; i++) {
//                  	console.log(i)
//                      self.newsArray.push(addArray[i])
//                  }
//                  if(start > 10) {
//                      self.noData = "没有更多数据"
//                  }
////                  self.$refs.myscroller.resize();
//                  done()
//              }, 1500)

            }
		}
	}
		
</script>

<style lang="less">
	@import "../assets/less/var.less";
	.scroll-wrap{
		height:622px!important;
		overflow:hidden;
		top:@headerTop!important;
	}
	._v-container>._v-content>.loading-layer[data-v-ecaca2b0]{
		height:43px;
		line-height:43px;
	}
	.news-wrap{
		width:100%;
		height:auto;
		background:@baseBg;
		.news-con{
			padding:10px 0;
			border-bottom:1px solid #e6e6e6;
			width:100%;
			height:100%;
			position:relative;
			&:after{
				.clear;		    
			}
			.news-left{
				padding-left:10px;
				float:left;
				width:200px;
				
				h1{
					padding:0;
					margin:0;
					text-align: left;
					height:43px;
					font-size:15px;
					.ellipsis(2);
				}
				span{
					position:absolute;
					left:10px;
					bottom:10px;
				}
			}
			.news-right{
				margin-right:10px;
				float:right;
				height:90px;
				width:140px;	
				div{
					width: 100%;
					height: 100%;
				}		
			}
		}
	}
</style>