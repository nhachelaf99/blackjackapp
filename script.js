let isAlive = false
let hasBlackJack = false
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let message = ""
let player = {
    name: "Player",
    chips: 200
}
let dealer = 0

let playerEl = document.getElementById("player-el")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let dealerSum = document.getElementById("dealer-sum")
let cardEl = document.getElementById("card-el")
let restartBtn = document.getElementById("restart-btn")
let restBtn = document.getElementById("rest-btn")
let continueBtn = document.getElementById("continue-btn")




function startGame() {
    renderGame()
    isAlive = true
    restBtn.classList.add("active")
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
        player.chips-= 100
        restBtn.classList.remove("active")
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: " 

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + ", "
    }

    playerEl.textContent = player.name + ": $" + player.chips

    if (sum > 20) {
        continueBtn.classList.add("active")
    
    } else {
        continueBtn.classList.remove("active")
    }

    if (player.chips === 0) {
        restartBtn.classList.add("active")
        continueBtn.classList.remove("active")
    } else{
        restartBtn.classList.remove("active")
        continueBtn.classList.add("active")
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

function concactenate() {
    let dealer = Math.floor(Math.random() * 18 + 4)
    dealerSum.textContent = "Dealer: " + dealer
    if (dealer === 21) {
        dealerSum.textContent = "Dealer: Blackjack!"
    }

    if (sum > dealer) {
        player.chips = player.chips + 100
        playerEl.textContent = player.name + ": $" + player.chips
    }
    
    if (sum < dealer){
        player.chips = player.chips - 100
        playerEl.textContent = player.name + ": $" + player.chips
    } 
    
    if (sum > dealer && sum === 21){
        player.chips = player.chips + 150
        playerEl.textContent = player.name + ": $" + player.chips
    }
    
    if (sum < dealer && dealer === 21){
        player.chips = player.chips - 150
        playerEl.textContent = player.name + ": $" + player.chips
    }
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        sum = sum + newCard
        cards.push(newCard)
        renderGame()   
    }

}

function continueGame() {
    isAlive = false
    hasBlackJack = false
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    message = ""
    startGame()
}


function restartGame() {
    location.reload()
}

