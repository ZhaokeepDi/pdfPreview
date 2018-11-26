<template>
	<scroll-view class="content column" style="height:500px">
		<view class="map_container">
			<map class="map" id="map" :longitude="longitude" :latitude="latitude" scale="14" show-location="true" :markers="markers"
			 bindmarkertap="makertap"></map>
		</view>
		<view class="map_text">
			<text class="h1">{{textData.name}}</text>
			<text>{{textData.desc}}</text>
		</view>
	</scroll-view>
</template>
<script>
	import amapFile from "../libs/amap-wx.js";
	var markersData = [];
	export default {
		data: {
			markers: [],
			latitude: '',
			longitude: '',
			textData: {}
		},
		methods:{
			makertap(e){
				var id = e.markerId;
				var that = this;
				that.showMarkerInfo(markersData, id);
				that.changeMarkerColor(markersData, id);
			},
			showMarkerInfo(data, i) {
				var that = this;
				that.textData= {
						name: data[i].name,
						desc: data[i].address
					};
			},
			changeMarkerColor(data, i) {
						var that = this;
						var markers = [];
						for (var j = 0; j < data.length; j++) {
							if (j == i) {
								data[j].iconPath = "选中 marker 图标的相对路径"; //如：..­/..­/img/marker_checked.png
							} else {
								data[j].iconPath = "未选中 marker 图标的相对路径"; //如：..­/..­/img/marker.png
							}
							markers.push(data[j]);
						}
						that.markers= markers;
					}
			
		},
		onLoad: function() {
			console.log(amapFile)
			var that = this;
			var myAmapFun = new amapFile.AMapWX({
				key: '6e76217d6f10593ec4c2a86df7dc4c90'
			});
			myAmapFun.getPoiAround({
				iconPathSelected: '选中 marker 图标的相对路径', //如：..­/..­/img/marker_checked.png
				iconPath: '未选中 marker 图标的相对路径', //如：..­/..­/img/marker.png
				success: function(data) {
					markersData = data.markers;
					that.markers = markersData;
					that.longitude = markersData[0].longitude;
					that.longitude = markersData[0].longitude;
					that.showMarkerInfo(markersData, 0);
				},
				fail: function(info) {
					wx.showModal({
						title: info.errMsg
					})
				}
			})
		},
	}
</script>

<style scoped="">
	scroll-view{
		height:100px;
		background:red
	}
	.content.column{
		height:100%;
		justify-content: space-around;
		flex:1
	}
	.map_container {
		position: absolute;
		top: 0;
		bottom: 80px;
		left: 0;
		right: 0;
	}

	.map {
		width: 100%;
		height: 100%;
	}

	.map_text {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0px;
		height: 80px;
		background: #fff;
		padding: 0 15px;
	}

	text {
		margin: 5px 0;
		display: block;
		font-size: 12px;
	}

	.h1 {
		margin: 15px 0;
		font-size: 15px;
	}
</style>
