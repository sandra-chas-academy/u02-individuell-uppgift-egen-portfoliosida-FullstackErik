const dropDownList = document.querySelector(".nav_list-mobile");
const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");
const body = document.querySelector("body");
const mobileMediaQuery = window.matchMedia("(max-width: 768px)");
const modalBtns = document.querySelectorAll("button");
const aboutDiv = document.querySelector("#about");
const projectsDiv = document.querySelector("#projects");


handleResize();
mobileMediaQuery.addEventListener("change", handleResize);

//eventlisteners för alla knappar
modalBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const showPage = e.target.dataset.page;
        if (showPage === aboutDiv.id) {
            aboutDiv.style.display = "block"
            const closeModal = document.createElement("div")
            closeModal.classList = "closeModal";
            closeModal.addEventListener("click", () => {
                aboutDiv.style.display = "none";
                closeModal.style.display = "none";
            })
            body.appendChild(closeModal)

        }
    })
})

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
        closeNav();
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
function closeNav() {

    dropDownList.style.display = "none";
    hamburger.style.visibility = "visible";
    body.removeEventListener("click", closeNav);
}

