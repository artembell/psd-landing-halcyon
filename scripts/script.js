$(document).ready(function(){
	$('.slider').bxSlider({
		speed: 2000,
		slideMargin: 200,
		controls: false,
		auto: false,
		pause: 5000,
		autoHover: true,
		startSlide: 0
	});	

	$(".close").bind("click", function(){
		$("#shit").attr('src') == "img/close-btn-up.png"
		? $("#shit").attr("src","img/close-btn-down.png")
		: $("#shit").attr("src","img/close-btn-up.png")
	});
});

function hideit(objName){
	if($(objName).css('display') == 'none'){
		$(objName).animate({height: 'show'}, 400);
	}else{
		$(objName).animate({height: 'hide'}, 400);
		
	}
};