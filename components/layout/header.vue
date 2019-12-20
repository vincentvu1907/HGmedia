<template>
	<header>
		<div class="wall-sticky" :style="'background:url('+parseImage(config.banner,'upload/homepage')+');background-position:center;'">
			<div class="logo-page">
				<img src="/images/logo-white.png" alt="logo-house-garden-ideas" width="80px">
			</div>
			<div class="quote-page">
				<h2>{{config.quote}}</h2>
			</div>
		</div>
	</header>
</template>
<script>
export default {
	computed:{
		config(){
			return this.$store.getters["home/getConfig"]
		}
	},
	methods:{
		parseImage(name,path){
			return process.env.baseURL+"/"+path+"/"+name
		}
	}
}
</script>