<template>
  <div id="app">
    <v-app></v-app>
    <v-header></v-header>
    <v-banner></v-banner>
    <v-content></v-content>
    <v-apply></v-apply>  
    <v-bottom></v-bottom>
  </div>
</template>

<script>
	import Apply from './components/Index/Apply';
	import Banner from './components/Index/Banner'
	import Bottom from './components/Index/Bottom'
	import ContentC from './components/Index/ContentC'
	import Downapp from './components/Index/Downapp'
	import HeaderS from './components/Index/HeaderS'
	
export default {
  name: 'app',
  components:{
  	"v-apply":Apply,
  	"v-banner":Banner,
  	"v-bottom":Bottom,
  	"v-content":ContentC,
  	"v-app":Downapp,
  	"v-header":HeaderS
  }
}
</script>

<style>
*{
	margin:0;
	padding:0;
}
.clearfix:before,.clearfix:after{
	content:'';
	visibility: hidden;
	height:0;
	
}
.left{
	float:left;
}
.right{
	float:right;
}

html{
	font-size:31.25vw;
}
body{
	font-size:.16rem
}
ul li{
	list-style:none;
}
img{
	border:none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
