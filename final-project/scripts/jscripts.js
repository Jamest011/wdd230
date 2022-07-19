// date info

document.getElementById("currentYear").innerHTML = new Date().getFullYear();
// document.getElementById("lastUpdated").innerHTML = document.lastModified;
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

// weather info
const check = window.location.href
const rnd = (n,d) => {
    return (Math.round(n*10**d)/10**d)
}
if (check.substring(check.length-14,check.length) == "final-project/index.html") {

  fetch("https://api.openweathermap.org/data/2.5/weather?q=WashingtonDC&units=imperial&appid=2f43b49b18bda6ebea7f334c160f97d5")
      .then(res => {
        return res.json()
      })
      .then(jsonData => {
          let current = jsonData.current
          let img = document.querySelector('.weather > section img')
          let h4 = document.querySelector('.weather > section h4')
          let p = document.querySelector('.weather > section p')

          img.setAttribute('src',',/images/weather-icons/'+current.weather[0].icon+'.png')
          img.setAttribute('alt',current.weather[0].description)
          h4.innerHTML = rnd(current.temp,1)+"&deg;F "+current.weather[0].main
          p.innerHTML = "Humidity: "+rnd(current.humidity,1)+"%"

          let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
          jsonData.daily.forEach((elem,index) => {
            if (document.querySelector('.forecast > section:nth-child('+(index+1)+')') !== null) {
                let img = document.querySelector('.forecast > section:nth-child('+(index+1)+') img')
                let h3 = document.querySelector('.forecast > section:nth-child('+(index+1)+') h3')
                let p = document.querySelector('.forecast > section:nth-child('+(index+1)+') p')

                img.setAttribute('src','./images/weather-icons/'+elem.weather[0].icon+'.png')
                img.setAttribute('alt',elem.weather[0].description)
                h3.innerHTML = days[((new Date().getDay())+index)%days.length]
                p.innerHTML = "Temp: "+rnd(elem.temp.day,1)+"&deg;F"
              }
          })})
        }