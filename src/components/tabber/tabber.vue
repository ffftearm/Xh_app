<template>
  <div class="m-tabber">
  	<template v-for ="item in tabArray">
  		<m-tabber-item  :id='item.id' @hits='hehe'  :bar = 'val'>
				<img :src="item.imgn" slot="icon-normal"/>
				<img :src="item.imgs" slot="icon-active">
			</m-tabber-item>
  	</template>
  </div>
</template>

<script>
import mTabberItem from './tabber-item';
import imgn_5 from '../../assets/footer/WoDe_n.png'
import imgs_5 from '../../assets/footer/WoDe_s.png'
import imgn_4 from '../../assets/footer/LianXi_n.png'
import imgs_4 from '../../assets/footer/LianXi_s.png'
import imgn_3 from '../../assets/footer/YouXi_n.png'
import imgs_3 from '../../assets/footer/YouXi_s.png'
import imgn_2 from '../../assets/footer/KeCheng_n.png'
import imgs_2 from '../../assets/footer/KeCheng_s.png'
import imgn_1 from '../../assets/footer/ShouYe_s.png'
import imgs_1 from '../../assets/footer/ShouYe_n.png'
	export default {
	 	data() {
			return {
				tabArray:[
					{imgn:imgn_1,imgs:imgs_1,id:"home"},
					{imgn:imgn_2,imgs:imgs_2,id:"calendar"},
					{imgn:imgn_3,imgs:imgs_3,id:"person"},
					{imgn:imgn_4,imgs:imgs_4,id:"search"},
					{imgn:imgn_5,imgs:imgs_5,id:"news"},
				],
				val:''
			}
		},
	 	 components: {
				mTabberItem
		},
		created(){
	 		this.hehe(this.$route.name);
	 	},
		methods:{
			hehe(val){
				this.val = val;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.m-tabber {
		width:100%;
		height:43px;
		position:fixed;
		bottom:0;
		left:0;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		background:#3e3e3f;
		background-size:contain;
  }
	
</style>
