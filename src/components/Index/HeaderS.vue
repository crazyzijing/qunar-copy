<template>
	<div class="search-page">
		<div class="i-search">
			<div class="i-search-con">
				<i class="iconfont icon-search"></i>
				<span  class="i-search-input">
					搜索旅行地/酒店/景点
				</span>
			</div>		
		</div>
		<a href="http://127.0.0.1:8020/qunar/user.html" class="i-user">
			<div class="i-mine">
				<i class="iconfont icon-user"></i><span>我的</span>
			</div>
			
		</a>		
	</div>
</template>

<script>
</script>

<style scoped lang="scss">
	.search-page {
		width:100%;
		height:0.45rem;
		.i-search{
			float:left;
			width:2.7rem;
			height:.45rem;
			.i-search-con{		
				margin:0.07rem  0 0.07rem 0.1rem;
				border-radius:.15rem;
				border:1px solid grey;
				width:2.58rem;
				height:.28rem;
				background:#f4f4f4;
				line-height:.3rem;
				i{
					float:left;
					font-size:.2rem;
					margin-left:.05rem;
				}
				.i-search-input{
					text-align:left;
					float:left;
					width:2.26rem;
					height:.28rem;
					font-size:.13rem
				}			
			}
		}
		.i-user{
			width:0.5rem;
			height:.44rem;
			float:right;
			text-decoration: none;
			.i-mine{
				padding:0 0.1rem;
				width:0.3rem;
				height:.44rem;
				display:flex;
				flex-direction:column;
				i{
					font-size:.23rem;
					flex:1;
					line-height:97px;
				}
				span{
					font-size:.12rem;
					flex:1;
					line-height:8px;
				}
			}
		}
	}

</style>

