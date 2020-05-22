jQuery(function() {

	$('#my_button').click(function x() {
		//Change header
		//Check if the header img is currently set to Bears theme
		if ($('#header_img').hasClass('bears')){
			//If header is Bears theme, set to Packers theme
			$('#header_img').slideUp();
			$('#header_img').removeClass('bears');
			$('#header_img').addClass('packers');
			$('#header_img').attr('src', 'images/packersheader.png');
			$('#header_img').slideDown();
		} else {
			//Otherwise, it is on Packers theme and needs to be changed to Bears
			$('#header_img').slideUp();
			$('#header_img').removeClass('packers');
			$('#header_img').addClass('bears');
			$('#header_img').attr('src', 'images/bearsheader.png');
			$('#header_img').slideDown();
		}

		//Change invite
		//Check if the invite is currently set to Bears theme
		if ($('#invite').hasClass('bears')){
			//If invite is Bears theme, set to Packers theme
			$('#invite').removeClass('bears');
			$('#invite').addClass('packers');
		} else {
			//Otherwise, it is on Packers theme and needs to be changed to Bears
			$('#invite').removeClass('packers');
			$('#invite').addClass('bears');
		}

		//Change text box
		//Check if the text box is currently set to Bears theme
		if ($('#h2_1').hasClass('bears')){
			//If text box is Bears theme, set to Packers theme
			$('#h2_1').removeClass('bears');
			$('#h2_1').addClass('packers');
		} else {
			//Otherwise, it is on Packers theme and needs to be changed to Bears
			$('#h2_1').removeClass('packers');
			$('#h2_1').addClass('bears');
		}
		//Check if the textbox is currently set to Bears theme
		if ($('#h2_2').hasClass('bears')){
			//If textbox is Bears theme, set to Packers theme
			$('#h2_2').removeClass('bears');
			$('#h2_2').addClass('packers');
		} else {
			//Otherwise, it is on Packers theme and needs to be changed to Bears
			$('#h2_2').removeClass('packers');
			$('#h2_2').addClass('bears');
		}

		//Check if the background is currently set to Bears theme
		if ($('#my_body').hasClass('bears')){
			//If background is Bears theme, set to Packers theme
			$('#my_body').removeClass('bears');
			$('#my_body').addClass('packers');
		} else {
			//Otherwise, it is on Packers theme and needs to be changed to Bears
			$('#my_body').removeClass('packers');
			$('#my_body').addClass('bears');
		}

		//Check if the button is currently set to Bears theme
		if ($('#my_button').hasClass('bears')){
			//If button is Bears theme, set to Packers theme
			$(this).html("Wait! I'm a Bears fan!").removeClass('bears').addClass('packers');
		} else {
			//Otherwise, it is on Packers theme and needs to be changed to Bears
			$(this).html("Hold up! I'm a Packers fan!").removeClass('packers').addClass('bears');
		}

		//Check if the meme is currently set to Bears theme
		if ($('#meme_img').hasClass('bears')){
			//If background is Bears theme, set to Packers theme
			$('#meme_img').removeClass('bears');
			$('#meme_img').addClass('packers');
			$('#meme_img').attr('src', 'images/packersmeme.png');
		} else {
			//Otherwise, it is on Packers theme and needs to be changed to Bears
			$('#meme_img').removeClass('packers');
			$('#meme_img').addClass('bears');
			$('#meme_img').attr('src', 'images/bearsmeme.png');
		}

	});

});
