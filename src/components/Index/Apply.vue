<template>
	<div class="apply-con">
		<ul class="clearfix">
			<li v-for="nav in navk" :key="nav.icon" class="left">
				<a href="">
					<i :class="nav.icon"></i>
					<p>{{nav.name}}</p>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'Apply',
		data:function(){
			return{
				navk:[
					{
						icon:'iconfont icon-qianzheng',
						name:'签证·WIFI'
					},
					{
						icon:'iconfont icon-chujingyou',
						name:'出境游'
					},
					{
						icon:'iconfont icon-yiriyou',
						name:'一日游'
					},
					{
						icon:'iconfont icon-qiche',
						name:'汽车票'
					},
					{
						icon:'iconfont icon-yiyuanduobaoshouye',
						name:'一元夺宝'
					},
					{
						icon:'iconfont icon-jichangbashimianfei',
						name:'超级巴士'
					}				
				]
			}
		}
	}
</script>

<style scoped>
.apply-con{
padding-top:0.1rem;
width:3.2rem;
height:1.48rem;
background:#eee;}
.apply-con ul{
width:2.8rem;
padding:0 0.2rem;
background-color: #fff;}
ul li{
width:.933rem;
height:.69rem;}
li a{	
width:100%;
height:100%;
text-decoration: none;
display:flex;
flex-direction: column;
justify-content: space-around;}
 a i{
	color:cornflowerblue;
	font-size:.25rem;
}
a p{
	color:black;
	font-size:.12rem;
}
</style>