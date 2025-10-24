let sidenav = document.getElementById("sidenav");
let crossBtn = document.getElementById("closebtn");
let menuBtn= document.getElementById("menuicon");


menuBtn.addEventListener("click", function() {
    sidenav.style.right = "0%";
});

crossBtn.addEventListener("click", function() {
    sidenav.style.right = "-60%";
})

//searchjs code

let container=document.getElementById("product-container")
let search=document.getElementById("search")
let productlist=container.querySelectorAll("div")

search.addEventListener("keyup",function(){
    let enteredvalue = event.target.value.toUpperCase()

    for(count=0 ; count<productlist.length; count=count+1)
        {
        let productname = productlist[count].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
}
})