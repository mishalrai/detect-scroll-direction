this.detectScrollDirection = function(){  
	var iScrollPos = 0,
		$body = $('body'),
		className = 'scrolling-up',
		isScrollingDown = false;

	$(window).scroll(function () {
		var iCurScrollPos = $(this).scrollTop();
		if (iCurScrollPos > iScrollPos && !isScrollingDown) {
				$body.removeClass(className);
				isScrollingDown = true;
		} else if (iCurScrollPos < iScrollPos && isScrollingDown ) {
				$body.addClass(className);
				isScrollingDown = false;
		}
		iScrollPos = iCurScrollPos;
	});
};