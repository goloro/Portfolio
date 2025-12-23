// UTILS
/**
 * Determines the correct path to the Data directory.
 * @returns {string} The relative path to the Data directory.
 */
const getBasePath = () => {
    // Check if we are in the HTML subdirectory
    return window.location.pathname.includes("/HTML/") ? "../Data/" : "./Data/";
};

// CORE FUNCTION
/**
 * Fetches and parses a JSON file from the Data directory.
 * @param {string} filename - The name of the JSON file to load.
 * @returns {Promise<any|null>} The parsed JSON data or null if an error occurs.
 */
async function loadData(filename) {
    const path = getBasePath() + filename;
    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error loading ${filename}:`, error);
        return null;
    }
}

// PUBLIC GETTERS
/**
 * Retrieves the skills data.
 * @returns {Promise<Object>} The skills data.
 */
async function getSkills() {
    return await loadData("skills.json");
}

/**
 * Retrieves the projects data.
 * @returns {Promise<Array>} The projects list.
 */
async function getProjects() {
    return await loadData("projects.json");
}

/**
 * Retrieves the experience data.
 * @returns {Promise<Array>} The experience list.
 */
async function getExperience() {
    return await loadData("experience.json");
}
