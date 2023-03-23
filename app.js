/* 
    Made by: Bence Szorgalmatos
    GitHub: https://github.com/szbence7
    Website: https://szbence7.github.io/
*/

// Blackjack Game Decks of Cards
let cards = [
    { name: "Ace", value: 11 },
    { name: "King", value: 10 },
    { name: "Queen", value: 10 },
    { name: "Jack", value: 10 },
    { name: "Ten", value: 10 },
    { name: "Nine", value: 9 },
    { name: "Eight", value: 8 },
    { name: "Seven", value: 7 },
    { name: "Six", value: 6 },
    { name: "Five", value: 5 },
    { name: "Four", value: 4 },
    { name: "Three", value: 3 },
    { name: "Two", value: 2 },
    { name: "Ace", value: 11 },
    { name: "King", value: 10 },
    { name: "Queen", value: 10 },
    { name: "Jack", value: 10 },
    { name: "Ten", value: 10 },
    { name: "Nine", value: 9 },
    { name: "Eight", value: 8 },
    { name: "Seven", value: 7 },
    { name: "Six", value: 6 },
    { name: "Five", value: 5 },
    { name: "Four", value: 4 },
    { name: "Three", value: 3 },
    { name: "Two", value: 2 },
    { name: "Ace", value: 11 },
    { name: "King", value: 10 },
    { name: "Queen", value: 10 },
    { name: "Jack", value: 10 },
    { name: "Ten", value: 10 },
    { name: "Nine", value: 9 },
    { name: "Eight", value: 8 },
    { name: "Seven", value: 7 },
    { name: "Six", value: 6 },
    { name: "Five", value: 5 },
    { name: "Four", value: 4 },
    { name: "Three", value: 3 },
    { name: "Two", value: 2 },
    { name: "Ace", value: 11 },
    { name: "King", value: 10 },
    { name: "Queen", value: 10 },
    { name: "Jack", value: 10 },
    { name: "Ten", value: 10 },
    { name: "Nine", value: 9 },
    { name: "Eight", value: 8 },
    { name: "Seven", value: 7 },
    { name: "Six", value: 6 },
    { name: "Five", value: 5 },
    { name: "Four", value: 4 },
    { name: "Three", value: 3 },
    { name: "Two", value: 2 }
]
// End of cards


// Sorts the cards in random order
cards.sort(() => Math.random() - 0.5);

// Creates the player and dealer cards
let playerCards = [];
let dealerCards = [];
let playerTotal = 0;
let dealerTotal = 0;
let playerWin = 0;
let dealerWin = 0;
let playerChips = 1000;
let stake = 50;
let isGameAlive = false;
let cardImgs = document.getElementById('cardImgs');
let isStakeTaken = false;

// Draws a card from the deck and adds it to the player's cards
function chooseCard() {

    // Checks if the player has enough chips
    if (playerChips < stake) {
        console.log("You don't have enough chips!");
        return;
    } else if (playerChips >= stake && isStakeTaken == false){
    isStakeTaken = true;
    playerChips -= stake;
    isGameAlive = true;
    let card = cards.pop();
    let card2 = cards.pop(Math.floor(Math.random() * cards.length - 7));
    playerCards.push(card);
    dealerCards.push(card2);
    playerTotal += card.value;
    dealerTotal += card2.value;
    console.log(card);
    console.log(card2);
    console.log(`Player Total: ${playerTotal}`);
    console.log(`Dealer Total: ${dealerTotal}`);
    console.log('--------------------------------------------------------')
    cards.unshift(card);
    cards.unshift(card2);
    console.log(playerChips)
    } else if (playerChips >= stake && isStakeTaken == true){
        isGameAlive = true;
    let card = cards.pop();
    let card2 = cards.pop(Math.floor(Math.random() * cards.length - 7));
    playerCards.push(card);
    dealerCards.push(card2);
    playerTotal += card.value;
    dealerTotal += card2.value;
    console.log(card);
    console.log(card2);
    console.log(`Player Total: ${playerTotal}`);
    console.log(`Dealer Total: ${dealerTotal}`);
    console.log('--------------------------------------------------------')
    cards.unshift(card);
    cards.unshift(card2);
    console.log(playerChips)
    }
    // Checks if the player has a blackjack
    
    if (playerTotal > 21) { // If player goes over 21, they lose
        console.log("You lose!");
        console.info(playerCards);
        playerTotal = 0;
        dealerTotal = 0;
        dealerWin++
        console.log(`Player Total: ${playerTotal}`);
        console.log(`Dealer Total: ${dealerTotal}`);
        console.log(`Player Wins: ${playerWin}`);
        console.log(`Dealer Wins: ${dealerWin}`);
        console.log('--------------------------------------------------------')
        return;
    } else if (dealerTotal > 21) { // If dealer goes over 21, player wins
        console.log("You Win!");
        console.info(playerCards);
        playerTotal = 0;
        dealerTotal = 0;
        playerWin++
        console.log(`Player Total: ${playerTotal}`);
        console.log(`Dealer Total: ${dealerTotal}`);
        console.log(`Player Wins: ${playerWin}`);
        console.log(`Dealer Wins: ${dealerWin}`);
        console.log('--------------------------------------------------------')
        return;
    }
}

// Stop the game and check who wins
function stopGame(){
    isStakeTaken = false;
    // Checks if the player has drawn a card
    if (isGameAlive == false) {
        console.log("You need to draw a card!");
        return;
    }

    // Checks if the player has drawn at least 2 cards
    if (playerCards.length <= 1) {
        console.log("You need to draw at least 2 cards!");
        return;
    }
    // Checks if the player has a blackjack or if the dealer has a blackjack
    if (playerTotal > dealerTotal && playerTotal < 21) { // Player wins but doesn't have a blackjack
   
    console.log("You Win!");
    console.log(`Player Total: ${playerTotal}`);
    console.log(`Dealer Total: ${dealerTotal}`);
    console.log('-----------------------------')
    console.info(playerCards);
    console.log(dealerCards);
    playerTotal = 0;
    dealerTotal = 0;
    playerWin++
    console.log(`Player Wins: ${playerWin}`);
    console.log(`Dealer Wins: ${dealerWin}`);
    console.log('--------------------------------------------------------')
    isGameAlive = false;
    return;
    } else if (playerTotal > dealerTotal && playerTotal == 21) { // Player has a blackjack
        console.log("BlackJack!");
        console.log(`Player Total: ${playerTotal}`);
        console.log(`Dealer Total: ${dealerTotal}`);
        console.log('-----------------------------')
        console.info(playerCards);
        playerTotal = 0;
        dealerTotal = 0;
        playerWin++
        console.log(`Player Total: ${playerTotal}`);
        console.log(`Dealer Total: ${dealerTotal}`);
        console.log(`Player Wins: ${playerWin}`);
        console.log(`Dealer Wins: ${dealerWin}`);
        console.log('--------------------------------------------------------')
        isGameAlive = false;
        return;
    } else if (playerTotal === 21 && dealerTotal === 21) { // Both players have a blackjack
        console.log("BlackJack for both players!");
        console.log(`Player Total: ${playerTotal}`);
        console.log(`Dealer Total: ${dealerTotal}`);
        console.log('------------------------------')
        console.info(playerCards);
        console.info(dealerCards);
        playerTotal = 0;
        dealerTotal = 0;
        playerWin++
        dealerWin++
        console.log(`Player Total: ${playerTotal}`);
        console.log(`Dealer Total: ${dealerTotal}`);
        console.log(`Player Wins: ${playerWin}`);
        console.log(`Dealer Wins: ${dealerWin}`);
        console.log('--------------------------------------------------------')
        isGameAlive = false;
        return;  
    } else if (playerTotal < dealerTotal && dealerTotal < 21) { // Dealer has a higher total but not a blackjack
        console.log("You lose!");
        console.log(`Player Total: ${playerTotal}`);
        console.log(`Dealer Total: ${dealerTotal}`);
        console.log('-----------------------------')
        console.info(playerCards);
        console.info(dealerCards);
        playerTotal = 0;
        dealerTotal = 0;
        dealerWin++
        console.log(`Player Total: ${playerTotal}`);
        console.log(`Dealer Total: ${dealerTotal}`);
        console.log(`Player Wins: ${playerWin}`);
        console.log(`Dealer Wins: ${dealerWin}`);
        console.log('--------------------------------------------------------')
        isGameAlive = false;
        return;
    } else if (playerTotal < dealerTotal && dealerTotal == 21) { // Dealer has a blackjack
        console.log("Dealer BlackJack!");
        console.log(`Player Total: ${playerTotal}`);
        console.log(`Dealer Total: ${dealerTotal}`);
        console.info(playerCards);
        console.info(dealerCards);
        playerTotal = 0;
        dealerTotal = 0;
        dealerWin++
        console.log(`Player Total: ${playerTotal}`);
        console.log(`Dealer Total: ${dealerTotal}`);
        console.log(`Player Wins: ${playerWin}`);
        console.log(`Dealer Wins: ${dealerWin}`);
        isGameAlive = false;
        return;
    } else if (playerTotal === dealerTotal) { // Both players have the same total
        console.log("Draw!");
        console.log(`Player Total: ${playerTotal}`);
        console.log(`Dealer Total: ${dealerTotal}`);
        console.info(playerCards);
        console.info(dealerCards);
        playerTotal = 0;
        dealerTotal = 0;
        console.log(`Player Total: ${playerTotal}`);
        console.log(`Dealer Total: ${dealerTotal}`);
        console.log(`Player Wins: ${playerWin}`);
        console.log(`Dealer Wins: ${dealerWin}`);
        isGameAlive = false;
        return;
    } 
}

console.log(isGameAlive);