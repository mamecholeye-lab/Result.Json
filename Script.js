// ===== JSON DATABASE =====
async function loadResultsFromJSON() {
    try {
        const response = await fetch('results.json');
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error('Error loading results:', error);
        loadStaticResults(); // Fallback
    }
}
