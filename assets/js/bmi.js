var userWeight = "150";
var userHeight = "68";

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
	console.log(response);
});