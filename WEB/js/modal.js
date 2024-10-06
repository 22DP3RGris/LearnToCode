var modal = document.getElementById("Modal");

var btns = document.querySelectorAll(".card-btn");

var span = document.getElementById("close");

var dict = {
    "descriptions" : {
        "Python" : "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",
        "Java" : "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere.",
        "C#" : "C# is a general-purpose high-level programming language supporting multiple paradigms. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.",
        "PHP" : "PHP is a general-purpose scripting language geared towards web development. PHP code is usually processed on a web server by a PHP interpreter implemented as a module."
    }
}

btns.forEach(btn =>{

    var card = btn.closest(".card");

    var title = card.querySelector(".card-title").textContent;

    var modalTitle = document.getElementById("modal-title");
    var modalDesc = document.getElementById("modal-description");


    btn.onclick = function(){
        modalTitle.textContent = title;
        modalDesc.textContent = dict["descriptions"][title];
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