	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/nearbyPlaceName.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#selLatitude').val(),
				lng: $('#selLongitude').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					
					$('#txtCode').html(result['data'][0]['countryCode']);
                    $('#txtCountry').html(result['data'][0]['countryName']);
                    $('#txtName').html(result['data'][0]['name']);
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				
			}
		}); 
	
	});


	$('#btnRun2').click(function() {

		$.ajax({
			url: "libs/php/subdivision.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#selLatitude2').val(),
				lng: $('#selLongitude2').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					
					$('#txtCode2').html(result['data'][0]['code']);
                    $('#txtLevel').html(result['data'][0]['level']);
                    $('#txtType').html(result['data'][0]['type']);
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				
			}
		}); 
	
	});

    $('#btnRun3').click(function() {

		$.ajax({
			url: "libs/php/findWikipedia.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#selLatitude3').val(),
				lng: $('#selLongitude3').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					
                    $('#txtSummary').html(result['data'][0]['summary']);
                    $('#txtFeature').html(result['data'][0]['feature']);
                    $('#txtTitle').html(result['data'][0]['title']);
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				
			}
		}); 
	
	});