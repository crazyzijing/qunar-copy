<template>
	<div class="a-search">
		<div class="as-input">
			<i class="left iconfont icon-toLeft-copy" @click="pup"></i>
			<div class="left">
				<i class="left iconfont icon-search"></i>
				<input type="text" class="left search-con" v-model="new_list"  @keyup="MinA"/>
			</div>			
		</div>				
		<div class="m-search-page-list" v-if="Visible">		
            <div class="content-wrapper">
            	<div class="history-list">
				    <div class="label">
				        历史搜索
				        <span class="btn-history-clear right" @click="clearlist">清除</span>
				    </div>
				    <ul class="list clearfix">
				    		<li class="item left" v-for="slist in search_list">{{slist}}</li>				    	
				    </ul>
				</div>
				<div class="recommend-list ">
   					<h2 class="label">热门推荐</h2>
    				<ul class="list clearfix">      
			    		<li class="item left" v-for="list in lists">{{list}}</li>
   					 </ul>
              	</div>
          	</div>        	
      	</div>	
      	<div v-else="Visible" class="sear-con">
			  <ul>
			  	<li v-for="sear in sears" class="sear-con clearfix">
			  		<i class="iconfont icon-lvyoudujia left"></i>
			  		<span class="left" style="color:black">{{sear.text}}</span>
			  		<span class="left" style="color:#888">{{sear.hint}}</span>
			  	</li>
			  </ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'AlertM',
		props:['pup'],
		data:function(){
			return {
				sears:'',
				Visible:true,
				new_list:'',
				search_list:['度假·旅游'],
				lists:["泰国的签证","接送机","火车·高铁·动车票","飞机票查询预订",'度假·旅游',"酒店·宾馆·旅店","景点·景区门票","三亚的酒店"]
			}
		},
		methods:{
			addlist(){
				this.search_list.push(this.new_list);
				/*this.new_list=''*/
				console.log(this)
			},
			clearlist(){
				this.search_list=[];
			},
			MinA(){
				if(this.new_list==' '){
					this.new_list='';
					this.$data.Visible = true;	
				}
				else if(this.new_list==''){
					this.$data.Visible = true;	
				}else{
					this.$data.Visible = false;
					var url = 'http://touchsearch.qunar.com/intention/searchTouchSuggestionHtml.do?q='+this.new_list
					this.$http.jsonp(url).then(res=>{
						this.sears = res.body.data
					})
				}
			}
		},
			
	}

</script>

<style lang="scss" scoped>
	.as-input{
		width:100%;
		height:.32rem;
		background-color:#f5f5f5;
		padding:.08rem 0;
		>i{
			font-size:.2rem;
			line-height:.32rem;
			margin-left:.16rem;
		}
		div{
			width:2.6rem;
			height:.32rem;
			border-radius:0.04rem;
			background-color:#e0e0e0;
			margin-left:.1rem;
			i{
				font-size:.18rem;
				line-height:.32rem;
				margin-left:.04rem;
				
			}
			input{
				width:2.08rem;
			    height: 100%;
			    background: transparent;
			    border:0;
			    outline: 0;
			    font-size: .13rem;
			    margin-left:.05rem;
			}
		}	
	}
	.m-search-page-list{
			.label{
				width:3.02rem;
				height:.25rem;
				padding-left:.18rem;
				background: #f2f8fb;
				font-size:.12rem;
				font-weight:600;
				text-align:left;
				line-height:.25rem;
				span{
					font-weight:500;
					margin-right:.15rem;
				}
			}
			.list{
				width:100%;
				height:auto;
				margin-top:.1rem;
				.item{
				height: .22rem;
			    margin: 0 .05rem .1rem .14rem;
			    padding: .05rem .1rem;
			    border-radius: .05rem;
			    display: inline-block;
			    border: 1px solid #c7ced4;
			    color: #888;
			    font-size: .12rem;
			    line-height: .2rem;
			}
	    }
	}
	.sear-con{
		width:100%;
		height:auto;
		border-bottom:1px solid #ccc;
		padding:.1rem 0;
		font-size:.14rem;
		i{
			margin-left:.2rem;
			height:100%	
		};
		span{
			margin-left:.1rem
		}
	}
</style>
