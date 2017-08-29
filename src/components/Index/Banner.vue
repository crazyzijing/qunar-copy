<template>
	<mt-swipe  class="swiper">
	 <!--<mt-swipe-item v-for="banner in banners" :key="banner">
	  	<img  :src='banner'  alt=""/>
	 </mt-swipe-item >	-->
	 <mt-swipe-item >
	  	<img  src="../../assets/images/1.jpg"  alt=""/>
	  </mt-swipe-item>
	  <mt-swipe-item >
	  	<img  src="../../assets/images/2.jpg"  alt=""/>
	  </mt-swipe-item>
	  <mt-swipe-item >
	  	<img  src="../../assets/images/3.jpg"  alt=""/>
	  </mt-swipe-item>
	  <mt-swipe-item >
	  	<img  src="../../assets/images/4.jpg"  alt=""/>
	  </mt-swipe-item>
	</mt-swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default{
	name:'banner',
	data:function(){
		return{
			banners:[
				
			]
		}
	},
	methods: {
  		handleChange(index) {
    		auto:2000;
    		showIndicators:false
    }}
}
</script>

<style  lang="scss" scoped>
.swiper{
	height:.79rem;
	width:100%;
	img{
		width:3.2rem;
		height:.79rem;
	}
	.mint-swipe-indicators{
		bottom:.02rem;
	}
	.mint-swipe-indicator{
		width:0.06rem;
		height:0.06rem;
	}		
}
	
	
</style>