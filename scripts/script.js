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

	//пока будет привязано 2 разных события на 2 разные кнопки
	//позже надо объединить в одно

	$(".close1").bind("click", function(){
		if($("#shit1").attr('src') == "img/close-btn-up.png"){
			$("#shit1").attr("src","img/close-btn-down.png");
			//alert("change on DOWN");
		}else{
			$("#shit1").attr("src","img/close-btn-up.png");
			//alert("change on UP");
		}
	});

	$(".close2").bind("click", function(){
		if($("#shit2").attr('src') == "img/close-btn-up.png"){
			$("#shit2").attr("src","img/close-btn-down.png");
			//alert("change on DOWN");
		}else{
			$("#shit2").attr("src","img/close-btn-up.png");
			//alert("change on UP");
		}
	});
});

function hideit(objName){
	if($(objName).css('display') == 'none'){
		$(objName).animate({height: 'show'}, 400);
	}else{
		$(objName).animate({height: 'hide'}, 400);
		
	}
};

function animateIcon(obj) {
    obj.classList.toggle("change");

    //$('.navbar').animate({width: 'toggle'}, 1000);
    var elems = document.querySelectorAll(".navbar li:not(:last-child)");

    elems.forEach(function(item, index) {
    	//item.animate({width:'toggle'}, 350) 
		item.classList.toggle("hidden");

	});

}