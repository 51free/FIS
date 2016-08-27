// 百度首页JS

var baidu = {
	init: function(){
		this.baiduSetting();
		this.baiduShow();
	},

	baiduSetting:function(){
			$('#moreProduct').mouseover(function(){
				$("#moreList").show();
			}).mouseout(function(){
				$("#moreList").hide();
			})
	},
// 鼠标移开“更多产品”后 照样能够显示 侧边栏
	baiduShow:function(){
		$('#moreList').mouseover(function(){
			$('#moreList').show();
		}).mouseout(function(){
			$('#moreList').hide();
		})
	}
}

// 加载执行

$(function(){
	baidu.init();
})