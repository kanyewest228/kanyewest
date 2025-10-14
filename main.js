const cardsImage = ['img/crab.jpg', 'img/dolphin.jpg', 'img/fooga.jpg', 'img/medusa.jpg', 'img/octopus.jpg',  'img/shark.jpg', 'img/whale.jpg', 'img/zola.jpg']
const cardsShuffle = [...cardsImage, ...cardsImage].sort(() => Math.random() - 0.5)


let parent = document.getElementById('parent')


while (cardsShuffle.length > 0) {
    const cardDiv = parent.appendChild(document.createElement('div'))
    cardDiv.style.position = 'relative'
    cardDiv.classList.add = 'card'

    const frontImg = cardDiv.appendChild(document.createElement('img'))
    frontImg.src = cardsShuffle[0]
    frontImg.classList.add('hid')
    frontImg.classList.add = 'frontImg'

    const backImg = cardDiv.appendChild(document.createElement('img'))
    backImg.src = 'assets/css/img/back.png'
    backImg.classList.add('absolute')
    backImg.classList.add = 'backImg'


    cardDiv.addEventListener('click', () => {
        frontImg.classList.toggle('hid')
        backImg.classList.toggle('hid')
        console.log("123")
    })

    cardsShuffle.shift()
}


