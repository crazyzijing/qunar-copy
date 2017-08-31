<template>
	<div id="index">
		<v-app></v-app>
	    <v-header :pup ="pup"></v-header>
	    <v-banner></v-banner>
	    <v-content></v-content>
	    <v-apply></v-apply>  
	    <v-bottom></v-bottom>
	    <mt-popup
		  v-model="popupVisible"
		  position="right">
		 <v-alert :pup ="pup"></v-alert>
		</mt-popup>
	</div>
</template>

<script>
	import Apply from './Apply';
	import Banner from './Banner'
	import Bottom from './Bottom'
	import ContentC from './ContentC'
	import Downapp from './Downapp'
	import HeaderS from './HeaderS'
	import { Popup } from 'mint-ui';
	import AlertM from './Alert';
	export default{
		name:'Index',
		data:function(){
			return {
				popupVisible:false
			}
		},
		methods:{
			pup(){
				this.popupVisible = !this.popupVisible
			}
		},
	  components:{
	  	"v-apply":Apply,
	  	"v-banner":Banner,
	  	"v-bottom":Bottom,
	  	"v-content":ContentC,
	  	"v-app":Downapp,
	  	"v-header":HeaderS,
	  	"v-alert":AlertM
	  }
	}
</script>

<style>
	 #app .mint-popup-right{
	width:3.2rem;
	height:5.68rem;
	background-color:white;
}
</style>