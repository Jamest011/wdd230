const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
let numMills = Number(window.localStorage.getItem("mills-ls"));

// first visit or number to display
if (numVisits !== 0) {
    visitsDisplay.textContent = 'Welcome back! You have visited here ' + numVisits + ' times!';
}
else {
    visitsDisplay.textContent = 'Welcome to Our Quaint Little Town!'
}

// add 1 for each visit
numVisits++;

// store the new number of visits
localStorage.setItem("visits-ls", numVisits);

// show number of days
// days since last visit
if (numMills !== 0) {
    numDays = Math.round((Date.now() - numMills) / 86400000);
    todayDisplay.textContent = numDays;
}
else {
    todayDisplay.textContent = 'This is your first visit!';
}

numMills = Date.now();
localStorage.setItem("mills-ls", numMills);