<template>
	<scroll-view class="content column">
		<view class="column" style="padding:0 16px;">
			<page-serch></page-serch>
			<page-head></page-head>
		</view>
		<!-- 美食排行 -->
		<view class="footer bbx whit column">
			<view class="column footer-recommend" v-for="(item,index) in indexData.recommend">
				<page-display :item=item :key="index"></page-display>
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
	@import "../dist/css/index.css";
	@import "../dist/icon/iconfont.css";
</style>
