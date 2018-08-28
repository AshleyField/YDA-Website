$(function(){

	// Open and close nav on mobile
	$('.bars').on('click',function(e){

		var navData = $('.navigation').data('nav');

		e.stopPropagation();
		
		if(navData == 'close'){
			$('.navigation').addClass('nav-open')
							.data('nav', 'open')

			$('.bars>i').first().removeClass('fas fa-bars')
							.addClass('fas fa-times');

      $('.heading,.sub-heading').addClass('text-hide');
		}

		else {
			$('.navigation').removeClass('nav-open')
							.data('nav', 'close');
			$('.bars>i').removeClass('fas fa-times')
						.addClass('fas fa-bars');

      $('.heading,.sub-heading').removeClass('text-hide');
		}
	});
});