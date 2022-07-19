const requestURL = 'https://jamest011.github.io/wdd230/final-project/temples.json'

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
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        let image = document.createElement('img')

        h2.textContent =  element.temple_name
        h3.textContent = 'Temple Status: '
        p.textContent = element.status
        h3_1.textContent = 'Address: '
        p1.textContent = element.address
        h3_2.textContent = 'Phone: ' + element.phone
        h3_3.textContent = 'Historical Information: '
        p2.textContent = element.history
        image.setAttribute('src', element.imageurl)

        card.appendChild(image)
        card.appendChild(h2) //temple name
        card.appendChild(h3) //status
        card.appendChild(p) // status info
        card.appendChild(h3_1) // address title
        card.appendChild(p1) // address
        card.appendChild(h3_2) //phone
        card.appendChild(h3_3) //history title
        card.appendChild(p2) //history info
        
        document.querySelector('div.cards').appendChild(card)
    });
  })