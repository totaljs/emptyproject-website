// https://wiki.totaljs.com/jcomponent/11-components/
MAIN.defaults.fallbackcache = '1 day';

$(document).ready(function() {
	$(document).on('click', '.mainmenu-button', function() {
		$(this).parent().find('nav').toggleClass('mainmenu-visible');
	});
});