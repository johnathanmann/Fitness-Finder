// Find body part: Back
$('#back').click(function (){
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
		// Hide body part selection page
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
		heart.click(function (){
			heart.removeClass('fa-regular');
			heart.addClass('fa-solid')
			var card = $('.bodyCard').html();
			console.log(card);
			localStorage.setItem('back', JSON.stringify(card));
		});
    });
});



// %20 in place of space between words

// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://exercisedb.p.rapidapi.com/exercises/equipment/assisted",
// 	"method": "GET",
// 	"headers": {
// 		"X-RapidAPI-Key": "f7e67ce4d6msh8eac922e7a9ef02p170572jsnd8c44fa6c510",
// 		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });