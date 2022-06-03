const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// first visit or number to display
if (numVisits !== 0) {
    visitsDisplay.textContent = 'Welcome back! This is your' + numVisits + 'visit!';
}
else {
    visitsDisplay.textContent = 'Welcome to Our Quaint Little Town!'
}

// add 1 for each visit
numVisits++;

// store the new number of visits
localStorage.setItem("visits-ls", numVisits);