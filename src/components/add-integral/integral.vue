<template>
	<scroller  
		:on-refresh="refresh"
 	 	:on-infinite="infinite" ref="myscroller">
		<ul class="integral">
			<li v-for="(item,index) in newsArray" :class="{first:first(index)}">
				<div class="name">{{item.title}}</div>
				<div class="add">+{{item.img}}成长点数</div>
				<div class="date">{{item.time}}</div>
			</li>
		</ul>
	</scroller>
</template>

<script>

	const newsArray = [
		{title:"今日说法",time:"17-01-02 16:04",img:2},
		{title:"迅雷不及眼耳盗铃儿响叮当仁不让之势打出这一串的标题",time:"17-12-12 16:04",img:1},
		{title:"很皮很刁很嚣张",time:"17-8-8 16:04",img:3},
		{title:"afaf",time:"17-8-8 16:04",img:4},
		{title:"沙发沙发",time:"17-8-8 16:04",img:6},
		{title:"如题如题如果",time:"17-8-8 16:04",img:7},
		{title:"好机会vv你发给回复",time:"17-8-8 16:04",img:8},
		{title:"v才能被关怀他人",time:"17-8-8 16:04",img:4},	
	]
	const addArray = [				
		{title:"那个女孩变成",time:"17-8-8 16:04",img:3},
		{title:"让他bbc的",time:"17-8-8 16:04",img:5},
		{title:"nhk谬也看i有",time:"17-8-8 16:04",img:6},
		{title:"咯普ii美好明天",time:"17-8-8 16:04",img:7},
		{title:"你要吐一口玫瑰花",time:"17-8-8 16:04",img:8},
		{title:"而提出v不给发货",time:"17-8-8 16:04",img:9},
		{title:"权威人士程序",time:"17-8-8 16:04",img:3} 
	]
	export default{
		data() {
			return {
				newsArray:newsArray,
				noData: '',
				addArray:addArray,
			}
		},
		methods:{
			
			first(index){
				if(index===0) return true;
			},	
			refresh (done) {
		        setTimeout(() => {
		            var start = this.newsArray.length;
		            	
		            
		          done()
		        }, 1500)
		    },
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
                        self.newsArray.push(addArray[i])
                    }
//                  if(start > 10) {
//                      self.noData = "没有更多数据"
//                  }
//                  self.$refs.myscroller.resize();
                    done()
                }, 1500)
			}
		}
	}
</script>

<style lang="less">
	.integral{
		width:100%;		
		padding:0;
		margin:0;		
		li{
			box-sizing: border-box;
			width:100%;
			height:80px;
			padding:10px;
			display:flex;
			list-style:none;
			border-bottom:1px solid #d5d4d8;
			&.first{
			border-top:1px solid #d5d4d8;
		}
			div{
				height:100%;
				line-height:60px;
				font-size:14px;
				width:33%;				
				overflow: hidden; 
				text-overflow:ellipsis; 
				white-space: nowrap;
				text-align: center;
				&.add{
					margin:0 10px;
				}	
			}
			
		}
	}
</style>