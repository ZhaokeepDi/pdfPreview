<template>
	<view class="column wrap w-all">
		<view class="shop bbx wrap w-all" v-for="item in list">
			<view>
				<image :src="item.img" class="img"></image>
			</view>
			<view  class="space detail-box bbx">
				<view class="column detal">
					<text class="shop-title">
						{{item.title}}
					</text>
					<text>
						{{item.position}}
					</text>
					<view></view>
					<text>
						{{item.starts}}
					</text>
					<view></view>
					<text>
						{{item.watch}}
					</text>
				</view>
				<view class="column-centenr itemCenter bbx path">
					<text>
						{{item.distance}}
					</text>
					<image src="../../static/index/path.jpg" mode="" class="path-icon"></image>
					<text>到这儿去</text>
				</view>
			</view>
			
		</view>
	</view>
</template>
<script>
	import {sendAjax} from "../../dist/common/common.js"
	export default {
		props:["sort-type"],
		onload:function(){
			sendAjax("url",function(red){
				this.list=this.list.push(res)
			})
		},
		data:function() {
			return {	
				list:[
					{img:"../../static/true.jpg",title:"烤唐老鸭",position:"花果园大街",starts:"5",watch:"999",distance:"2.5km"},
					{img:"../../static/true.jpg",title:"烤唐老鸭",position:"花果园大街",starts:"5",watch:"999",distance:"2.5km"},
					{img:"../../static/true.jpg",title:"烤唐老鸭",position:"花果园大街",starts:"5",watch:"999",distance:"2.5km"},
					{img:"../../static/true.jpg",title:"烤唐老鸭",position:"花果园大街",starts:"5",watch:"999",distance:"2.5km"},
				]
			};
		},
		created:function(){
			console.log(sendAjax)
		},
		methods:{
			
		}
	}
</script>

<style scoped="">
	.detail-box{
		flex:1;
		font-size: 9px;
	}
	.shop-title{
		padding:5px 0;
		font-size:12px;
		
	}
	@import "../../common/common.css";
	.img{
		width:93px;
		height:93px;
	}
	.path{
		padding-bottom:20px
	}
	.shop{
		height:119px;
		padding:12.5px 0;
		border-bottom:1px solid #F0F0F0;
	}
	.detal{
		padding-left:10px;  
	}
	.shop>image{
		height:96px;
		width:96px
	}
	.path-icon{
		width:14px;
		height:14px;
	}
</style>
