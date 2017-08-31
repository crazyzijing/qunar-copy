<template>
	<div id="#hotel">
		<div>酒店页面</div>
	</div>
</template>

<script>
	export default{
		name:'Hotel',
		beforeMount(){
			var url='http://touch.qunar.com/h5/group/ajax/aggList?cityName=%E5%8C%97%E4%BA%AC';
			this.$http.get(url)
			.then(res=>{
				console.log(res)
			})
		}
	}
</script>
	
<style>
</style>