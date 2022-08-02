
var saved = $('#savedFavorites');

// Clear data on click
function clearData () {
    window.localStorage.clear();
    window.location.reload();
};

document.addEventListener("DOMContentLoaded", function() {
    // Body part saves
    window.localStorage.getItem('back');
    var savedCard = JSON.parse(window.localStorage.getItem('back'));
    saved.append(savedCard);
    window.localStorage.getItem('cardio');
    var savedCard = JSON.parse(window.localStorage.getItem('cardio'));
    saved.append(savedCard);
    window.localStorage.getItem('chest');
    var savedCard = JSON.parse(window.localStorage.getItem('chest'));
    saved.append(savedCard);
    window.localStorage.getItem('lowerArms');
    var savedCard = JSON.parse(window.localStorage.getItem('lowerArms'));
    saved.append(savedCard);
    window.localStorage.getItem('upperArms');
    var savedCard = JSON.parse(window.localStorage.getItem('upperArms'));
    saved.append(savedCard);
    window.localStorage.getItem('lowerLegs');
    var savedCard = JSON.parse(window.localStorage.getItem('lowerLegs'));
    saved.append(savedCard);
    window.localStorage.getItem('upperLegs');
    var savedCard = JSON.parse(window.localStorage.getItem('upperLegs'));
    saved.append(savedCard);
    window.localStorage.getItem('shoulders');
    var savedCard = JSON.parse(window.localStorage.getItem('shoulders'));
    saved.append(savedCard);
    window.localStorage.getItem('waist');
    var savedCard = JSON.parse(window.localStorage.getItem('waist'));
    saved.append(savedCard);
    window.localStorage.getItem('neck');
    var savedCard = JSON.parse(window.localStorage.getItem('neck'));
    saved.append(savedCard);
    // Equipment Saves
    window.localStorage.getItem('band');
    var savedCard = JSON.parse(window.localStorage.getItem('band'));
    saved.append(savedCard);
    var savedCard = JSON.parse(window.localStorage.getItem('barbell'));
    saved.append(savedCard);
    window.localStorage.getItem('bodyWeight');
    var savedCard = JSON.parse(window.localStorage.getItem('bodyWeight'));
    saved.append(savedCard);
    window.localStorage.getItem('cable');
    var savedCard = JSON.parse(window.localStorage.getItem('cable'));
    saved.append(savedCard);
    window.localStorage.getItem('dumbbell');
    var savedCard = JSON.parse(window.localStorage.getItem('dumbbell'));
    saved.append(savedCard);
    window.localStorage.getItem('ezBarbell');
    var savedCard = JSON.parse(window.localStorage.getItem('ezBarbell'));
    saved.append(savedCard);
    window.localStorage.getItem('kettlebell');
    var savedCard = JSON.parse(window.localStorage.getItem('kettlebell'));
    saved.append(savedCard);
    window.localStorage.getItem('olympicBarbell');
    var savedCard = JSON.parse(window.localStorage.getItem('olympicBarbell'));
    saved.append(savedCard);
    window.localStorage.getItem('resistanceBand');
    var savedCard = JSON.parse(window.localStorage.getItem('resistanceBand'));
    saved.append(savedCard);
    window.localStorage.getItem('roller');
    var savedCard = JSON.parse(window.localStorage.getItem('roller'));
    saved.append(savedCard);
    window.localStorage.getItem('rope');
    var savedCard = JSON.parse(window.localStorage.getItem('rope'));
    saved.append(savedCard);
    window.localStorage.getItem('sledMachine');
    var savedCard = JSON.parse(window.localStorage.getItem('sledMachine'));
    saved.append(savedCard);
    window.localStorage.getItem('smithMachine');
    var savedCard = JSON.parse(window.localStorage.getItem('smithMachine'));
    saved.append(savedCard);
    window.localStorage.getItem('stabilityBall');
    var savedCard = JSON.parse(window.localStorage.getItem('stabilityBall'));
    saved.append(savedCard);
    window.localStorage.getItem('tire');
    var savedCard = JSON.parse(window.localStorage.getItem('tire'));
    saved.append(savedCard);
    window.localStorage.getItem('weighted');
    var savedCard = JSON.parse(window.localStorage.getItem('weighted'));
    saved.append(savedCard);
    window.localStorage.getItem('wheelRoller');
    var savedCard = JSON.parse(window.localStorage.getItem('wheelRoller'));
    saved.append(savedCard);
    window.localStorage.getItem('leverageMachine');
    var savedCard = JSON.parse(window.localStorage.getItem('leverageMachine'));
    saved.append(savedCard);
    window.localStorage.getItem('medicineBall');
    var savedCard = JSON.parse(window.localStorage.getItem('medicineBall'));
    saved.append(savedCard);
});

// Equipment saves
