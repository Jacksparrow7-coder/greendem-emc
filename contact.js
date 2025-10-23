let sidenav = document.getElementById("sidenav");
let crossBtn = document.getElementById("closebtn");
let menuBtn= document.getElementById("menuicon");


menuBtn.addEventListener("click", function() {
    sidenav.style.right = "0%";
});

crossBtn.addEventListener("click", function() {
    sidenav.style.right = "-60%";
});