const requestURL = "https://jamest011.github.io/wdd230/chamber/json/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);

    const directory = jsonObject.directory;

    const memLevel = directory.filter(membershipLevel);
  
    const spotlightdirectory = randomFromArray(3, memLevel);
    
  const sl1 = document.querySelector("#spotlight1");
  const sl2 = document.querySelector("#spotlight2");
  const sl3 = document.querySelector("#spotlight3");

  const sl1Name = sl1.querySelector("h2");
  const sl2Name = sl2.querySelector("h2");
  const sl3Name = sl3.querySelector("h2");

  const sl1Phone = sl1.querySelector("h3");
  const sl2Phone = sl2.querySelector("h3");
  const sl3Phone = sl3.querySelector("h3");

  const sl1Logo = sl1.querySelector("img");
  const sl2Logo = sl2.querySelector("img");
  const sl3Logo = sl3.querySelector("img");

  const sl1Site = sl1.querySelector("a > div");
  const sl2Site = sl2.querySelector("a > div");
  const sl3Site = sl3.querySelector("a > div");

  const sl1SiteLink = sl1.querySelector("a");
  const sl2SiteLink = sl2.querySelector("a");
  const sl3SiteLink = sl3.querySelector("a");

    sl1Name.innerText = spotlightdirectory[0][0].companyName;
    sl1Phone.innerText = spotlightdirectory[0][0].phoneNumber;
    sl1Logo.setAttribute("src", 'images/' + spotlightdirectory[0][0].logo);
    sl1Logo.setAttribute("alt", `${spotlightdirectory[0][0].companyName} logo`);
    sl1Site.innerText = spotlightdirectory[0][0].website;
    sl1SiteLink.setAttribute("href", `http://${spotlightdirectory[0][0].site}`);

    sl2Name.innerText = spotlightdirectory[1][0].companyName;
    sl2Phone.innerText = spotlightdirectory[1][0].phoneNumber;
    sl2Logo.setAttribute("src", 'images/' + spotlightdirectory[1][0].logo);
    sl2Logo.setAttribute("alt", `${spotlightdirectory[1][0].companyName} logo`);
    sl2Site.innerText = spotlightdirectory[1][0].website;
    sl2SiteLink.setAttribute("href", `http://${spotlightdirectory[1][0].website}`);

    sl3Name.innerText = spotlightdirectory[2][0].companyName;
    sl3Phone.innerText = spotlightdirectory[2][0].phoneNumber;
    sl3Logo.setAttribute("src", 'images/' + spotlightdirectory[2][0].logo);
    sl3Logo.setAttribute("alt", `${spotlightdirectory[2][0].companyName} logo`);
    sl3Site.innerText = spotlightdirectory[2][0].website;
    sl3SiteLink.setAttribute("href", `http://${spotlightdirectory[2][0].website}`);
    sl3


});

function membershipLevel(array) {
  if(array.membershipLevel == "Gold Membership" || array.membershipLevel == "Silver Membership") {
    return array;
  }
}

function randomFromArray(needed, array) {
  const newArray=[];
  for (let i = 0; i < needed; i++){
    let randInt = Math.floor(Math.random() * array.length);
    let element = array.splice(randInt,1);
   
    newArray.push(element);
  }
  
  return newArray;
}