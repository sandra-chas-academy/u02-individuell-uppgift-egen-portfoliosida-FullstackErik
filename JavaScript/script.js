const dropDownList = document.querySelector(".nav_list-mobile");
const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");
const body = document.querySelector("body");
const mobileMediaQuery = window.matchMedia("(max-width: 768px)");
const modalBtns = document.querySelectorAll("button");
const firstName = document.querySelectorAll(".name")
const cvJobs = document.querySelector(".jobs");
const cvEducations = document.querySelector(".educations");

handleResize();
mobileMediaQuery.addEventListener("change", handleResize);

//eventlisteners för alla knappar
modalBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const showPage = e.target.dataset.page;
        if (showPage === "about") {
            writeCV()
        }

        const modalDiv = document.querySelector(`#${showPage}`);
        btn.style.backgroundColor = "#009fb8";
        modalDiv.style.display = "block";
        const closeModal = document.createElement("div");
        closeModal.classList = "closeModal";
        closeModal.addEventListener("click", () => {
            console.log("tar bort blurmodal")
            modalDiv.style.display = "none";
            closeModal.style.display = "none";
            btn.style.backgroundColor = "#00d6f9";
            body.removeChild(closeModal)
        })
        body.appendChild(closeModal)
    })
})

//function so nav bar doesnt break upon resizing window
function handleResize() {
    console.log("running handleResize");
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
    console.log("running showNav");
    dropDownList.style.display = "block";
    hamburger.style.visibility = "hidden";

    const closeModal = document.createElement("div");
    closeModal.classList = "closeModal";
    closeModal.addEventListener("click", () => {
        closeModal.style.display = "none";
        body.removeChild(closeModal)
        closeNav()
    })
    body.appendChild(closeModal)
}

//function to close mobile navbar
function closeNav() {
    console.log("running closeNav");
    dropDownList.style.display = "none";
    hamburger.style.visibility = "visible";
    body.removeEventListener("click", closeNav);
}

async function getCV() {
    console.log("running getCV");
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
    console.log("running writeCV");
    const cv = await getCV();
    jobs = cv.jobs;
    study = cv.educations;
    console.log(cv)
    cvJobs.innerHTML = `
                        <div class="jobs_upper">
                        <h4 class="cv_profession">${jobs[0].profession}</h4>
                        <h4 class="cv_company">${jobs[0].company}</h4>
                        </div>
                        <div class="jobs_lower">
                        <h4 class="cv_duration">${jobs[0].duration}</h4>
                        <h4 class="cv_contact">${jobs[0].contact.name}:</h4>
                        <h4 class="cv_contact_number">${jobs[0].contact.phone_number}</h4>
                        </div>
                        <div class="jobs_upper">
                        <h4 class="cv_profession">${jobs[1].profession}</h4>
                        <h4 class="cv_company">${jobs[1].company}</h4>
                        </div>
                        <div class="jobs_lower">
                        <h4 class="cv_duration">${jobs[1].duration}</h4>
                        <h4 class="cv_contact">${jobs[1].contact.name}:</h4>
                        <h4 class="cv_contact_number">${jobs[1].contact.phone_number}</h4>
                        </div>
                        <div class="jobs_upper">
                        <h4 class="cv_profession">${jobs[2].profession}</h4>
                        <h4 class="cv_company">${jobs[2].company}</h4>
                        </div>
                        <div class="jobs_lower">
                        <h4 class="cv_duration">${jobs[2].duration}</h4>
                        <h4 class="cv_contact">${jobs[2].contact.name}:</h4>
                        <h4 class="cv_contact_number">${jobs[2].contact.phone_number}</h4>
                        </div>`;
    cvEducations.innerHTML = `
                        <div class="jobs_upper">
                        <h4>${study[0].kindOf}</h4>
                        <h4>${study[0].from}-${study[0].to}</h4>
                        </div>
                        <div class="jobs_lower">
                        <h4>${study[0].school}</h4>
                        <h4>${study[0].grades}</h4>
                        </div>
                        <div class="jobs_upper">
                        <h4>${study[1].kindOf}</h4>
                        <h4>${study[1].from}-${study[1].to}</h4>
                        </div>
                        <div class="jobs_lower">
                        <h4>${study[1].school}</h4>
                        <h4>${study[1].grades}</h4>
                        </div>
                        <div class="jobs_upper">
                        <h4>${study[2].kindOf}</h4>
                        <h4>${study[2].from}-${study[2].to}</h4>
                        </div>
                        <div class="jobs_lower">
                        <h4>${study[2].school}</h4>
                        <h4>${study[2].grades}</h4>
                        </div>
    `
}