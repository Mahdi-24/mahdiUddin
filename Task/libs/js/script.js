	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/subdivision.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#selLatitude').val(),
				lng: $('#selLongitude').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#txtCountryCode').html(result['data'][0]['countryCode']);
					$('#txtCountryName').html(result['data'][0]['countryName']);
					$('#txtDistance').html(result['data'][0]['distance']);
					
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				
			}
		}); 
	
	});