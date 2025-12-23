// CONSTANTS
const galleryContainer = document.querySelector(".projects-gallery");

// FUNCTIONS
async function loadProjects() {
    const projects = await getProjects(); // from dataLoader.js
    if (!projects) return;

    // Clear static content
    galleryContainer.innerHTML = "";

    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";

        // Image Handling
        let imageHTML = "";
        if (project.image) {
            const style = project.background ? `style="background: ${project.background}"` : "";
            imageHTML = `<div class="project-image" ${style}><img src="${project.image}" alt="${project.title}"></div>`;
        } else {
            // Gradient fallback if defined, or default styling
            const style = project.background ? `style="background: ${project.background}"` : "";
            imageHTML = `<div class="project-image" ${style}></div>`;
        }

        // Links Handling
        let linksHTML = "";
        if (project.links && project.links.length > 0) {
            linksHTML = '<div class="project-links">';
            project.links.forEach(link => {
                linksHTML += `<a href="${link.url}" class="btn-project" target="_blank">${link.text}</a>`;
            });
            linksHTML += '</div>';
        }

        card.innerHTML = `
            ${imageHTML}
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description || "No description available."}</p>
                ${linksHTML}
            </div>
        `;

        galleryContainer.appendChild(card);
    });
}

// INIT
loadProjects();
