const SHEET_URL = https://script.google.com/macros/s/AKfycbxPjhCH6smctQ9XB5PWcfwwHRrOcGAZuDaxT4yecX6pNDLH0VIzBaFBlz_1RUHSn4WF/exec; // Replace with your Web App URL

async function loadProgress() {
    let response = await fetch(SHEET_URL);
    let data = await response.json();

    data.slice(1).forEach(row => {
        let [user, subject, hours, paper1a, paper1b, paper2] = row;
        let id = `${subject}_${user}`;

        if (document.getElementById(id)) {
            document.getElementById(id).textContent = hours;
        }
        document.getElementById(`${id}_paper1a`).textContent = paper1a;
        document.getElementById(`${id}_paper1b`).textContent = paper1b;
        document.getElementById(`${id}_paper2`).textContent = paper2;
    });
}

async function updateHours(user, subject, value) {
    document.getElementById(`${subject}_${user}`).textContent = value;
    await fetch(SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, subject, hours: value, paper1a: 0, paper1b: 0, paper2: 0 })
    });
}

async function incrementPaper(user, subject, paper) {
    let paperId = `${subject}_${user}_${paper}`;
    let count = parseInt(document.getElementById(paperId).textContent) || 0;
    count += 1;
    document.getElementById(paperId).textContent = count;

    await fetch(SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, subject, hours: 0, [paper]: count })
    });
}

window.onload = loadProgress;
