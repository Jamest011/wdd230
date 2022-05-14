// date info

document.getElementById("currentYear").innerHTML = new Date().getFullYear();
document.getElementById("lastUpdated").innerHTML = document.lastModified;
document.getElementById("currentDate").innerHTML = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"});

// hamburger button info

function toggleMenu() {
  document.getElementById('navigation').classList.toggle('open');
}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;