var hamburger = document.getElementById("hamburger");
var content = document.querySelector('.hamburger .dropdown-content');

hamburger.onclick = function(){
    if (content.style.display == "block"){
        content.style.display = "none";
    } else{
        content.style.display = "block";
        content.style.animation = "dropdown-slide 0.5s";
    }

    window.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target)){
            content.style.display = "none";
        }
    });
};
