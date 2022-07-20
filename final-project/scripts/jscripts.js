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
       })
  })
}

if (check.substring(check.length-14,check.length) == "final-project/temples.html") {
  const requestURL = 'https://jamest011.github.io/wdd230/final-project/json/temples.json'

fetch(requestURL)
  .then(function (response) {
    return response.json()
  })
  .then(function (jsonObject) {
    const temples = jsonObject['temples']
    temples.forEach(element => {
        let card = document.createElement('section')
        let h2 = document.createElement('h2')
        let h3 = document.createElement('h3')
        let h3_1 = document.createElement('h3')
        let h3_2 = document.createElement('h3')
        let h3_3 = document.createElement('h3')
        let p = document.createElement('p')
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        let image = document.createElement('img')

        h2.textContent =  element.temple_name
        h3.textContent = 'Temple Status: '
        p.textContent = element.status
        h3_1.textContent = 'Address: '
        p1.textContent = element.address
        h3_2.textContent = 'Phone: '
        p2.textContent = element.phone
        h3_3.textContent = 'Historical Information: '
        p3.textContent = element.history
        image.setAttribute('src', element.imageurl)

        card.appendChild(image)
        card.appendChild(h2) //temple name
        card.appendChild(h3) //status
        card.appendChild(p) // status info
        card.appendChild(h3_1) // address title
        card.appendChild(p1) // address
        card.appendChild(h3_2) //phone
        card.appendChild(p2) //phone number
        card.appendChild(h3_3) //history title
        card.appendChild(p3) //history info
        
        document.querySelector('div.cards').appendChild(card)
    });
  })

}