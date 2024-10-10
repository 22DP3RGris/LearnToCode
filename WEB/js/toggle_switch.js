var toggle_switch = document.getElementById("toggle-switch");
var cards = document.querySelectorAll('.card');
var modals = document.querySelectorAll('.modal-content');

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('body-darkmode');
    toggle_switch.checked = true;
    if (cards != null){
        cards.forEach(function(card) {
            card.classList.add("no-animation");
        });
    }
    if (modals != null){
        modals.forEach(function(modal) {
            modal.classList.add("modal-content-dark");
        });
    }
}

toggle_switch.addEventListener('change', function(){
    if (toggle_switch.checked){
        document.body.classList.add("body-darkmode");
        localStorage.setItem('darkMode', 'enabled');
        if (cards != null){
            cards.forEach(function(card) {
                card.classList.add("no-animation");
            });
        }
        if (modals != null){
            modals.forEach(function(modal) {
                modal.classList.add("modal-content-dark");
            });
        }
    } else {
        document.body.classList.remove("body-darkmode");
        localStorage.setItem('darkMode', 'disabled');
        if (cards != null){
            cards.forEach(function(card) {
                card.classList.remove("no-animation");
            });
        }
        if (modals != null){
            modals.forEach(function(modal) {
                modal.classList.remove("modal-content-dark");
            });
        }
    }
});