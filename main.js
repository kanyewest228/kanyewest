function startGame() {
    document.getElementById('parent').innerHTML = '';
    const cardsImage = ['img/crab.jpg', 'img/dolphin.jpg', 'img/fooga.jpg', 'img/medusa.jpg', 'img/octopus.jpg', 'img/shark.jpg', 'img/whale.jpg', 'img/zola.jpg']
    const cardsShuffle = [...cardsImage, ...cardsImage].sort(() => Math.random() - 0.5)

    let cardDiv = [];
    let parent = document.getElementById('parent')

    while (cardsShuffle.length > 0) {
        cardDiv = parent.appendChild(document.createElement('div'))
        cardDiv.style.position = 'relative'
        cardDiv.className = 'card'
        cardDiv.setAttribute('draggable', 'false')

        const frontImg = cardDiv.appendChild(document.createElement('img'))
        frontImg.src = cardsShuffle[0]
        frontImg.classList.add('hid')
        frontImg.classList.add = 'frontImg'
        frontImg.setAttribute('draggable', 'false')

        const backImg = cardDiv.appendChild(document.createElement('img'))
        backImg.src = 'img/back.jpg'
        backImg.classList.add('absolute')
        backImg.classList.add = 'backImg'
        backImg.setAttribute('draggable', 'false')

        cardDiv.addEventListener('click', flipCard)

        cardsShuffle.shift()
    }
}

let deckBlocked = false
let flippedCards = []

function flipCard () {
    if (deckBlocked) return
    if (this === flippedCards[0]) return
    if (this.classList.contains('matched')) return
    this.firstChild.classList.toggle('hid')
    this.lastChild.classList.toggle('hid')
    flippedCards.push(this)

    if (flippedCards.length === 2) {
        checkMatch()
    }
}

function checkMatch () {
    deckBlocked = true;
    setTimeout(() => {
        const card1 = flippedCards[0]
        const card2 = flippedCards[1]

        if(card1.firstChild.src === card2.firstChild.src) {
            console.log("MATCH")
            card1.removeEventListener('click', flipCard)
            card2.removeEventListener('click', flipCard)
        } else {
            card1.firstChild.classList.toggle('hid')
            card1.lastChild.classList.toggle('hid')
            card2.firstChild.classList.toggle('hid')
            card2.lastChild.classList.toggle('hid')
        }

        flippedCards = []
        deckBlocked = false
    }, 1000)

}