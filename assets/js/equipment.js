// Find body part: Band
$('#band').click(function (){
    var selection = 'band';
// Get body part exercise list
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://exercisedb.p.rapidapi.com/exercises/equipment/"+ selection,
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "f7e67ce4d6msh8eac922e7a9ef02p170572jsnd8c44fa6c510",
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
	}
};
$.ajax(settings).done(function (response) {
    	console.log(response);
});
    $.ajax(settings).done(function (response) {
		// Find random workout 
        var response = response[Math.floor(Math.random()* response.length)];
        console.log(response);
        console.log(response.name);
		// Hide body part selection page
		$('#selectEquipment').addClass('hidden');
        $('#selectEquipment').removeClass('display');
		$('#displayEquipment').addClass('display');
        $('#displayEquipment').removeClass('hidden');
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
		heart.click(function (){
			heart.removeClass('fa-regular');
			heart.addClass('fa-solid')
			var card = $('.bodyCard').html();
			console.log(card);
			localStorage.setItem('band', JSON.stringify(card));
		});
    });
});

// Find body part: Barbell
$('#barbell').click(function (){
    var selection = 'barbell';
// Get body part exercise list
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://exercisedb.p.rapidapi.com/exercises/equipment/"+ selection,
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "f7e67ce4d6msh8eac922e7a9ef02p170572jsnd8c44fa6c510",
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
	}
};
$.ajax(settings).done(function (response) {
    	console.log(response);
});
    $.ajax(settings).done(function (response) {
		// Find random workout 
        var response = response[Math.floor(Math.random()* response.length)];
        console.log(response);
        console.log(response.name);
		// Hide body part selection page
		$('#selectEquipment').addClass('hidden');
        $('#selectEquipment').removeClass('display');
		$('#displayEquipment').addClass('display');
        $('#displayEquipment').removeClass('hidden');
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
		heart.click(function (){
			heart.removeClass('fa-regular');
			heart.addClass('fa-solid')
			var card = $('.bodyCard').html();
			console.log(card);
			localStorage.setItem('barbell', JSON.stringify(card));
		});
    });
});