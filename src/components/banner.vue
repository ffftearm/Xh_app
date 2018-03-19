<template>
	<div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str in banner" :style="{ backgroundImage: 'url(' + str + ')','background-size':'cover'}"></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>

<script>
	import VueAwesomeSwiper from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.css';
	export default {
		props: ['listImg','banner'],
		mounted() {
//			console.log('mounted', this)
			 var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                speed: 600,
                autoplay: 4000,
                onTouchEnd: function() {
                    swiper.startAutoplay()
                }
            });
		},
		created(){
			console.log(this.banner)
		}
	}
</script>

<style lang="less">
    .swiper-container {
        width: 100%;
        height: 200px;
        .swiper-wrapper {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .swiper-pagination-bullets {
            width:100%;
            height: 20px;
            bottom:0;
        }
    }
</style>