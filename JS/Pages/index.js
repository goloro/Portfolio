// CONSTANTS
// Buttons
const viewMyWork = document.getElementById("MCTB-Button-ViewMyWork");
const getInTouch = document.getElementById("MCTB-Button-GetInTouch");
// Carousel
const carouselTrack = document.querySelector(".carousel-track");

// EVENT LISTENERS
viewMyWork.addEventListener("click", () => {
    window.location.href = "./HTML/projects.html";
})
getInTouch.addEventListener("click", () => {
    window.location.href = "./HTML/contact.html";
})

// FUNCTIONS
async function loadCarousel() {
    const projects = await getProjects(); // From dataLoader.js
    if (!projects) return;

    const featuredProjects = projects.filter(project => project.featured);

    // Clear static placeholders
    carouselTrack.innerHTML = "";

    // Function to create card element
    const createCard = (project) => {
        const card = document.createElement("div");
        card.className = "project-card";

        const img = document.createElement("img");
        const imagePath = project.image;

        img.src = imagePath;
        img.alt = project.title;
        img.className = "project-image";

        // Click Logic specifically for Live Demo
        const liveDemoLink = project.links.find(link => link.text === "Live Demo");
        if (liveDemoLink && liveDemoLink.url) {
            card.addEventListener("click", () => {
                window.open(liveDemoLink.url, "_blank");
            });
        }

        card.appendChild(img);
        return card;
    };

    // Append Original Set
    featuredProjects.forEach(project => {
        carouselTrack.appendChild(createCard(project));
    });

    // Append Duplicate Set (for infinite scroll effect)
    featuredProjects.forEach(project => {
        carouselTrack.appendChild(createCard(project));
    });

    // Append Duplicate Set (for infinite scroll effect)
    featuredProjects.forEach(project => {
        carouselTrack.appendChild(createCard(project));
    });

    // Append Duplicate Set (for infinite scroll effect)
    featuredProjects.forEach(project => {
        carouselTrack.appendChild(createCard(project));
    });

    // Append Duplicate Set (for infinite scroll effect)
    featuredProjects.forEach(project => {
        carouselTrack.appendChild(createCard(project));
    });

    // Append Duplicate Set (for infinite scroll effect)
    featuredProjects.forEach(project => {
        carouselTrack.appendChild(createCard(project));
    });

    // Append Duplicate Set (for infinite scroll effect)
    featuredProjects.forEach(project => {
        carouselTrack.appendChild(createCard(project));
    });

    // Append Duplicate Set (for infinite scroll effect)
    featuredProjects.forEach(project => {
        carouselTrack.appendChild(createCard(project));
    });

    // Append Duplicate Set (for infinite scroll effect)
    featuredProjects.forEach(project => {
        carouselTrack.appendChild(createCard(project));
    });

    // Append Duplicate Set (for infinite scroll effect)
    featuredProjects.forEach(project => {
        carouselTrack.appendChild(createCard(project));
    });

    // Append Duplicate Set (for infinite scroll effect)
    featuredProjects.forEach(project => {
        carouselTrack.appendChild(createCard(project));
    });

    // Append Duplicate Set (for infinite scroll effect)
    featuredProjects.forEach(project => {
        carouselTrack.appendChild(createCard(project));
    });
}

// INIT
loadCarousel();
