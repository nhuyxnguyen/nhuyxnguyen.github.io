$(document).ready(function () {
	$('.grid').hover(function () {
		$(this).find('.caption').fadeIn(250);
	},
	function() {
			$(this).find('.caption').fadeOut(250);
	}
	);
});