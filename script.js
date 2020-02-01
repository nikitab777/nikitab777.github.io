$(document).click( function(event){
	if( $(event.target).closest(".list").length ) 
	return;
	$(".list").slideUp("slow");
	event.stopPropagation();
});

$('.hide').click(function() {
	$(this).siblings(".list").slideToggle("slow");
	return false;
});