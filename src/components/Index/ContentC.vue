	<template>
	<ul class="navs">
		<li v-for="kind in kinds" class="nav1">
			<div class="nav1-l left" :style="kind.bgc">
				<i :class="kind.icon"></i>
				<p>{{kind.a}}</p>
			</div>
			<div class="nav1-r right">
				<div class="nav1r-t">
					<div :style="kind.bgc" class="left"><router-link :to="kind.BLink">{{kind.b}}</router-link></div>
					<div :style="kind.bgc" class="right">{{kind.c}}</div>
				</div>
				<div class="nav1r-t">
					<div :style="kind.bgc" class="left">{{kind.d}}</div>
					<div :style="kind.bgc" class="right">{{kind.e}}</div>
				</div>
			</div>			
		</li>
		<li class="nav2" >
			<div :style="kinds2.bgc">{{kinds2.a}}</div>
			<div :style="kinds2.bgc">{{kinds2.b}}</div>
			<div :style="kinds2.bgc">{{kinds2.c}}</div>
		</li>
	</ul>
	
</template>

<script>
	export default{
		name:'ContnetC',
		data:function(){
			return{
				kinds:[
					{
						icon:'iconfont icon-jiudian',
						a:"酒店",
						b:"特惠酒店",
						c:"国际酒店",
						d:"客栈 · 民宿",
						e:'会场 · 聚会',
						bgc:{backgroundColor:'#ff5555'},
						BLink :'/hotel'					
					},
					{
						icon:'iconfont icon-feiji',
						a:"机票",
						b:"低价机票",
						c:"汽车票 · 包车",
						d:'火车票',
						e:"船票",
						bgc:{backgroundColor:'#00a7f7'},
						BLink :'#javascript:;'	
					},
					{
						icon:'iconfont icon-lvyoudujia',
						a:"度假",
						b:"景点 · 门票",
						c:"旅游团购",
						d:'自由行',
						e:"周边 · 短途",
						bgc:{backgroundColor:'#7cb832'},
						BLink :'#javascript:;'	
					}
				],
				kinds2:{
					a:'金融 · 理财',
					b:'保险 · 车险',
					c:'全球购',
					bgc:{backgroundColor:'#ff9900'}
				}
			}
		}
	}
</script>

<style scoped lang="scss">
.navs{
	color:white;	
	.nav1{
		width:3.12rem;
		height:1.06rem;
		margin:.04rem .04rem 0;}
		.nav1-l{
			width:1.034rem;
			height:1.06rem;
			display:flex;
			flex-direction:column;
			text-align: center;
			justify-content: center;
			i{
				font-size:.35rem;
			}
			p{
				padding-top:.05rem
			}
		}	
		.nav1-r{
			height:1.06rem;
			width:2.08rem;
			display:flex;
			flex-direction: column;
			justify-content: space-between;
			.nav1r-t{
				width:2.08rem;
				height:.525rem;
				div{
					flex:1;
					width:1.035rem;
					height:.525rem;
					text-align: center;
					line-height:.57rem;
					}
				a{
					width:100%;
					height:100%;
					color:white;
					text-decoration: none;
				}
			}
		}
	.nav2{
		width:3.12rem;
		height:.55rem;
		margin:.04rem;
		display:flex;
		justify-content: space-between;
		div{
			text-align:center;
			height:.55rem;
			line-height: .55rem;
			width:1.032rem;
			
		}
	}
}	

	
</style>