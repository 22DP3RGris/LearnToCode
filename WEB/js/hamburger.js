var hamburger = document.querySelector(".hamburger");
var hamburger_btn = document.getElementById("hamburger");
var hamburger_content = document.querySelector('.hamburger .dropdown-content');
var hamburger_dropdowns = document.querySelectorAll(".hamburger-dropdown");

hamburger_btn.onclick = function(){
    if (hamburger_content.style.display == "block"){
        closeDropdown();
    } else{
        hamburger_content.style.display = "block";
        hamburger_content.style.animation = "dropdown-slide 0.5s";
    }

    window.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target)){
            hamburger_content.style.display = "none";
        }
    });

    window.addEventListener('resize', function() {
        closeDropdown();
    });
};

hamburger_dropdowns.forEach(hamburger_dropdown =>{
    hamburger_dropdown.onclick = function(){
        var hamburger_dropdown_content = hamburger_dropdown.querySelector(".hamburger-dropdown-content");
        var hamburger_dropdown_title = hamburger_dropdown.querySelector("a");

        if(hamburger_dropdown_content.style.display == "block"){
            hamburger_dropdown_content.style.display = "none"
            hamburger_dropdown_title.style.backgroundColor = "#504d4d"
        } else{
            hamburger_dropdown_content.style.display = "block";
            hamburger_dropdown_title.style.backgroundColor = "#444";
        }
    }
});

function closeDropdown(){
    hamburger_content.style.display = "none";
}
