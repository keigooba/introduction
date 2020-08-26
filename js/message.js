
//自己紹介コメント
$(window).scroll(function(){

	if($(this).scrollTop() > 500 && $(this).scrollTop() < 650) {
		$("#js-message-1").fadeIn();
	} else {
		$("#js-message-1").fadeOut();
	}

	if($(this).scrollTop() > 1100 && $(this).scrollTop() < 1250) {
		$("#js-message-2").fadeIn();
	} else {
		$("#js-message-2").fadeOut();
	}

	if($(this).scrollTop() > 1800 && $(this).scrollTop() < 1950) {
		$("#js-message-3").fadeIn();
	} else {
		$("#js-message-3").fadeOut();
	}
});
