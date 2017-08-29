<template>
	<div>
		<ul class="appl clearfix">
			<li class="left">
				<a href="">
					<div>
						<i class="iconfont icon-luotuo"></i>
					</div>				
					<p>下载APP</p>
				</a>
			</li>
			<li class="left">
				<a href="">
					<div>
						<i class="iconfont icon-dingdan"></i>
					</div>
					<p>我的订单</p>
				</a>
			</li>
			<li class="left">
				<a href="">
					<div>
						<i class="iconfont icon-fenlei"></i>
					</div>	
					<p>精品软件推荐</p>
				</a>
			</li>
		</ul>
		<div class="i-xc">
			<img src="../../assets/images/5.jpg" alt="" />
		</div>
		<div class="i-bottom">
			<p class="ib-l left">Qunar 京ICP备05021087</p><p class="ib-c left">意见反馈</p><p class="ib-r left">关于我们</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Bottom'
	}
</script>

<style scoped lang="scss">
.appl{
	width:2.8rem;
	height:.82rem;
	padding:0 .2rem;
	li{
		width:.933rem;
		height:.82rem;
		a{
			text-decoration: none;
			display:flex;
			width:100%;
			height:100%;
			flex-direction: column;
			justify-content:space-around;
			align-items:center;
			div{
				margin-top:.05rem;
				border:1px solid #eee;
				width:.4rem;
				height:.4rem;
				border-radius:50%;
				display:flex;
				justify-content: center;
				align-items: center;
				i{
					font-size:.25rem;
					color:#666;
				}
			}
			p{
				height:.3rem;
				font-size:.12rem;
				color:black;
				line-height:.2rem;
			}
		}
	}
}
.i-xc{
	width:100%;
	height:.44rem;
	img{
		width:100%;
		height:100%
	}
}
.i-bottom{
	width:100%;
	height:.54rem;
	background-color: #eee;	
	.ib-l{
		width:1.54rem;
		height:.54rem;
		font-size:.12rem;
		line-height: .54rem;
		color:#8c8c8c;
	}
	.ib-c{
		width:.8rem;
		height:.54rem;
		line-height: .54rem;
		font-size:.12rem;
	}
	.ib-r{
		width:.8rem;
		height:.54rem;
		line-height: .54rem;
		font-size:.12rem; 
	}
}
	
</style>