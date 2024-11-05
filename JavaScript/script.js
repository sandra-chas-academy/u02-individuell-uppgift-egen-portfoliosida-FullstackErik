const dropDownList = document.querySelector(".nav-list");
const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");
const body = document.querySelector(".body");
const mobileMediaQuery = window.matchMedia("(max-width: 768px)");

handleResize();
mobileMediaQuery.addEventListener("change", handleResize);

function handleResize() {

    if (mobileMediaQuery.matches) {
        dropDownList.style.display = "none";
        hamburger.style.display = "block";
        hamburger.addEventListener("click", showNav);
    } else {
        dropDownList.style.display = "flex";
        hamburger.style.display = "none";
        hamburger.removeEventListener("click", showNav);
        body.removeEventListener("click", closeNav);
    }

}

//function to open mobile navbar
function showNav() {

    dropDownList.style.display = "flex";
    hamburger.style.display = "none";

    setTimeout(() => {
        body.addEventListener("click", closeNav);
    }, 0);

}

//function to close mobile navbar
function closeNav(e) {

    console.log("closeNav körs");
    if (e.target.className === "list-item") {
        console.log("detta ska vara en länk");
    }

    dropDownList.style.display = "none";
    hamburger.style.display = "block";
    body.removeEventListener("click", closeNav);

}

