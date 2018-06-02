
document.addEventListener('DOMContentLoaded', function () {	


	// 首頁大banner (PC)
	$('.homeSlide').slick({
		dots: true,
		autoplay: true,
		arrows: false
		});

	// 首頁大banner (mo)
	$('.homeSlide_mo').slick({
		dots: true,
		autoplay: true,
		arrows: false
		});


	// OOTD
	$('.ootdSlide').slick({
		//dots: true,
		autoplay: true,
		arrows: true
		});


	// ootdx3 2018-0521
	$('.ootdx3').slick({
		dots: true,		
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1
		});


	// pdSingle_建議穿搭 & TADAY VIEW
	$('.js-carouselx5').slick({
		autoplay: false,		
		slidesToShow: 5,
		slidesToScroll: 3,
		dots: false,		
		arrows: true
		});


	// 3 columns carousel
	$('.js-carousel').slick({
		autoplay: false,
		autoplaySpeed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		// centerMode: false,
		arrows: true,
		
		
		responsive: [{
			breakpoint: 2000,
			settings: {
				slidesToShow: 3,
				arrows: true				
			}
		}, {
			breakpoint: 1009,
			settings: {
				slidesToShow: 2,
				arrows: true				
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 1,				
				centerPadding: '17%',
				arrows: true
			}
		}]
	});




// vertical slick
	$('.vertical').slick({
		vertical: true,
		dots: false,
		autoplay: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true
		});

});



// 凍結fixbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("fixbar").style.top = "0";
    } else {
        document.getElementById("fixbar").style.top = "-50px";
    }
}




//en change tw     
$(document).ready(function(){	
	brandPicTurn();
});
function brandPicTurn(){
	$(".link_tw").hide();
	$(".link_item").hover(
		function(){
			$(this).children(".link_en").hide();
			$(this).children(".link_tw").show();
		}
		, function(){
			$(this).children(".link_tw").hide();
			$(this).children(".link_en").show();
		}
	);

	//en change tw (追蹤清單)
	$(".link_tw").hide();
	$(".btn_wish").hover(
		function(){
			$(this).children(".link_en").hide();
			$(this).children(".link_tw").show();
		}
		, function(){
			$(this).children(".link_tw").hide();
			$(this).children(".link_en").show();
		}
	);

	//en change tw (加入購物車)
	$(".link_tw").hide();
	$(".btn_cart").hover(
		function(){
			$(this).children(".link_en").hide();
			$(this).children(".link_tw").show();
		}
		, function(){
			$(this).children(".link_tw").hide();
			$(this).children(".link_en").show();
		}
	);


	//en change tw (貨到通知)
	$(".link_tw").hide();
	$(".btn_pdarrived").hover(
		function(){
			$(this).children(".link_en").hide();
			$(this).children(".link_tw").show();
		}
		, function(){
			$(this).children(".link_tw").hide();
			$(this).children(".link_en").show();
		}
	);

}




//A圖 change B圖 
$(document).ready(function(){   
    brandPicTurn2();
});
function brandPicTurn2(){
    $(".pd_hover").hide();
    $(".pd_change").hover(
        function(){
            $(this).children(".pd_main").hide();
            $(this).children(".pd_hover").show();
        }
        , function(){
            $(this).children(".pd_hover").hide();
            $(this).children(".pd_main").show();
        }
    );
}



//Off-Canvas
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


//Off-Canvas(建議穿搭)
function openNav2() {
    document.getElementById("followNav").style.width = "100%";
}
function closeNav2() {
    document.getElementById("followNav").style.width = "0%";
}




// 凍結TOP~ When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("fixbar").style.top = "0";
    } else {
        document.getElementById("fixbar").style.top = "-53px";
    }
}


//手機選單New 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


//會員登入後點擊半身小人的效果
$(window).load(function () {
	$(".mobile-inner-header-icon").click(function(){
	$(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
	$(".mobile-inner-nav").slideToggle(250);	  	
	});
	$(".mobile-inner-nav a").each(function( index ) {
	$( this ).css({'animation-delay': (index/10)+'s'});
	});
});






document.addEventListener('DOMContentLoaded', function () {	
	// Toggles 第一個開合
	var $toggler = $('.js-toggle-trigger');

	$toggler.each(function ($el) {
		var _this = this;

		$(this).on('click', function (e) {
			e.preventDefault();
			var target = $(_this).data('target');
			var $target = $('#' + target);
			$(_this).toggleClass('active');
			$target.toggleClass('active');
		});
	});

	


	// magnific popup
	$('.js-mfp-inline').each(function (index, ele) {
		$(ele).magnificPopup({
			type: 'inline'
		});
	});

	function footerToggle(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$(this).next('.submenu').toggleClass('active');
	}

	function closeMemberNav() {
		if ($(event.target).parents('.memberNav').length === 0) {
			if ($('.memberNav_toggle').hasClass('active')) {
				$('.memberNav_toggle').click();
			}
		}
	}
});