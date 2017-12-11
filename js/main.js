// 自动加载
;$(function(){
	// 使用严格模式
	'use strict';

	var sidebar = $('#sidebar');//选择侧栏
	var mask = $('.mask');//选择mask
	var sidebar_trigger = $("#sidebar_trigger");//选择返回菜单
	var backButton = $('.back-to-top');//选择侧栏触发器
	var header = $('.header');
	var icon_remove = $('.icon-remove');

// 当鼠标滚动时屏幕高度改变让导航栏显示
window.onscroll = function(){
    // 获取鼠标滚动的当前屏幕高度
    var top = document.documentElement.scrollTop;
    if( top > 80){
    	header.addClass('header_status_back');
    }else{
    	header.removeClass('header_status_back');
    }
}
// 侧栏菜单功能
// 
	// 点击侧边栏让屏幕变暗
	function showSideBar(){//显示侧栏
		// mask是遮罩层透明度小
		mask.fadeIn();//显示mask
		// 传对象
		// sidebar.animate({'right':0});
		// 用css方法传对象
		// sidebar.css('right',0);第一种方法
		// 第二种方法：
		sidebar.css('transform', 'translate(0,0)');
	}
	
	function hideSideBar(){// 隐藏侧栏
		mask.fadeOut();
		// 第一种方法：sidebar有多宽就缩多少
		// sidebar.css('right',-sidebar.width());
		// 第二种方法有一点麻烦
		sidebar.css('transform','translate('+sidebar.width()+'px'+', 0)');
		
	}
	// 点击了调用这一个函数
	sidebar_trigger.on('click',showSideBar);
	mask.on('click',hideSideBar);
	icon_remove.on('click',hideSideBar);


	// 返回顶部按钮动画
	backButton.on('click',function(){

		$('html, body').animate({
			scrollTop: 0,
		},800)
	});
	// 监听window的scroll事件
	$(window).on('scroll', function(){
		// 如果滚动的高度大于屏幕当前的高度就让返回顶部按钮显示否则隐藏
		if($(window).scrollTop() > $(window).height()){
			// 显示返回按钮
			backButton.fadeIn();
		}else{
			// 隐藏返回按钮
			backButton.fadeOut();
		}
	});
	// 让程序自己触发滚动事件[会有刚开始显现出来然后消失的bug]
	// 这一个可以不要但是要在css样式中把button先display:none隐藏起来
	// $(window).trigger("scroll");

})

