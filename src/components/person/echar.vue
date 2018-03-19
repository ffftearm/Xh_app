<template>
	<div id="main"></div>
</template>

<script>
	import echarts from 'echarts'
	export default{
		data () {
            return {
                charts: '',
                opinion:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
                opinionData:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1548, name:'搜索引擎'}
                ]
            }
        },
        methods:{
            drawPie(id){
                this.charts = echarts.init(document.getElementById(id))
                this.charts.setOption({
 					radar: {
						center: ['50%', '50%'],
						name: {
							textStyle: {
								color: '#fff',
								backgroundColor: '#fff',
							},
							axisLine: {
								lineStyle: {
									color: '#fff'
								}
							}
						},
						radius: 50,
						splitArea: {
							areaStyle: {
								color: ['rgba(250,250,250,.3)'],
								shadowColor: 'rgba(0, 0, 0, 0.3)',
							}
						},
						axisLine: {
							lineStyle: {
								color: 'rgba(255,255,255,.8)',
								opacity: 0.5
							}
						},
						splitLine: {
							lineStyle: {
								color: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, .5)']
							}
						},
						axisTick: {
							show: false
						},

						indicator: [{
								name: '',
								max: 1200
							},
							{
								name: '',
								max: 1200
							},
							{
								name: '',
								max: 1200
							},
							{
								name: '',
								max: 1200
							},
							{
								name: '',
								max: 1200
							},

						]
					},
					series: [{
						type: 'radar',						
						data: [

							{
								value: [300,800,600,400,511],
								symbol: 'diamond',
								areaStyle: {
									normal: {
										color: 'rgba(255, 255, 0, 0.6)'
									},
									emphasis: {
										shadowColor: 'rgba(0, 23, 123, 1)',
   									 	shadowBlur: 10,
   									 	shadowOffsetX:10
									}
								}
							}
						],
						itemStyle: {
							normal: {
								color: 'rgba(255,255,255,0)',
								lineStyle: {
									color: 'rgba(252,241,253,.9)',
									width: 1
								}
							}
						}
					}]
				})
            }
        },
		mounted(){
            this.$nextTick(function() {
                this.drawPie('main')
            })

        }
	}
</script>

<style lang="less">
	
@import "../../assets/less/var.less";
	#main{
		position:fixed;
		width:100px;
		height:100px;
		left:50%;
		bottom:70px;
		margin-left:-50px;
	}
</style>