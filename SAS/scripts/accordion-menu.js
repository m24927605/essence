$(document).ready(function() {
	$('.inactive').click(function(){
		if($(this).siblings('ul').css('display')=='none'){
			$(this).parent('li').siblings('li').removeClass('inactives');
			$(this).addClass('inactives');
			$(this).siblings('ul').slideDown(100).children('li');
			if($(this).parents('li').siblings('li').children('ul').css('display')=='block'){
				$(this).parents('li').siblings('li').children('ul').parent('li').children('a').removeClass('inactives');
				$(this).parents('li').siblings('li').children('ul').slideUp(100);
			}
		}else{
			//控制自身變成+號
			$(this).removeClass('inactives');
			//控制自身功能表下子功能表隱藏
			$(this).siblings('ul').slideUp(100);
			//控制自身子功能表變成+號
			$(this).siblings('ul').children('li').children('ul').parent('li').children('a').addClass('inactives');
			//控制自身功能表下子功能表隱藏
			$(this).siblings('ul').children('li').children('ul').slideUp(100);

			//控制同級功能表只保持一個是展開的（-號顯示）
			$(this).siblings('ul').children('li').children('a').removeClass('inactives');
		}
	})
});