let moon = document.getElementById("moon");
let stars = document.getElementById("stars")
let mountain1 = document.getElementById("mountain1")
let mountain2 = document.getElementById("mountain2")
let river = document.getElementById("river")
let boat = document.getElementById("boat")
let navbar = document.getElementById("mynav")


window.onscroll = function(){
    updateNav();
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
function updateNav(){
    if(scrollY>=920){
    navbar.style.backgroundColor = "#240027"
}
else{
    navbar.style.backgroundColor = "transparent"
}
}

