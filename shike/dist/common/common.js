let hrefHead= "localhost:80/"
module.exports = {
	sendAjax: function(data, success) {
		let defConfig={
			methods: 'GET',
			dataType: 'json'
		}
		if(data.option){
			defConfig = Object.assign(defConfig,data.option)
		}
		uni.request({
			url: hrefHead + data.url,
			method: defConfig.method,
			dataType: defConfig.dataType,
			data: data.data,
			header: {
				
			},
			success: (res) => {
				if (res.code == 0) {
					uni.showModal({
						title: '请登录',
						content: '是否要进行登录？',
						success: function (res) {
							uni.navigateTo({
								url: '../page/login/login.vue'
							});
						}
					});
				}else{
					success(res);
				}
			},
			fail: () => {
				uni.showToast({
					title: '网络错误',
					duration: 2000
				});
			}
		});
	}
}
