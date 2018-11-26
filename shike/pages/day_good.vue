<template>
	<scroll-view class="content ">
			<view class="column" style="padding:6.5px 0">
				<page-serch></page-serch>
			</view>
			<view class="list space">
				<view class="radius5 column" v-for="(item,index) in indexData.recommend" :key="index">
					<image :src="item.img"></image>
					<view class="indent list-c column space">
						<text>脆薄薯片</text>
						<view class="space price">
							<view class="itemCenter">
								<text class="icon iconfont icon-fenlei icon-jiage"></text>
								<text class="icon">价格</text>
							</view>
							<view class="itemCenter">
								<text class="icon iconfont icon-fenlei icon-dingwei"></text>
								<text>距离</text>
							</view>
							
							
						</view>
						<view class="space itemCenter praise">
							<view>
								<text class="radius5 fan">反20元</text>
							</view>
							<view>
								<view>
									<text class="icon iconfont icon-fenlei icon-xihuan" style="color:#FF0000"></text>
									<text>1231</text>
								</view>
								<view>
									<text class="icon iconfont icon-fenlei icon-shoucang" style="color:#F4EA2A"></text>
									<text>888</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
	</scroll-view>
</template>
<script>
	import {
		sendAjax,hrefHead
	} from "../dist/common/common.js";
	export default {
		data() {
			return {
				indexData: {
					recommend:[
						{img:"../../static/true.jpg",url:null,praise:77732,icon:"../../static/foodType/classify.jpg"},
						{img:"../../static/true.jpg",url:null,praise:23143,icon:"../../static/foodType/classify.jpg"},
					]
				},
			};
		},
		methods: {
			tap(showTap) {
				if (showTap == this.groop.show) {
					return
				}
				if (this.groop.first[showTap - 1] != 1) {
					this.groop.first.splice(showTap - 1, 1, 1);
				}
				let titleColor = ["", "", ""];
				titleColor[showTap - 1] = "color:black";
				this.serchBoxState.titleColor = titleColor;
				this.groop.show = showTap
			},
			textChange(evt) {
				console.log(evt)
				this.textValue = this.indexData.position[evt.detail.value];
			},
			spread(event) {
				//展开
				if (this.serchBoxState.state == false) {
					this.serchBoxState.state = true;
					this.serchBoxState.serch = "width:225px";
					this.serchBoxState.place = "max-width:65px";
				};
				this.focus = true
			},
			retract(event) {
				// 收起
				if (this.serchBoxState.state == true) {
					this.serchBoxState.state = false;
					this.serchBoxState.serch = "width:41px";
					this.serchBoxState.place = "";
					this.indexData.serchData = "";
				};
				this.focus = false
			},
			serch() {
				let data=this.indexData.serchData;
				if(data.length<1){
					return
				}
				sendAjax({url:'test?data='+data},function(red){
					this.list=this.list.push(res)
				})
			}
		}
	}
</script>

<style>
	@import "../dist/common/common.css";
	/* @import "../dist/css/index.css"; */
	@import "../dist/icon/iconfont.css";
	.list>view{
		height:189px;
		width:47%;
		box-shadow:0px 2px 4px 1px #B2B2B2;
		margin-bottom:14px;
	}
	.content{
		padding:0 16px;
	}
	.list{
		flex-directiuon:rows;
		flex-wrap:wrap;
	}
	.list image{
		width:100%;
		height:130px;
	}
	.indent{
		padding:4px 11px 11px 11px;
	}
	.list-c{
		flex:1
	}
	.praise>view>view{
		align-items: center;
	}
	.fan{
		background:#FF5F17;
		color:white;
		padding:0 3px
	}
	.price .icon{
		color:#FF0000;
		font-size:10px;
	}
</style>
