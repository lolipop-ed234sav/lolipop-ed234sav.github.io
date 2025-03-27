// Load saved progress from localStorage when the page loads
window.onload = function () {
    loadProgress();
};

// Function to update hours and save to localStorage
function updateHours(id, value) {
    document.getElementById(id).textContent = value;
    localStorage.setItem(id, value);
}

// Function to increment paper count and save to localStorage
function incrementPaper(id) {
    let count = parseInt(localStorage.getItem(id) || 0);
    count += 1;
    document.getElementById(id).textContent = count;
    localStorage.setItem(id, count);
}

// Load saved values from localStorage
function loadProgress() {
    let elements = [
        "math1", "physics1", "chemistry1",
        "math2", "physics2", "chemistry2",
        "paper1a1", "paper1b1", "paper21",
        "paper1a2", "paper1b2", "paper22"
    ];

    elements.forEach(id => {
        let savedValue = localStorage.getItem(id);
        if (savedValue !== null) {
            document.getElementById(id).textContent = savedValue;
            if (document.querySelector(`input[oninput*="${id}"]`)) {
                document.querySelector(`input[oninput*="${id}"]`).value = savedValue;
            }
        }
    });
}
