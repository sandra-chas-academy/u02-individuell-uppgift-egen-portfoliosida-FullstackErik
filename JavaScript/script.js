const dropDownList = document.querySelector(".nav_list-mobile");
const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");
const body = document.querySelector("body");
const mobileMediaQuery = window.matchMedia("(max-width: 768px)");
const modalBtns = document.querySelectorAll("button");
const firstName = document.querySelectorAll(".name")

handleResize();
mobileMediaQuery.addEventListener("change", handleResize);

//eventlisteners för alla knappar
modalBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const showPage = e.target.dataset.page;
        const modalDiv = document.querySelector(`#${showPage}`);
        btn.style.backgroundColor = "#696969";

        modalDiv.style.display = "block";
        const closeModal = document.createElement("div");
        closeModal.classList = "closeModal";
        closeModal.addEventListener("click", () => {
            modalDiv.style.display = "none";
            closeModal.style.display = "none";
            btn.style.backgroundColor = "#929292";
            body.removeChild(closeModal)
        })
        body.appendChild(closeModal)
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

async function getCV() {

    const url = "./cv.json";
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("HTTP" + response.status);
        }
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error)
    }
}

getJobs();
getEducations();
getExperiences();
getMe();

async function getJobs() {
    const cv = await getCV();
    console.log(cv.jobs)
    return(cv.jobs)
}

async function getEducations() {
    const cv = await getCV();
    console.log(cv.educations)
    return(cv.educations)
}

async function getExperiences() {
    const cv = await getCV();
    console.log(cv.experiences);
    return(cv.experiences)
}

async function getMe () {
    const cv = await getCV();
    console.log(cv.me);
    return(cv.me);
}
