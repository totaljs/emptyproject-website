$(document).ready(function() {
	$(document).on('click', '.mainmenu-button', function() {
		$(this).parent().find('nav').toggleClass('mainmenu-visible');
	});
});