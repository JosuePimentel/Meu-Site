window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("scrol", window.scrollY >0);
})