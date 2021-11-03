let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
isAlive = true
let message = ""


if (sum <= 20) {
   message = "Do You Want To Draw Another Card? "
} else if (sum === 21) {
    message = "You've Got Blackjack"
    hasBlackJack = true
} else {
    message = "You are out of the game" 
    isAlive = false
}

console.log (message)

