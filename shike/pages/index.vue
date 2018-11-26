<template>
	<scroll-view class="content column">
		<navigator url="store">sssssssss</navigator>
		<!-- 头部搜索以及定位 -->
		<view class="space itemCenter top bbx gap white" @click="hhh">
			<view class="picker itemCenter">
				<image src="../../static/index/dinwei.jpg"></image>
				<picker mode="selector" :range="indexData.position" @change="textChange">
					<view class="block ellipsis transition" :style="serchBoxState.place">
						<text>
							{{textValue}}
						</text>
					</view>
				</picker>
				<view class="trigo reght"></view>
			</view>
			<view class="itemCenter bbx serch transition" :style="serchBoxState.serch" @click="spread">
				<image src="../../static/index/sousuo.jpg" style="width:16px;height:16px"></image>
				<input class="h-all" type="text" @blur="retract" @confirm="serch" placeholder="烧烤串串" v-model="indexData.serchData"
				 :focus="focus" >
			</view>
		</view>
		<!-- 轮播 -->
		<view class="swiper" style="background:red white">
			<swiper class="all" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item class="all" v-for="(item,index) in indexData.swiperImg" :key="index">
					<view class="swiper-item all">
						<navigator :url="item.url" class="all">
							<image class="all" :src="item.img" mode="widthFix"></image>
						</navigator>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 导航 -->
		<view class="food-type gap white">
			<view class="column center itemCenter" v-for="(item,index) in indexData.typeList"  :key="index">
				<view class="food-icon">
					<navigator :url="item.url">
						<image class="all" :src="item.icon"></image>
					</navigator>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
		<!-- 美食展示 -->
		<view class="column white bbx netwrok-cate gap">
			<view>
				<text>&nbsp网红美食</text>
			</view>
			<view class="small space row-centenr">
				<view class="bbx">
					<navigator class="all" :url="indexData.netwrokCate[0].url">
						<image class="all radius5" :src="indexData.netwrokCate[0].img"></image>
					</navigator>
				</view>
				<view class="bbx">
					<navigator class="all" :url="indexData.netwrokCate[1].url">
						<image class="all radius5" :src="indexData.netwrokCate[1].img"></image>
					</navigator>
				</view>
				<view class="bbx">
					<navigator class="all" :url="indexData.netwrokCate[2].url">
						<image class="all radius5" :src="indexData.netwrokCate[2].img"></image>
					</navigator>
				</view>
			</view>
			<view class="big bbx">
						<navigator class="all" :url="indexData.netwrokCate[3].url">
							<image class="all radius5" :src="indexData.netwrokCate[3].img"></image>
						</navigator>
			</view>
		</view>
		<!-- 美食排行 -->
		<view class="footer bbx whit column">
			<view class="footer-top space row-centenr">
				<view class="itemCenter radius5 row-centenr">排行</view>
				<view class="itemCenter radius5 row-centenr">精品</view>
			</view>
			<view class="Three-meals">
				<text>
					一日三餐
				</text>
			</view>
			<view class="column footer-recommend" v-for="(item,index) in indexData.recommend" :key="index">
				<page-display :item=item ></page-display>
			</view>
		</view>
	</scroll-view>
</template>
<script>
	import {
		sendAjax,hrefHead
	} from "../dist/common/common.js";
	export default {
		//登录
		created: function() {
			console.log(this)
			//获取供应商
			uni.getProvider({
				service: 'oauth',
				success: function (res) {
					if (~res.provider.indexOf('weixin')) {
						uni.login({
							provider: 'weixin',
							success: function (loginRes) {
								console.log(JSON.stringify(loginRes));						}
						});
					}
				}
			});
			//获取动态id
			uni.login({
				provider: 'weixin',
				success: function (loginRes) {
					console.log(loginRes.authResult);
				}
			});
			// 获取用户信息
			uni.getUserInfo({
				provider: 'weixin',
				lang:'zh_CN',
				success: function (infoRes) {
					console.log(infoRes);
				}
			});
			
		//获取位置
		uni.getLocation({
			type: 'wgs84',
			success: function (res) {
				console.log('当前位置的经度：' + res.longitude);
				console.log('当前位置的纬度：' + res.latitude);
			}
		});
		},
		data() {
			return {
				focus: false,
				groop: {
					first: [1, 0, 0],
					show: 1
				},
				textValue: "兰花广场HHHHHH",
				serchBoxState: {
					state: false,
					place: "",
					serch: "width:41px",
					titleColor: ["color:black", "", ""]
				},
				indexData: {
					swiperUrl:[null],
					serchData: "",
					position: ["地点一", "地点二"],
					swiperImg: [
							{img:"../../static/true.jpg",url:null}, 
							{img:"../../static/true.jpg",url:null},
						],
					typeList: [{
							name: "美食商城",
							icon: "../../static/foodType/mall.jpg",
							url:null
						},
						{
							name: "线下门店",
							icon: "../../static/foodType/store.jpg",
							url:null
						},
						{
							name: "热门美食",
							icon: "../../static/foodType/hot.jpg",
							url:null
						},
						{
							name: "全部分类",
							icon: "../../static/foodType/classify.jpg",
							url:null
						}
					],
					recommend:[
						{img:"../../static/true.jpg",url:null,praise:77732,icon:"../../static/foodType/classify.jpg"},
						{img:"../../static/true.jpg",url:null,praise:23143,icon:"../../static/foodType/classify.jpg"},
					],
					netwrokCate:[
						{img:"../../static/true.jpg",url:null},
						{img:"../../static/true.jpg",url:null},
						{img:"../../static/true.jpg",url:null},
						{img:"../../static/true.jpg",url:null}
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
