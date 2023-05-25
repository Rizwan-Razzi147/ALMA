
let icone = document.getElementsByClassName("i_wht")[2];
let sidebar = document.getElementById("sidebar");
let cross = document.getElementById("CrossImg");
console.log(cross);
// console.log(icone);

icone.addEventListener("click", function () {
  sidebar.style.right = "0";
  sidebar.style.visibility = "visible";
});

cross.addEventListener("click", function () {
  sidebar.style.right="-400px"
});

//    =======================================================//
let wind = document.getElementsByTagName("nav")[0]
console.log(wind,'nav');

window.addEventListener("scroll", function(){
    console.log("window is clicked", window.scrollY);
    if (window.scrollY > 200) {
        wind.classList.add("active")
    }
    else{
            wind.classList.remove("active")
    }
})