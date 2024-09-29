var modal = document.getElementById("Modal");

var btns = document.querySelectorAll(".card-btn");

var span = document.getElementById("close");

btns.forEach(btn =>{

    var card = btn.closest(".card");

    var title = card.querySelector(".card-title").textContent;

    var modalTitle = document.getElementById("modal-title");


    btn.onclick = function(){
        modalTitle.textContent = title;
        modal.style.display = "flex";
    }

    span.onclick = function(){
        modal.style.display = "none";
    }
    
    window.addEventListener('click', function(event) {
        if (event.target == modal){
            modal.style.display = "none";
        }
    });
});