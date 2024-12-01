const dropDownList = document.querySelector(".nav_list-mobile");
const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");
const body = document.querySelector("body");
const mobileMediaQuery = window.matchMedia("(max-width: 768px)");
const modalBtns = document.querySelectorAll("button");
const firstName = document.querySelectorAll(".name")
const cvJobs = document.querySelector(".jobs");
const cvEducations = document.querySelector(".educations");
const repoCardContainer = document.querySelector(".card-container");
const navLinks = document.querySelectorAll("a");
const rightArrow = document.querySelector(".rightArrow");
const leftArrow = document.querySelector(".leftArrow");
const loader1 = document.querySelector(".loading1");
const loader2 = document.querySelector(".loading2");
const abouth3 = document.querySelector(".modal_h3");

let closeModal;

rightArrow.addEventListener("click", () => {
    repoCardContainer.style.scrollBehavior = "smooth";
    repoCardContainer.scrollLeft += 250;
});
leftArrow.addEventListener("click", () => {
    repoCardContainer.style.scrollBehavior = "smooth";
    repoCardContainer.scrollLeft -= 250
});

handleResize();
mobileMediaQuery.addEventListener("change", handleResize);

//eventlisteners för alla knappar
modalBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const showPage = e.target.dataset.page;
        if (showPage === "about") {
            writeCV()
        } else if (showPage === "projects") {
            writeProjects()
        }
        const modalDiv = document.querySelector(`#${showPage}Modal`);
        btn.style.backgroundColor = "#707070a4";
        btn.style.border = "none";
        modalDiv.style.display = "block";
        const closeModal = document.createElement("div");
        closeModal.classList = "closeModal";
        closeModal.addEventListener("click", () => {
            modalDiv.style.display = "none";
            closeModal.style.display = "none";
            btn.style.backgroundColor = "#00000000";
            btn.style.border = "1px solid #ffffff"
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

    if (!closeModal) {
        closeModal = document.createElement("div");
        closeModal.classList = "closeModal";
        closeModal.addEventListener("click", closeNav);
        body.appendChild(closeModal);
    }

    navLinks.forEach(link => {
        link.addEventListener("click", closeNav);
    });
}

//function to close mobile navbar
function closeNav() {
    dropDownList.style.display = "none";
    hamburger.style.visibility = "visible";

    if (closeModal) {
        closeModal.removeEventListener("click", closeNav);
        body.removeChild(closeModal);
        closeModal = null;
    }
    navLinks.forEach(link => {
        link.removeEventListener("click", closeNav);
    });
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

async function writeCV() {
    loader1.style.display = "block";
    abouth3.style.display = "none";
    const cv = await getCV();
    const {jobs, educations} = cv;
    loader1.style.display = "none";
    abouth3.style.display = "block";
    cvJobs.innerHTML = jobs.map(job => `
                        <div class="about_upper">
                        <h4 class="cv_profession">${job.profession}</h4>
                        <h4 class="cv_company">${job.company}</h4>
                        </div>
                        <div class="about_lower">
                        <h4 class="cv_duration">${job.duration}</h4>
                        <h4 class="cv_contact">${job.contact.name}:</h4>
                        <h4 class="cv_contact_number">${job.contact.phone_number}</h4>
                        </div>
                        `).join("");
    cvEducations.innerHTML = educations.map(study => `
                        <div class="about_upper">
                        <h4>${study.kindOf}</h4>
                        <h4>${study.from}-${study.to}</h4>
                        </div>
                        <div class="about_lower">
                        <h4>${study.school}</h4>
                        <h4>${study.grades}</h4>
                        </div>
                        `).join("");
}

async function getRepos() {
    const url = `https://api.github.com/users/FullstackErik/repos`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("HTTP" + response.status);
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch(error) {
        console.log(error)
    }
}

async function writeProjects() {
    loader2.style.display = "block";
    repoCardContainer.style.display = "none";
    const repos = await getRepos();
        loader2.style.display = "none";
        repoCardContainer.style.display = "flex";
        const chosenRepos = [];
        repoCardContainer.style.boxShadow = "0px 0px 12px #ffffff";
        chosenRepos.push(repos[1], repos[5], repos[8]);
        repoCardContainer.innerHTML = chosenRepos.map(repo => `
            <div class="repos">
                <a href="https://github.com/FullstackErik/${repo.name}">${repo.name}</a>
                <img src="${repo.language === "CSS" ? "images/CSS.svg": "images/javascript.svg"}" alt="" class="repos-img">
                <p class="repos-p">${repo.description}</p>
            </div>
            `
    ).join("");
} 