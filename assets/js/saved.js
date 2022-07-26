

document.addEventListener("DOMContentLoaded", function() {
    var list = $('#savedFavorites');
    window.localStorage.getItem('card');
    var savedCard = JSON.parse(window.localStorage.getItem('card'));
    list.append(savedCard);
});