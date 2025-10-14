const cardsImage = ['img/crab.jpg', 'img/dolphin.jpg', 'img/fooga.jpg', 'img/medusa.jpg', 'img/octopus.jpg',  'img/shark.jpg', 'img/whale.jpg', 'img/zola.jpg']
const cardsShuffle = [...cardsImage, ...cardsImage].sort(() => Math.random() - 0.5)


let parrent = document.getElementById('parent')
while (cardsShuffle.length > 0) {
    const newElDiv = parrent.appendChild(document.createElement('div'))
    newElDiv.style.position = 'relative '
    const newElImgFront = newElDiv.appendChild(document.createElement('img'))
    const newElImgBack = newElDiv.appendChild(document.createElement('img'))
    newElImgFront.src = cardsShuffle[0]
    newElImgFront.classList.add('hid')
    newElImgBack.src = 'assets/css/img/back.png'
    newElImgBack.classList.add('absolute')
    cardsShuffle.shift()
}



