// CONSTANTS
// NavBar Buttons
const navBarLogo = document.getElementById("navBarLogo");
const navBarAbout = document.getElementById("navBarAbout");
const navBarProjects = document.getElementById("navBarProjects");
const navBarContact = document.getElementById("navBarContact");

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