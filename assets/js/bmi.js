// Displays saved data on load
document.addEventListener("DOMContentLoaded", function() {
    var saved = localStorage.getItem('list');
    if (saved) {
      list.innerHTML = saved;
  };
});

var list = document.getElementById('pastBmi');
var calculate = $('#calculate');

// Displays weather on searchBtn click and adds city's to search history
calculate.click(function () {
    // Grab user input
    var userWeight = document.querySelector("#userWeight").value;
    localStorage.setItem('userWeight', (userWeight));
	var userHeight = document.querySelector("#userHeight").value;
    localStorage.setItem('userHeight', (userHeight));

    // Only adds to search history if something is actually inputted
    if(calculate){
        // Adds and removes classes to display the correct card
        addSearchHistory();    
    };
  // Saves search to search history
    function addSearchHistory (){

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight="+ userWeight + "&height=" +userHeight,
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "f7e67ce4d6msh8eac922e7a9ef02p170572jsnd8c44fa6c510",
		"X-RapidAPI-Host": "body-mass-index-bmi-calculator.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	var li = $("<li>" + response.bmi + "</li>");
    $('#pastBmi').append(li);
    localStorage.setItem('list', list.innerHTML);
});

    };

});
// Clear BMI history on click
function clearData () {
    window.localStorage.clear();
    window.location.reload();
};