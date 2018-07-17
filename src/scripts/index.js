$(".menu-icon").click(function() {
	var newState = $('.menu').attr("data-state") === "expanded" ? "collapsed" : "expanded";
	$('.menu').attr("data-state", newState);
	$(this).attr("data-state", newState);
});