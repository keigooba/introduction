// 要素のフェードインアニメーション
$(window).scroll(function(){
	$('.js-fade-trigger').each(function(){
		var position = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).scrollTop();

		if(scroll > position - windowHeight + 50){
			if($(this).hasClass('fade-element-left')) {
				$(this).addClass('fade-common');
			} else if($(this).hasClass('fade-element-up')){
				$(this).addClass('fade-common');
			} else if($(this).hasClass('fade-element-right')) {
				$(this).addClass('fade-common');
			} else if($(this).hasClass('fade-elem')) {
				$(this).find('.fade-element-rotate').addClass('fade-common');
				$(this).find('.fade-element-up').addClass('fade-common');
			}
		}
	});
});

var pagetop = $('#page_top');
// ボタン非表示
pagetop.hide();
// 100px スクロールしたらボタン表示
$(window).scroll(function(){
	if($(this).scrollTop() > 100){
		pagetop.fadeIn();
	} else {
		pagetop. fadeOut();
	}
});
pagetop.click(function() {
	$('body,html').animate({scrollTop: 0 }, 500);
	return false;
});
//一言自己紹介コメント
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
