// Find body part: Back
$("#back").click(function () {
  var selection = "back";
  // Get body part exercise list
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/" + selection,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f7e67ce4d6msh8eac922e7a9ef02p170572jsnd8c44fa6c510",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  $.ajax(settings).done(function (response) {
    // Find random workout
    var response = response[Math.floor(Math.random() * response.length)];
    console.log(response);
    console.log(response.name);
    // Hide body part selection page
    $("#selectBodypart").addClass("hidden");
    $("#selectBodypart").removeClass("display");
    $("#displayBodypart").addClass("display");
    $("#displayBodypart").removeClass("hidden");
    // Display workout information
    var workoutGif = $("#workoutGif");
    workoutGif.attr("src", response.gifUrl);
    var workoutName = $("#workoutName");
    workoutName.append(response.name);
    var equipmentBody = $("#equipmentBody");
    equipmentBody.append(response.equipment);
    var equipmentBody = $("#equipmentTarget");
    equipmentTarget.append(response.target);
    var heart = $("#likeBtn");
    heart.click(function () {
      heart.removeClass("fa-regular");
      heart.addClass("fa-solid");
      var card = $(".bodyCard").html();
      console.log(card);
      localStorage.setItem("back", JSON.stringify(card));
    });
  });
});

// Find body part: Cardio
$("#cardio").click(function () {
  var selection = "cardio";
  // Get body part exercise list
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/" + selection,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f7e67ce4d6msh8eac922e7a9ef02p170572jsnd8c44fa6c510",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  $.ajax(settings).done(function (response) {
    // Find random workout
    var response = response[Math.floor(Math.random() * response.length)];
    console.log(response);
    console.log(response.name);
    // Hide body part selection page
    $("#selectBodypart").addClass("hidden");
    $("#selectBodypart").removeClass("display");
    $("#displayBodypart").addClass("display");
    $("#displayBodypart").removeClass("hidden");
    // Display workout information
    var workoutGif = $("#workoutGif");
    workoutGif.attr("src", response.gifUrl);
    var workoutName = $("#workoutName");
    workoutName.append(response.name);
    var equipmentBody = $("#equipmentBody");
    equipmentBody.append(response.equipment);
    var equipmentBody = $("#equipmentTarget");
    equipmentTarget.append(response.target);
    var heart = $("#likeBtn");
    heart.click(function () {
      heart.removeClass("fa-regular");
      heart.addClass("fa-solid");
      var card = $(".bodyCard").html();
      console.log(card);
      localStorage.setItem("cardio", JSON.stringify(card));
    });
  });
});

// Find body part: chest
$("#chest").click(function () {
  var selection = "chest";
  // Get body part exercise list
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/" + selection,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f7e67ce4d6msh8eac922e7a9ef02p170572jsnd8c44fa6c510",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  $.ajax(settings).done(function (response) {
    // Find random workout
    var response = response[Math.floor(Math.random() * response.length)];
    console.log(response);
    console.log(response.name);
    // Hide body part selection page
    $("#selectBodypart").addClass("hidden");
    $("#selectBodypart").removeClass("display");
    $("#displayBodypart").addClass("display");
    $("#displayBodypart").removeClass("hidden");
    // Display workout information
    var workoutGif = $("#workoutGif");
    workoutGif.attr("src", response.gifUrl);
    var workoutName = $("#workoutName");
    workoutName.append(response.name);
    var equipmentBody = $("#equipmentBody");
    equipmentBody.append(response.equipment);
    var equipmentBody = $("#equipmentTarget");
    equipmentTarget.append(response.target);
    var heart = $("#likeBtn");
    heart.click(function () {
      heart.removeClass("fa-regular");
      heart.addClass("fa-solid");
      var card = $(".bodyCard").html();
      console.log(card);
      localStorage.setItem("chest", JSON.stringify(card));
    });
  });
});

// Find body part: lower arms
$("#lowerArms").click(function () {
  var selection = "lower%20arms";
  // Get body part exercise list
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/" + selection,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f7e67ce4d6msh8eac922e7a9ef02p170572jsnd8c44fa6c510",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  $.ajax(settings).done(function (response) {
    // Find random workout
    var response = response[Math.floor(Math.random() * response.length)];
    console.log(response);
    console.log(response.name);
    // Hide body part selection page
    $("#selectBodypart").addClass("hidden");
    $("#selectBodypart").removeClass("display");
    $("#displayBodypart").addClass("display");
    $("#displayBodypart").removeClass("hidden");
    // Display workout information
    var workoutGif = $("#workoutGif");
    workoutGif.attr("src", response.gifUrl);
    var workoutName = $("#workoutName");
    workoutName.append(response.name);
    var equipmentBody = $("#equipmentBody");
    equipmentBody.append(response.equipment);
    var equipmentBody = $("#equipmentTarget");
    equipmentTarget.append(response.target);
    var heart = $("#likeBtn");
    heart.click(function () {
      heart.removeClass("fa-regular");
      heart.addClass("fa-solid");
      var card = $(".bodyCard").html();
      console.log(card);
      localStorage.setItem("lowerArms", JSON.stringify(card));
    });
  });
});

// Find body part: upper arms
$("#upperArms").click(function () {
  var selection = "upper%20arms";
  // Get body part exercise list
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/" + selection,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f7e67ce4d6msh8eac922e7a9ef02p170572jsnd8c44fa6c510",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  $.ajax(settings).done(function (response) {
    // Find random workout
    var response = response[Math.floor(Math.random() * response.length)];
    console.log(response);
    console.log(response.name);
    // Hide body part selection page
    $("#selectBodypart").addClass("hidden");
    $("#selectBodypart").removeClass("display");
    $("#displayBodypart").addClass("display");
    $("#displayBodypart").removeClass("hidden");
    // Display workout information
    var workoutGif = $("#workoutGif");
    workoutGif.attr("src", response.gifUrl);
    var workoutName = $("#workoutName");
    workoutName.append(response.name);
    var equipmentBody = $("#equipmentBody");
    equipmentBody.append(response.equipment);
    var equipmentBody = $("#equipmentTarget");
    equipmentTarget.append(response.target);
    var heart = $("#likeBtn");
    heart.click(function () {
      heart.removeClass("fa-regular");
      heart.addClass("fa-solid");
      var card = $(".bodyCard").html();
      console.log(card);
      localStorage.setItem("upperArms", JSON.stringify(card));
    });
  });
});

// Find body part: lower legs
$("#lowerLegs").click(function () {
  var selection = "lower%20legs";
  // Get body part exercise list
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/" + selection,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f7e67ce4d6msh8eac922e7a9ef02p170572jsnd8c44fa6c510",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  $.ajax(settings).done(function (response) {
    // Find random workout
    var response = response[Math.floor(Math.random() * response.length)];
    console.log(response);
    console.log(response.name);
    // Hide body part selection page
    $("#selectBodypart").addClass("hidden");
    $("#selectBodypart").removeClass("display");
    $("#displayBodypart").addClass("display");
    $("#displayBodypart").removeClass("hidden");
    // Display workout information
    var workoutGif = $("#workoutGif");
    workoutGif.attr("src", response.gifUrl);
    var workoutName = $("#workoutName");
    workoutName.append(response.name);
    var equipmentBody = $("#equipmentBody");
    equipmentBody.append(response.equipment);
    var equipmentBody = $("#equipmentTarget");
    equipmentTarget.append(response.target);
    var heart = $("#likeBtn");
    heart.click(function () {
      heart.removeClass("fa-regular");
      heart.addClass("fa-solid");
      var card = $(".bodyCard").html();
      console.log(card);
      localStorage.setItem("lowerLegs", JSON.stringify(card));
    });
  });
});

// Find body part: upper legs
$("#upperLegs").click(function () {
  var selection = "upper%20legs";
  // Get body part exercise list
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/" + selection,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f7e67ce4d6msh8eac922e7a9ef02p170572jsnd8c44fa6c510",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  $.ajax(settings).done(function (response) {
    // Find random workout
    var response = response[Math.floor(Math.random() * response.length)];
    console.log(response);
    console.log(response.name);
    // Hide body part selection page
    $("#selectBodypart").addClass("hidden");
    $("#selectBodypart").removeClass("display");
    $("#displayBodypart").addClass("display");
    $("#displayBodypart").removeClass("hidden");
    // Display workout information
    var workoutGif = $("#workoutGif");
    workoutGif.attr("src", response.gifUrl);
    var workoutName = $("#workoutName");
    workoutName.append(response.name);
    var equipmentBody = $("#equipmentBody");
    equipmentBody.append(response.equipment);
    var equipmentBody = $("#equipmentTarget");
    equipmentTarget.append(response.target);
    var heart = $("#likeBtn");
    heart.click(function () {
      heart.removeClass("fa-regular");
      heart.addClass("fa-solid");
      var card = $(".bodyCard").html();
      console.log(card);
      localStorage.setItem("upperLegs", JSON.stringify(card));
    });
  });
});

// Find body part: neck
$("#neck").click(function () {
  var selection = "neck";
  // Get body part exercise list
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/" + selection,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f7e67ce4d6msh8eac922e7a9ef02p170572jsnd8c44fa6c510",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  $.ajax(settings).done(function (response) {
    // Find random workout
    var response = response[Math.floor(Math.random() * response.length)];
    console.log(response);
    console.log(response.name);
    // Hide body part selection page
    $("#selectBodypart").addClass("hidden");
    $("#selectBodypart").removeClass("display");
    $("#displayBodypart").addClass("display");
    $("#displayBodypart").removeClass("hidden");
    // Display workout information
    var workoutGif = $("#workoutGif");
    workoutGif.attr("src", response.gifUrl);
    var workoutName = $("#workoutName");
    workoutName.append(response.name);
    var equipmentBody = $("#equipmentBody");
    equipmentBody.append(response.equipment);
    var equipmentBody = $("#equipmentTarget");
    equipmentTarget.append(response.target);
    var heart = $("#likeBtn");
    heart.click(function () {
      heart.removeClass("fa-regular");
      heart.addClass("fa-solid");
      var card = $(".bodyCard").html();
      console.log(card);
      localStorage.setItem("neck", JSON.stringify(card));
    });
  });
});

// Find body part: shoulders
$("#shoulders").click(function () {
  var selection = "shoulders";
  // Get body part exercise list
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/" + selection,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f7e67ce4d6msh8eac922e7a9ef02p170572jsnd8c44fa6c510",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  $.ajax(settings).done(function (response) {
    // Find random workout
    var response = response[Math.floor(Math.random() * response.length)];
    console.log(response);
    console.log(response.name);
    // Hide body part selection page
    $("#selectBodypart").addClass("hidden");
    $("#selectBodypart").removeClass("display");
    $("#displayBodypart").addClass("display");
    $("#displayBodypart").removeClass("hidden");
    // Display workout information
    var workoutGif = $("#workoutGif");
    workoutGif.attr("src", response.gifUrl);
    var workoutName = $("#workoutName");
    workoutName.append(response.name);
    var equipmentBody = $("#equipmentBody");
    equipmentBody.append(response.equipment);
    var equipmentBody = $("#equipmentTarget");
    equipmentTarget.append(response.target);
    var heart = $("#likeBtn");
    heart.click(function () {
      heart.removeClass("fa-regular");
      heart.addClass("fa-solid");
      var card = $(".bodyCard").html();
      console.log(card);
      localStorage.setItem("shoulders", JSON.stringify(card));
    });
  });
});

// Find body part: waist
$("#waist").click(function () {
  var selection = "waist";
  // Get body part exercise list
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/" + selection,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f7e67ce4d6msh8eac922e7a9ef02p170572jsnd8c44fa6c510",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  $.ajax(settings).done(function (response) {
    // Find random workout
    var response = response[Math.floor(Math.random() * response.length)];
    console.log(response);
    console.log(response.name);
    // Hide body part selection page
    $("#selectBodypart").addClass("hidden");
    $("#selectBodypart").removeClass("display");
    $("#displayBodypart").addClass("display");
    $("#displayBodypart").removeClass("hidden");
    // Display workout information
    var workoutGif = $("#workoutGif");
    workoutGif.attr("src", response.gifUrl);
    var workoutName = $("#workoutName");
    workoutName.append(response.name);
    var equipmentBody = $("#equipmentBody");
    equipmentBody.append(response.equipment);
    var equipmentBody = $("#equipmentTarget");
    equipmentTarget.append(response.target);
    var heart = $("#likeBtn");
    heart.click(function () {
      heart.removeClass("fa-regular");
      heart.addClass("fa-solid");
      var card = $(".bodyCard").html();
      console.log(card);
      localStorage.setItem("waist", JSON.stringify(card));
    });
  });
});

// %20 in place of space between words
