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
let startBtn = document.getElementById("start-btn")
let newBtn = document.getElementById("new-btn")
let restartBtn = document.getElementById("restart-btn")
let restBtn = document.getElementById("rest-btn")
let continueBtn = document.getElementById("continue-btn")

startBtn.classList.add("active")




function startGame() {
    renderGame()
    isAlive = true
    restBtn.classList.add("active")
    startBtn.classList.remove("active")
    newBtn.classList.add("active")
    continueBtn.classList.remove("active")
}


function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "BlackJack!!"
        hasBlackJack = true
        restBtn.classList.add("active")
    }
    else{
        message = "You lose!"
        isAlive = false
        player.chips-= 100
        restBtn.classList.remove("active")
        continueBtn.classList.remove("active")
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

    if (sum === 21) {
        restBtn.classList.add("active")
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

    restBtn.classList.remove("active")
    newBtn.classList.remove("active")
    if (player.chips > 0) {
        continueBtn.classList.add("active")
    } else{
        restartBtn.classList.add("active")
    }
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        sum = sum + newCard
        cards.push(newCard)
        renderGame()  
    }

    if (sum > 21) {
        continueBtn.classList.add("active")
    } else if(dealer === 0){
        continueBtn.classList.remove("active")
    } 
    
    if(player.chips === 0){
        continueBtn.classList.remove("active")
    }

    if (sum > 21) {
        newBtn.classList.remove("active")
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
    dealer = 0
    dealerSum.textContent = "Dealer: 0"

    continueBtn.classList.remove("active")

    startGame()
}


function restartGame() {
    location.reload()
}

