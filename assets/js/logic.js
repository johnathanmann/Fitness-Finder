// Find bodypart: Back
var back = $('#back');

back.click(function (){
    var selection = 'back';
// Get body part exercise list
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://exercisedb.p.rapidapi.com/exercises/bodyPart/" +selection,
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "f7e67ce4d6msh8eac922e7a9ef02p170572jsnd8c44fa6c510",
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function (response) {
		// Find random workout 
        var response = response[Math.floor(Math.random()* response.length)];
        console.log(response);
        console.log(response.name);

		// Hide body part seletion page
		$('#selectBodypart').addClass('hidden');
        $('#selectBodypart').removeClass('display');
		$('#displayBodypart').addClass('display');
        $('#displayBodypart').removeClass('hidden');
		// Display workout information
		var bodyCard = $('#bodyCard');
		var workoutGif = $('#workoutGif');
		workoutGif.attr('src', response.gifUrl);
		var workoutName = $('#workoutName');
		workoutName.append(response.name);
		var equipmentBody = $('#equipmentBody');
		equipmentBody.append(response.equipment);
		var equipmentBody = $('#equipmentTarget');
		equipmentTarget.append(response.target);
		var heart = $('#likeBtn');
		var list = $('#list');
		heart.click(function (){
			heart.removeClass('fa-regular');
			heart.addClass('fa-solid')
			var card = $('#bodyCard').html();
			console.log(card);
			localStorage.setItem('card', JSON.stringify(card));
			
		});
    });
});

// Find bodypart: Chest
var chest = $('#chest');

chest.click(function (){
    var selection = 'chest';
// Get body part exercise list
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://exercisedb.p.rapidapi.com/exercises/bodyPart/" +selection,
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "f7e67ce4d6msh8eac922e7a9ef02p170572jsnd8c44fa6c510",
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function (response) {
		// Find random workout 
        var response = response[Math.floor(Math.random()* response.length)];
        console.log(response);
        console.log(response.name);
		// Hide body part seletion page
		$('#selectBodypart').addClass('hidden');
        $('#selectBodypart').removeClass('display');
		$('#displayBodypart').addClass('display');
        $('#displayBodypart').removeClass('hidden');
		// Display workout information
		var workoutGif = $('#workoutGif');
		workoutGif.attr('src', response.gifUrl);
		var workoutName = $('#workoutName');
		workoutName.append(response.name);
		var equipmentBody = $('#equipmentBody');
		equipmentBody.append(response.equipment);
		var equipmentBody = $('#equipmentTarget');
		equipmentTarget.append(response.target);
		var heart = $('#likeBtn');
    });
});




		// // Hide body part seletion page
		// $('#selectBodypart').addClass('hidden');
        // $('#selectBodypart').removeClass('display');
		// $('#displayBodypart').addClass('display');
        // $('#displayBodypart').removeClass('hidden');
		// // Display workout information
		// var displayBodypartCard = $('#displayBodypartCard');
		// var displayBodypartCard1 = $('#displayBodypartCard1');
		// var exerciseInfo = $("<img id='workoutGif' class='img-fluid' src='"+ response.gifUrl+"'><h5><span id='workoutName' >"+response.name+"</span>&nbsp;&nbsp;<i i id='likeBtn' class='fa-regular fa-heart'></i></h5><p class='card-text'>Equipment: <span id='equipmentBody'>"+response.equipment+"</span></p><p class='card-text'>Target: <span id='equipmentTarget'>"+response.target+"</span></p>");

		// displayBodypartCard.append(exerciseInfo);

		// var heart = $('#likeBtn');
		// heart.click(function (){
		// 	heart.removeClass('fa-regular');
		// 	heart.addClass('fa-solid')
		// 	var bodyCard = $('#bodyCard');
		// 	var saved = JSON.stringify(exerciseInfo);
		// 	console.log(saved);