$(document).ready(function () {

	$.get('http://127.0.0.1:5001/api/v1/status/', function (data) {
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
});
