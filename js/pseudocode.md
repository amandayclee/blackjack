# Pseudocode

## 1) Setup
   - 1.1) Define const variables
     - rule: an object translate jack, queen, king into 10, and A into 1 and 11
   - 1.2) Define state variables
     - deck: an array with all card values
     - player's hand: an array that records what player's cards are
     - dealer's hand: an array that records what dealer's cards are
     - bet: an integer that records the amount wagered by the player
     - bank: an integer that records the amount of money the player has remaining
   - 1.3) Cache elements from HTML file
     - play button
     - (stretch goal) rule button
     - reset button
     - play's score box
     - dealer's score box
     - (stretch goal) bank balance
     - (stretch goal) bet button
     - hit button
     - stand button
     - (stretch goal) double bet button
     - (stretch goal) split button

## 2) Game Loading
   - 2.1) Initialize the game
      - Render the initial values and design of the game

## 3) Play - player
   - 3.1) (stretch goal) Place wagers
   - 3.2) Hit "Bet" button - card
   - 3.3) Make decisions
     - Click "Hit" button
     - Click "Stand" button
     - (stretch goal) Click "Double" button
     - (stretch goal) Click "Split" button

## 4) Play - dealer
   - 4.1) Make decisions

## 5) Result - both dealer and player hit stand
   - 5.1) Condition
     - Player win vs. dealer lose
     - Player lose vs. dealer win
     - Push
   - 5.2) Calculate player's balance
   - 5.3) Render result UI

## 6) Start new round
   - 6.1) Render bet UI with existing bank

## 7) End game
   - 7.1) Condition
     - Use all the cards from the deck
     - (stretch goal) Player is bankrupt
   - 7.2) Render endgame UI

## 8) Reset game
   - 8.1) Initialize the game
