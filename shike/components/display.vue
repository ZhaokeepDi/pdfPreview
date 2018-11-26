<template>
		<view class="radius5 all column space" :style="'background:url('+item.img+') 100% 100%/100% 100%'">
				<view class="restaurant space bbx" style="padding:0 8px">
					<view class="column-centenr itemCenter" style="height:52px;">
						<image :src="item.icon" style="border-radius:50%"></image>
						<text>狄大人</text>
					</view>
					<view style="color:white;line-height:27px">
						<text>{{item.praise}}</text>
					</view>
				</view>
				<view class="bbx space itemCenter shadow-box">
					<view class="all shadow"></view>
					<view class="all space itemCenter shadow-top">
						<navigator class="h-all" :url="'hhhhhhh'+item.url">
							<text class="ellipsis">这里是产品介绍</text>
						</navigator>
						<text class="radius5 preferential">这是优惠</text>
					</view>
				</view>
		</view>
</template>
<script>
	export default {
		props:["item"],
		data() {
			return {};
		},
		methods: {
			tap(showTap) {
				if (showTap == this.item) {
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
	.restaurant image{
		width:30px;
		height:30px;
	}
	.shadow{
		background:white;
		opacity:0.6;
		position:absolute;
		left:0
	}
	.shadow-top{
		position:relative;
		z-index:2
	}
	.preferential{
		background:#FF6600;
		color:white;
		padding:0 5px;
		line-height:14px
	}
	.shadow-box{
		position:relative;
		height:26px;
		padding:6px
	}
</style>
