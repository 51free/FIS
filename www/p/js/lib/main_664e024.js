var baidu={init:function(){this.baiduSetting(),this.baiduShow()},baiduSetting:function(){$("#moreProduct").mouseover(function(){$("#moreList").show()}).mouseout(function(){$("#moreList").hide()})},baiduShow:function(){$("#moreList").mouseover(function(){$("#moreList").show()}).mouseout(function(){$("#moreList").hide()})}};$(function(){baidu.init()});