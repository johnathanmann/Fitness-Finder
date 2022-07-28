
var saved = $('#savedFavorites');

function clearData () {
    window.localStorage.clear();
    window.location.reload();
};

document.addEventListener("DOMContentLoaded", function() {
    window.localStorage.getItem('back');
    var savedCard = JSON.parse(window.localStorage.getItem('back'));
    saved.append(savedCard);
});
document.addEventListener("DOMContentLoaded", function() {
    window.localStorage.getItem('band');
    var savedCard = JSON.parse(window.localStorage.getItem('band'));
    saved.append(savedCard);
});

