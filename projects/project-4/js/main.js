// Define variables
var search;

// Create event
$('input[type=search]').on('keyup', function() {
	search = this.value.toLowerCase();

	// Loop through the gallery items, and hide those who don't match the search query
	$('.gallery img').each(function() {
		var title = $(this).attr('title').toLowerCase();
		var alt   = $(this).attr('alt').toLowerCase();

		if (title.indexOf(search) > -1 || alt.indexOf(search) > -1) {
			$(this).parent().css('display', '');
		} else {
			$(this).parent().hide();
		}
	});
	
});
