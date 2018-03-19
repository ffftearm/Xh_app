<template>
	<a class="m-tabbar-item" :class="{isActive: isActive}"   @click='goToRouter'>
		<span class="m-tabbar-item-icon" v-show="!isActive"><slot name = "icon-normal"></slot></span> 
		<span class="m-tabbar-item-icon" v-show="isActive"><slot name = "icon-active"></slot></span> 
	</a> 
</template>

<script>
export default {
  props: {
  	bar:{
  		type:String,
  	},
  	id:{
  		type:String
  	},
  	isRouter:{
  		type:Boolean,
  		default:false
  	}
  },
  computed: {
  	isActive() {
  		if(this.bar===this.id){
  			return true;
  		}
  	}
  },
  methods: {
  	goToRouter(){
		this.$emit("hits",this.id)
  		this.$router.push(this.id)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	@import "../../assets/less/var.less";
	.m-tabbar-item{
		flex: 1;
		height:100%;
		text-align: center;
	
		.m-tabbar-item-icon{
			height:43px;
			display: block;
			display: flex;
			align-items: center;
			justify-content: center;
			img{
			    width: 28px;
			    height: 28px;
			}
		}
		
		&:nth-child(3) .m-tabbar-item-icon{
			height:45px;
		}
		&:nth-child(3) img{
			width:55px;
			height:55px;
			border-radius: 50%;
			background:#3e3e3f;
			border:4px solid #3e3e3f;
			margin-top:-25px;
		}
	}
</style>
