const dropDownList = document.querySelector(".nav-list-mobile");
const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");
const body = document.querySelector(".body");
const mobileMediaQuery = window.matchMedia("(max-width: 768px)");

handleResize();
mobileMediaQuery.addEventListener("change", handleResize);

//function so nav bar doesnt break upon resizing window
function handleResize() {

    dropDownList.style.display = "none";

    if (mobileMediaQuery.matches) {
        hamburger.style.display = "block";
        hamburger.addEventListener("click", showNav);
    } else {
        hamburger.style.display = "none";
        hamburger.removeEventListener("click", showNav);
        body.removeEventListener("click", closeNav);
    }

}

//function to open mobile navbar
function showNav() {

    dropDownList.style.display = "block";
    hamburger.style.visibility = "hidden";

    setTimeout(() => {
        body.addEventListener("click", closeNav);
    }, 0);

}

//function to close mobile navbar
function closeNav(e) {

    if (e.target.className === "list-item") {
        console.log("detta ska vara en länk");
    }

    dropDownList.style.display = "none";
    hamburger.style.visibility = "visible";
    body.removeEventListener("click", closeNav);
}

