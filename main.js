let parent = document.getElementById('parent')

function buttonClick() {
    let button = document.getElementById('strtBtn')
    button.classList.add('opacity0')
    setTimeout(()=> {
        startGame()
    },500)
}

function startGame() {

    parent.innerHTML = ''

    const cardsImage = ['img/crab.jpg', 'img/dolphin.jpg', 'img/fooga.jpg', 'img/medusa.jpg', 'img/octopus.jpg',  'img/shark.jpg', 'img/whale.jpg', 'img/zola.jpg']
    const cardsShuffle = [...cardsImage, ...cardsImage].sort(() => Math.random() - 0.5)

    let cardDiv = []

    while (cardsShuffle.length > 0) {
        cardDiv = parent.appendChild(document.createElement('div'))
        cardDiv.style.position = 'relative'
        cardDiv.className = 'card'
        cardDiv.classList.add('opacity0')
        cardDiv.setAttribute('draggable', 'false')

        const frontImg = cardDiv.appendChild(document.createElement('img'))
        frontImg.src = cardsShuffle[0]
        frontImg.classList.add('hid')
        frontImg.setAttribute('draggable', 'false')

        const backImg = cardDiv.appendChild(document.createElement('img'))
        backImg.src = 'img/back.jpg'
        backImg.classList.add('absolute')
        backImg.classList.add('show')
        backImg.setAttribute('draggable', 'false')

        cardDiv.addEventListener('click', flipCard)

        cardsShuffle.shift()
    }

    appearCards()

    function appearCards () {
        setTimeout(()=> {
            let cards = parent.querySelectorAll('div');
            cards.forEach(card => {
                card.classList.remove('opacity0')
            })
        }, 100)
    }
}


let deckBlocked = false
let flippedCards = []
let matchedCards = 0;

function flipCard () {
    if (deckBlocked) return
    if (this === flippedCards[0]) return
    if (this.classList.contains('matched')) return

    this.firstChild.classList.add('show')
    this.firstChild.classList.remove('hid')
    this.lastChild.classList.add('hid')
    this.lastChild.classList.remove('show')
    flippedCards.push(this)

    if (flippedCards.length === 2) {
        checkMatch()
    }
}

function checkMatch () {
    deckBlocked = true
    setTimeout(() => {
        const card1 = flippedCards[0]
        const card2 = flippedCards[1]

        if(card1.firstChild.src === card2.firstChild.src) {
            card1.removeEventListener('click', flipCard)
            card2.removeEventListener('click', flipCard)
            card1.classList.add('matched')
            card2.classList.add('matched')
            matchedCards++
        } else {
            card1.firstChild.classList.toggle('hid')
            card1.lastChild.classList.toggle('hid')
            card2.firstChild.classList.toggle('hid')
            card2.lastChild.classList.toggle('hid')
        }

        flippedCards = []
        deckBlocked = false

        if (matchedCards === 8) {
            setTimeout(() => {
                let restartButton = parent.appendChild(document.createElement('button'))
                restartButton.addEventListener('click', startGame)
                restartButton.innerText = 'Restart'
                restartButton.classList.add('restartBtn')
            }, 2000)
        }
    }, 1000)
}