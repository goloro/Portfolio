// CONSTANTS
const navBarLogo = document.getElementById("navBarLogo");
const navBarAbout = document.getElementById("navBarAbout");
const navBarProjects = document.getElementById("navBarProjects");
const navBarContact = document.getElementById("navBarContact");

const navBar = document.querySelector(".navBar");
const navBarMenu = document.querySelector(".navBarMenu");

// Inject Hamburger (Mobile)
const hamburger = document.createElement("div");
hamburger.className = "hamburger";
hamburger.innerHTML = "<span></span><span></span><span></span>";
navBar.appendChild(hamburger);

// Mobile Menu Logic
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
});

// Close menu when clicking a link
const navLinks = document.querySelectorAll(".navBarMenu_P");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navBar.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });
});

// PATH HANDLING
const isInHtmlFolder = window.location.pathname.includes("/HTML/");
const homePath = isInHtmlFolder ? "../index.html" : "index.html";
const pagesPrefix = isInHtmlFolder ? "" : "HTML/";

// EVENT LISTENERS
navBarLogo.addEventListener("click", () => {
    window.location.href = homePath;
});
navBarAbout.addEventListener("click", () => {
    window.location.href = pagesPrefix + "about.html";
});
navBarProjects.addEventListener("click", () => {
    window.location.href = pagesPrefix + "projects.html";
});
navBarContact.addEventListener("click", () => {
    window.location.href = pagesPrefix + "contact.html";
});

// RESPONSIVE LAYOUT HANDLING
const navBarSocialMedia = document.querySelector(".navBarSocialMedia");

function adjustLayout() {
    if (window.innerWidth <= 768) {
        // Move social media to menu on mobile
        if (!navBarMenu.contains(navBarSocialMedia)) {
            navBarMenu.appendChild(navBarSocialMedia);
        }
    } else {
        // Move social media back to navbar on desktop
        if (!navBar.contains(navBarSocialMedia)) {
            navBar.appendChild(navBarSocialMedia);
        }
    }
}

window.addEventListener("load", adjustLayout);
window.addEventListener("resize", adjustLayout);