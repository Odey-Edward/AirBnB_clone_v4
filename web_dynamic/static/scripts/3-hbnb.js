$(document).ready(function () {

	$.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
		if (data.status === 'OK') {
			$('div#api_status').addClass('available');
		} else {
			$('div#api_status').removeClass('available');
		}
	});

	let selectedAmenities = {};

	$('input[type="checkbox"]').change(function () {
		let amenityId = $(this).data('id');
		let amenityName = $(this).data('name');

		if ($(this).prop('checked')) {
			selectedAmenities[amenityId] = amenityName;
		} else {
			delete selectedAmenities[amenityId];
		}

		let amenitiesList = Object.values(selectedAmenities).join(', ');
		$('.amenities h4').text(amenitiesList);
	});

	$('#search_btn').click(function () {
		$.ajax({
			type: "POST",
			url: "http://127.0.0.1:5003//api/v1/places_search",
			contentType: "application/json",
			data: JSON.stringify({}),
			success: function(response) {
				console.log(response);
			},
			error: function(error) {
				console.log(error);
			}
		});
	});
});
