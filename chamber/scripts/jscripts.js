// date info

document.getElementById("currentYear").innerHTML = new Date().getFullYear();
document.getElementById("lastUpdated").innerHTML = document.lastModified;
document.getElementById("currentDate").innerHTML = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"});

// hamburger button

function toggleMenu() {
  document.getElementById('mainNav').classList.toggle('open');
  document.getElementById('menuButton').classList.toggle('open');
}
const x = document.getElementById('menuButton');
x.onclick = toggleMenu;


// Mon and Tues banner
const now = new Date();
if (now.getDay() === 1 || now.getDay() === 2) {
  document.getElementById("banner").style.display = "block";
}

const close = document.querySelector("#close");

close.addEventListener("click", () => {
    banner.style.display = "none";
});