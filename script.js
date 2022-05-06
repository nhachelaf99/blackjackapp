let isAlive = false
let hasBlackJack = false
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function startGame() {
    renderGame()
    isAlive = true
}


function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "BlackJack!!"
        hasBlackJack = true
    }
    else{
        message = "You lose!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: " 

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + ", "
    }
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 + 1)

    if (randomNumber === 1) {
        return  11
    }

    if (randomNumber > 10) {
        return  10
    }

    return randomNumber
}




function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        sum = sum + newCard
        cards.push(newCard)
        renderGame()   
    }

}

