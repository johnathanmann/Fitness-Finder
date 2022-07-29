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
 
// Find body part: body Weight
$('#bodyWeight').click(function (){
    var selection = 'body%20weight';
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
            localStorage.setItem('bodyWeight', JSON.stringify(card));
        });
    });
});
 
// Find body part: cable
$('#cable').click(function (){
    var selection = 'cable';
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
            localStorage.setItem('cable', JSON.stringify(card));
        });
    });
});
 
// Find body part: dumbbell
$('#dumbbell').click(function (){
    var selection = 'dumbbell';
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
            localStorage.setItem('dumbbell', JSON.stringify(card));
        });
    });
});
 
// Find body part: EZ Barbell
$('#ezBarbell').click(function (){
    var selection = 'ez%20barbell';
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
            localStorage.setItem('ezBarbell', JSON.stringify(card));
        });
    });
});
 
// Find body part: Kettle bell
$('#kettlebell').click(function (){
    var selection = 'kettlebell';
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
            localStorage.setItem('kettlebell', JSON.stringify(card));
        });
    });
});
 
// Find body part: Leverage Machine
$('#leverageMachine').click(function (){
    var selection = 'leverage%20machine';
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
            localStorage.setItem('leverageMachine', JSON.stringify(card));
        });
    });
});
 
// Find body part: Medicine Ball
$('#medicineBall').click(function (){
    var selection = 'medicine%20ball';
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
            localStorage.setItem('medicineBall', JSON.stringify(card));
        });
    });
});
 
// Find body part:  olympic Barbell
$('#olympicBarbell').click(function (){
    var selection = 'olympic%20barbell';
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
            localStorage.setItem('olympicBarbell', JSON.stringify(card));
        });
    });
});
 
// Find body part: Resistance Band
$('#resistanceBand').click(function (){
    var selection = 'resistance%20band';
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
            localStorage.setItem('resistanceBand', JSON.stringify(card));
        });
    });
});
 
// Find body part: roller
$('#roller').click(function (){
    var selection = 'roller';
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
            localStorage.setItem('roller', JSON.stringify(card));
        });
    });
});
 
// Find body part: rope
$('#rope').click(function (){
    var selection = 'rope';
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
            localStorage.setItem('rope', JSON.stringify(card));
        });
    });
});
 
// Find body part: Sled Machine
$('#sledMachine').click(function (){
    var selection = 'sled%20machine';
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
            localStorage.setItem('sledMachine', JSON.stringify(card));
        });
    });
});
 
// Find body part: Smith machine
$('#smithMachine').click(function (){
    var selection = 'smith%20machine';
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
            localStorage.setItem('smithMachine', JSON.stringify(card));
        });
    });
});
 
// Find body part: Stability Ball
$('#stabilityBall').click(function (){
    var selection = 'stability%20ball';
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
            localStorage.setItem('stabilityBall', JSON.stringify(card));
        });
    });
});
 
// Find body part: tire
$('#tire').click(function (){
    var selection = 'tire';
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
            localStorage.setItem('tire', JSON.stringify(card));
        });
    });
});
 
 
// Find body part: weighted
$('#weighted').click(function (){
    var selection = 'weighted';
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
            localStorage.setItem('weighted', JSON.stringify(card));
        });
    });
});
 
// Find body part: wheel roller
$('#wheelRoller').click(function (){
    var selection = 'wheel%20Roller';
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
            localStorage.setItem('wheelRoller', JSON.stringify(card));
        });
    });
});
