<template>
		<view class="header bbx white">
			<view>
				<view class="select">
					<text>
						最新
					</text>
				</view>
				<view style="border-left:1px solid #FF6600;">
					<text>
						我的发布
					</text>
				</view>
				<view style="border-left:1px solid #FF6600;">
					<text>
						消息
					</text>
				</view>
			</view>
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
	.header {
		height: 33px;
		padding-top: 7.5px;
		padding: 0 0;
		margin-top:6px;
		width:100%;
	}

	.header>view>view {
		box-sizing: border-box;
		flex: 1;
		align-items: center;
		height: 100%;
		font-size: 13px;
		color: #FF6600;
		justify-content: center;
	}

	.header>view>.select {
		background: #FF6600;
		color: white;
	}

	.header>view {
		border: 1px solid #FF6600;
		flex:1;
		border-radius: 5px;
		height: 25px;
	}
</style>
