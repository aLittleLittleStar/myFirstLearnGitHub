/* CSS Document */
$(function(){
	'use strict';
	var sidebar = $('#sidebar');//选择侧栏
	var	mask = $('.mask');
	var backTop = $('.backTop');
	var	sidebar_trigger = $('#sidebar_trigger');
	var backTop1;
	var backTop2;

	
	function showSidebar()
	{
		mask.fadeIn();
		sidebar.css('right',0);
	}
	function hideSidebar()
	{
		mask.fadeOut();
		sidebar.css('right',-sidebar.width());
	}
	
	sidebar_trigger.on('click',showSidebar);
	mask.on('click',hideSidebar);
	
	// 返回顶部的函数
	backTop.on('click',function(){
		$('html,body').animate({
			scrollTop:0
		},800);
	});
	$(window).on('scroll',function(){
		if($(window).scrollTop() > $(window).height())
		backTop.fadeIn();
		else
		backTop.fadeOut();
	});
});


