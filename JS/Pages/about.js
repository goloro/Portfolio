// CONSTANTS
const timelineContainer = document.getElementById("timeline-container");
const softSkillsGrid = document.getElementById("softSkills-grid");
const technologiesGrid = document.getElementById("technologies-grid");

// UTILS
/**
 * Returns the SVG icon string based on the type of experience.
 * @param {string} type - "Studies" or "Work"
 * @returns {string} The SVG string.
 */
const getIcon = (type) => {
    if (type === "Studies") {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path fill="currentColor"
                        d="M16 6.28a1.23 1.23 0 0 0-.62-1.07l-6.74-4a1.27 1.27 0 0 0-1.28 0l-6.75 4a1.25 1.25 0 0 0 0 2.15l1.92 1.12v2.81a1.28 1.28 0 0 0 .62 1.09l4.25 2.45a1.28 1.28 0 0 0 1.24 0l4.25-2.45a1.28 1.28 0 0 0 .62-1.09V8.45l1.24-.73v2.72H16zm-3.73 5L8 13.74l-4.22-2.45V9.22l3.58 2.13a1.29 1.29 0 0 0 1.28 0l3.62-2.16zM8 10.27l-6.75-4L8 2.26l6.75 4z" />
                </svg>`;
    } else {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" fill-rule="evenodd"
                        d="M14 6V4h-4v2zM4 8v11h16V8zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2z" />
                </svg>`;
    }
};

// FUNCTIONS
async function loadTrajectory() {
    const experience = await getExperience(); // from dataLoader.js
    if (!experience) return;

    // Clear existing static content
    timelineContainer.innerHTML = "";

    experience.forEach((item) => {
        const timelineItem = document.createElement("div");
        // Maintain left/right alternation style or use the 'side' property if strict
        // The JSON has a 'side' property, let's use it.
        timelineItem.className = `timeline-item ${item.side}`;

        timelineItem.innerHTML = `
            <div class="timeline-icon">
                ${getIcon(item.type)}
            </div>
            <div class="timeline-content">
                <span class="date">${item.date}</span>
                <img src="${item.logo}" alt="${item.company} Logo" class="timeline-logo">
                <h3>${item.role}</h3>
                <h4>${item.company}</h4>
                <p>${item.description}</p>
            </div>
        `;

        timelineContainer.appendChild(timelineItem);
    });
}

async function loadSkills() {
    const skills = await getSkills();
    if (!skills) return;

    // Helper to render items into a grid container
    const renderItems = (items, container) => {
        container.innerHTML = ""; // Clear existing content
        items.forEach(skill => {
            const card = document.createElement("div");
            card.className = "skill-card";
            card.innerHTML = `
                <div class="skill-icon">${skill.icon}</div>
                <h4>${skill.name}</h4>
                <p>${skill.description}</p>
            `;
            container.appendChild(card);
        });
    };

    if (skills.softSkills && softSkillsGrid) {
        renderItems(skills.softSkills, softSkillsGrid);
    }
    if (skills.technologies && technologiesGrid) {
        renderItems(skills.technologies, technologiesGrid);
    }
}


// INIT
loadTrajectory();
loadSkills();
