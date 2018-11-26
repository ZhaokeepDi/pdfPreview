<template>
	<view class="content column">
		<view class="center">
			<text>兰花广场</text>
			<view class="serch">
				<!-- <image src=""></image> -->
				<input type="text" placeholder="搜索食物">
			</view>
		</view>
		<view style="background:red">
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<!-- <swiper-item v-for="(item,key) in pageData.flashlist" :key="key">
					<view class="swiper-item">
						<image :src="item.imgurl" style="width:100%" mode="widthFix"></image>
					</view>
				</swiper-item> -->
			</swiper>
		</view>
		<view class="food-type" style="background:#8F8F94">
			<view v-for="item in indexData.typeList">
				<!-- <image :src="item.icon"></image> -->
				<txst>{{item.name}}</txst>
			</view>
		</view>
		<view class="column">
			<view class="center">
				<text>推荐商家</text>
			</view>
			<view class="space">
				<text @click="tap(1)">综合排序</text>
				<text @click="tap(2)">人气最高</text>
				<text @click="tap(3)">距离最近</text>
			</view>
			<view class="center">
				<view v-show="groop==1">
					综合排序
				</view>
				<view v-show="groop==2">
					人气最高
				</view>
				<view v-show="groop==3">
					距离最近
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				groop:1,
				indexData:{
					opation: ["地点一", "地点二"],
					typeList:[
								{name:"",icon:""},
								{name:"",icon:""},
								{name:"",icon:""},
								{name:"",icon:""},
								{name:"",icon:""},
								{name:"",icon:""},
								{name:"",icon:""},
								{name:"",icon:""}
							]
						}
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
	.swiper{
		height:100px;
	}
	.serch {
		border: 1px solid #E3E3E3;
		border-radius: 30px;
		justify-content: flex-start;
	}
	.serch>image {
		width: 20px;
		height: 20px
	}
	.content {
		flex: 1;	
	}
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	.food-type{
		flex-wrap:wrap;
	}
	.food-type>view{
		width:25%;
		height:50px;
		
	}
	.food-type>view>image{
		width:25px;
		height:25px;
	}
</style>
