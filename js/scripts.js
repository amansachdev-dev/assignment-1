// JavaScript source code
function addClassActive(id,dotId) {
    var element1 = document.getElementsByClassName("media");
    for (var i = 0; i < element1.length; i++) {
        if (element1[i].classList.contains("active")) {
            element1[i].classList.remove("active");
        }
    }   
    var element = document.getElementById(id);
    element.classList.add("active");

    var dotElement1 = document.getElementsByClassName("dot");
    for (var j = 0; j < dotElement1.length; j++) {
        if (dotElement1[j].classList.contains("active")) {
            dotElement1[j].classList.remove("active");
        }
    }
    var dotElement = document.getElementById(dotId);
    dotElement.classList.add("active");
}

//Slider Code

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = x.length;}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}