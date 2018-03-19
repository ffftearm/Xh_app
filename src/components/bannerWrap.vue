<template >
	<m-banner 
		:listImg="listImg"
		:banner = "bannerCon"
		></m-banner>
</template>

<script>
	import mBanner from '../components/banner'
	import a from '../../static/img/1.jpg'
	import b from '../../static/img/2.jpg'
	import c from '../../static/img/3.jpg'
	import d from '../../static/img/4.jpg'
	import e from '../../static/img/5.jpg'
	
	export default {
		name: 'banner',
		data(){
			return {
				listImg:[{url: a}, {url: b}, {url: c}, { url: d}, {url: e}],
				banner:[]
				
			}
			
		},
		props:['bannerCon'],
		components:{
			mBanner
		},
		created(){
			this.banner.push(this.bannerCon)
			console.log(this.banner)
		}
	}
</script>

<style lang="less">

</style>