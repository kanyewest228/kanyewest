const cardsImage = ['img/crab.jpg', 'img/dolphin.jpg', 'img/fooga.jpg', 'img/medusa.jpg', 'img/octopus.jpg',  'img/shark.jpg', 'img/whale.jpg', 'img/zola.jpg']
const cardsShuffle = [...cardsImage, ...cardsImage].sort(() => Math.random() - 0.5)


let parrent = document.getElementById('parent')
while (cardsShuffle.length > 0) {
    const newEl = parrent.appendChild(document.createElement('img'));
    newEl.src = cardsShuffle[0]
    cardsShuffle.shift()
}

//