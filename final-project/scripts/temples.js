//temples js
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
  });

const likeBtn = document.querySelector(".like__btn");
const likeBtn1 = document.querySelector(".like__btn1");
const likeBtn2 = document.querySelector(".like__btn2");
const likeBtn3 = document.querySelector(".like__btn3");
let likeIcon = document.querySelector("#icon");
let likeIcon1 = document.querySelector("#icon");
let likeIcon2 = document.querySelector("#icon");
let likeIcon3 = document.querySelector("#icon");
count = document.querySelector("#count");
count1 = document.querySelector("#count1");
count2 = document.querySelector("#count2");
count3 = document.querySelector("#count3");


let clicked = false;
let clicked1 = false;
let clicked2 = false;
let clicked3 = false;



likeBtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    likeIcon.innerHTML = `<i class="fa-solid fa-thumbs-up">`;
    count.textContent++;
  } else {
    clicked = false;
    likeIcon.innerHTML = `<i class="fa-solid fa-thumbs-up">`;
    count.textContent--;
  }
});
likeBtn1.addEventListener("click", () => {
  if (!clicked1) {
    clicked1 = true;
    likeIcon1.innerHTML = `<i class="fa-solid fa-thumbs-up1">`;
    count1.textContent++;
  } else {
    clicked1 = false;
    likeIcon1.innerHTML = `<i class="fa-solid fa-thumbs-up1">`;
    count1.textContent--;
  }
});
likeBtn2.addEventListener("click", () => {
  if (!clicked2) {
    clicked2 = true;
    likeIcon2.innerHTML = `<i class="fa-solid fa-thumbs-up2">`;
    count2.textContent++;
  } else {
    clicked2 = false;
    likeIcon2.innerHTML = `<i class="fa-solid fa-thumbs-up2">`;
    count2.textContent--;
  }
});
likeBtn3.addEventListener("click", () => {
  if (!clicked3) {
    clicked3 = true;
    likeIcon3.innerHTML = `<i class="fa-solid fa-thumbs-up3">`;
    count3.textContent++;
  } else {
    clicked3 = false;
    likeIcon3.innerHTML = `<i class="fa-solid fa-thumbs-up3">`;
    count3.textContent--;
  }
});
