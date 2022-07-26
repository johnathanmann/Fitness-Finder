
var saved = $('#savedFavorites');
    
document.addEventListener("DOMContentLoaded", function() {
    window.localStorage.getItem('card');
    var savedCard = JSON.parse(window.localStorage.getItem('card'));
    saved.append(savedCard);
});
