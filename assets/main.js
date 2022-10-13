var paragraf = document.getElementsByClassName("nyala");
setInterval(function () {
    paragraf[0].style.color = "blue";
    paragraf[1].style.color = "blue";

    setTimeout(function () {
        paragraf[0].style.color = "black";
        paragraf[1].style.color = "black";
        
    }, 500)
}, 1000);