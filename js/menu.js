// Toggle Burger Menu

$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
		$(".nav-menu").toggleClass("close-nav-bar")
	});
});