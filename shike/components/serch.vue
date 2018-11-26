<template>
		<view class="serch bbx white border">
			<text class="icon iconfont icon-fenlei icon-sousuo"></text>
			<input type="text" placeholder="搜索美食或者店铺">
		</view>
</template>
<script>
	export default {
		data() {
			return {};
		},
		methods: {
			tap(showTap) {
				if (showTap == this.groop) {
					return
				}
				this.groop = showTap
			}

		}
	}
</script>

<style>
	@import "../dist/common/common.css";
	@import "../dist/icon/iconfont.css";
	.serch{
		height:32px;
		padding:6px 15px;
		border-radius:20px;
		align-items:center;
		font-size:9px
	}
	.serch>input{
		flex:1;
		height:100%;
	}
</style>
