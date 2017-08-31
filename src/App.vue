<template>
  <div id="app">
    	<router-view></router-view>
  </div>
</template>

<script>
	
export default {
  name: 'app', 
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
	display: block;
	clear:both;
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
