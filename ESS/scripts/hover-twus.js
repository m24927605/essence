// hover tw change us
$(document).ready(function(){	
	brandPicTurn();
});
function brandPicTurn(){
	$(".link_en").hide();
	$(".link_item").hover(
		function(){
			$(this).children(".link_tw").hide();
			$(this).children(".link_en").show();
		}
		, function(){
			$(this).children(".link_en").hide();
			$(this).children(".link_tw").show();
		}
	);
}