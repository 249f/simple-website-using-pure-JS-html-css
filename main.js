let moon = document.getElementById("moon");
let stars = document.getElementById("stars")
let mountain1 = document.getElementById("mountain1")
let mountain2 = document.getElementById("mountain2")
let river = document.getElementById("river")
let boat = document.getElementById("boat")


window.onscroll = function(){
    let value = scrollY;
    moon.style.top = value*2 + "px";
    stars.style.right = value + "px";
    mountain1.style.top = value + "px";
    boat.style.left = value + "px";


    if (scrollY >= 900){
        moon.style.display = "none";
    }
    else{
        moon.style.display = "block";
    }
}