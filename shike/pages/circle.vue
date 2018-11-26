<template>
	<scroll-view class="content column">
		<view class="white" style="padding: 0 28px;">
			<page-head></page-head>
		</view>
		<view class="mb column"> 
			<view class="white column">
				<view class="new-list column">
					<view class="news-header bbx space">
						<view class="row-centenr space">
							<view style="width:25px;height:25px">
								<image class="all" src="../../static/index/dinwei.jpg"></image>
							</view>
							<view class="column">
								<text style="font-size:9px" class="orange">id</text>
								<text style="font-size:7.5px" class="main-color">
									时间
								</text>
							</view>
						</view>
						<view>
							<button class="bbx">已关注</button>
						</view>
					</view>
					<view class="news-content">

					</view>
				</view>
				<view class="news-footer column">
					<view class="around all main-color">
						<view>
							<text class="icon iconfont icon-fenlei icon-chakan1"></text>
							<text>1231</text>
						</view>
						<view>
							<text class="icon iconfont icon-fenlei icon-xiaoxi"></text>
							<text>1233</text>
						</view>
						<view>
							<text class="icon iconfont icon-fenlei icon-xihuan1"></text>
							<text>1233</text>
						</view>
						<view>
							<text class="icon iconfont icon-fenlei icon-fenxiang"></text>
							<text>1233</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>
<script>
	export default {
		data() {
			return {
				groop: 1,
				indexData: {
					opation: ["地点一", "地点二"],
					typeList: [{
							name: "",
							icon: ""
						},
						{
							name: "",
							icon: ""
						},
						{
							name: "",
							icon: ""
						},
						{
							name: "",
							icon: ""
						},
						{
							name: "",
							icon: ""
						},
						{
							name: "",
							icon: ""
						},
						{
							name: "",
							icon: ""
						},
						{
							name: "",
							icon: ""
						}
					]
				}
			};
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
	@import "../dist/css/circle.css";
</style>
