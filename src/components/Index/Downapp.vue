<template>
	<div class="i-top" v-show="Off"> 
		<div class="left i-delete">
			<i class="iconfont icon-icon" @click="deletem"></i>
		</div>		
		<div class="left i-logo">
			<i class="iconfont icon-luotuo"></i>
		</div>
		<div class="left biaoyu">
			<p>去哪儿旅行</p>
			<p>更多客户端专享红包</p>
		</div>
		<div class="right i-da">
			下载APP
		</div>
	</div>
</template>

<script>
	export default{
		name:'Downapp',
		data:function(){
			return {
				Off:true
			}
		},
		methods:{
			deletem(){
				this.Off=false
			}
		}
	}
</script>

<style scoped lang="scss">
	.i-top {
		width:100%;
		height:.44rem;
		background:black;
		color:white;
		.i-delete{
			i{
				font-size:.12rem;
				margin-left:.04rem;
			}
		} 		
		.i-logo{
			width:.36rem;
			height:.36rem;
			border-radius:.02rem;
			background-color: #25a4bb;
			margin:.04rem 0 0 .08rem;
			display:flex;
			justify-content: center;
			align-items: center;			
			i{
				font-size:.22rem
			}
		}
		.biaoyu{
			width:1.5rem;
			height:.44rem;
			margin-left:.08rem;
			text-align:left;
			 p:first-child{
				font-size:.15rem;
				width:100%;
				height:.24rem;
				line-height:0.25rem;
			}
			p:last-child{
				font-size:.1rem;
			}
		}
		.i-da{
			width:.7rem;
			height:.28rem;
			border-radius:.02rem;
			background:red;
			margin-right:.18rem;
			margin-top:.08rem;
			text-align:center;
			line-height: .28rem;
			font-size:.14rem;
		}
	}
</style>	