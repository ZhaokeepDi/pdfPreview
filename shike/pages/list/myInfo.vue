<template>
	<view class="content column">
		
	</view>
</template>
<script>
	export default {
		data() {
			return {
				groop:1
				
			};
		},
		methods:{
			tap(showTap){
				if(showTap==this.groop){
					return
				}
				this.groop=showTap
			}	
		}
	}
</script>

<style>
	@import "../../dist/common/common.css";
	
</style>
