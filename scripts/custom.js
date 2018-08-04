
$(document).ready(function() {
	$('.navTo').on('click', function(event) {
		var element = $(this).data('navto');
		if(element != '') {
			document.querySelector('#'+element).scrollIntoView({ 
			  behavior: 'smooth' 
			});
		}
		event.preventDefault();
	});
});
