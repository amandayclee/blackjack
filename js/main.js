/*----- constants -----*/
const originalDeck = {
  '2D': {
    code: '2D',
    image: 'https://deckofcardsapi.com/static/img/2D.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/2D.svg',
      png: 'https://deckofcardsapi.com/static/img/2D.png'
    },
    value: '2',
    suit: 'DIAMONDS'
  },
  '6D': {
    code: '6D',
    image: 'https://deckofcardsapi.com/static/img/6D.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/6D.svg',
      png: 'https://deckofcardsapi.com/static/img/6D.png'
    },
    value: '6',
    suit: 'DIAMONDS'
  },
  '8D': {
    code: '8D',
    image: 'https://deckofcardsapi.com/static/img/8D.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/8D.svg',
      png: 'https://deckofcardsapi.com/static/img/8D.png'
    },
    value: '8',
    suit: 'DIAMONDS'
  },
  KC: {
    code: 'KC',
    image: 'https://deckofcardsapi.com/static/img/KC.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/KC.svg',
      png: 'https://deckofcardsapi.com/static/img/KC.png'
    },
    value: 'KING',
    suit: 'CLUBS'
  },
  '8C': {
    code: '8C',
    image: 'https://deckofcardsapi.com/static/img/8C.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/8C.svg',
      png: 'https://deckofcardsapi.com/static/img/8C.png'
    },
    value: '8',
    suit: 'CLUBS'
  },
  '5D': {
    code: '5D',
    image: 'https://deckofcardsapi.com/static/img/5D.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/5D.svg',
      png: 'https://deckofcardsapi.com/static/img/5D.png'
    },
    value: '5',
    suit: 'DIAMONDS'
  },
  'AH': {
    code: 'AH',
    image: 'https://deckofcardsapi.com/static/img/AH.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/AH.svg',
      png: 'https://deckofcardsapi.com/static/img/AH.png'
    },
    value: 'ACE',
    suit: 'HEARTS'
  },
  'AD': {
    code: 'AD',
    image: 'https://deckofcardsapi.com/static/img/aceDiamonds.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/aceDiamonds.svg',
      png: 'https://deckofcardsapi.com/static/img/aceDiamonds.png'
    },
    value: 'ACE',
    suit: 'DIAMONDS'
  },
  '0C': {
    code: '0C',
    image: 'https://deckofcardsapi.com/static/img/0C.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/0C.svg',
      png: 'https://deckofcardsapi.com/static/img/0C.png'
    },
    value: '10',
    suit: 'CLUBS'
  },
  '2H': {
    code: '2H',
    image: 'https://deckofcardsapi.com/static/img/2H.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/2H.svg',
      png: 'https://deckofcardsapi.com/static/img/2H.png'
    },
    value: '2',
    suit: 'HEARTS'
  },
  '7S': {
    code: '7S',
    image: 'https://deckofcardsapi.com/static/img/7S.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/7S.svg',
      png: 'https://deckofcardsapi.com/static/img/7S.png'
    },
    value: '7',
    suit: 'SPADES'
  },
  '0H': {
    code: '0H',
    image: 'https://deckofcardsapi.com/static/img/0H.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/0H.svg',
      png: 'https://deckofcardsapi.com/static/img/0H.png'
    },
    value: '10',
    suit: 'HEARTS'
  },
  '9D': {
    code: '9D',
    image: 'https://deckofcardsapi.com/static/img/9D.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/9D.svg',
      png: 'https://deckofcardsapi.com/static/img/9D.png'
    },
    value: '9',
    suit: 'DIAMONDS'
  },
  'KS': {
    code: 'KS',
    image: 'https://deckofcardsapi.com/static/img/KS.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/KS.svg',
      png: 'https://deckofcardsapi.com/static/img/KS.png'
    },
    value: 'KING',
    suit: 'SPADES'
  },
  '0S': {
    code: '0S',
    image: 'https://deckofcardsapi.com/static/img/0S.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/0S.svg',
      png: 'https://deckofcardsapi.com/static/img/0S.png'
    },
    value: '10',
    suit: 'SPADES'
  },
  '5S': {
    code: '5S',
    image: 'https://deckofcardsapi.com/static/img/5S.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/5S.svg',
      png: 'https://deckofcardsapi.com/static/img/5S.png'
    },
    value: '5',
    suit: 'SPADES'
  },
  '5C': {
    code: '5C',
    image: 'https://deckofcardsapi.com/static/img/5C.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/5C.svg',
      png: 'https://deckofcardsapi.com/static/img/5C.png'
    },
    value: '5',
    suit: 'CLUBS'
  },
  '3C': {
    code: '3C',
    image: 'https://deckofcardsapi.com/static/img/3C.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/3C.svg',
      png: 'https://deckofcardsapi.com/static/img/3C.png'
    },
    value: '3',
    suit: 'CLUBS'
  },
  'JS': {
    code: 'JS',
    image: 'https://deckofcardsapi.com/static/img/JS.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/JS.svg',
      png: 'https://deckofcardsapi.com/static/img/JS.png'
    },
    value: 'JACK',
    suit: 'SPADES'
  },
  'KD': {
    code: 'KD',
    image: 'https://deckofcardsapi.com/static/img/KD.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/KD.svg',
      png: 'https://deckofcardsapi.com/static/img/KD.png'
    },
    value: 'KING',
    suit: 'DIAMONDS'
  },
  '6S': {
    code: '6S',
    image: 'https://deckofcardsapi.com/static/img/6S.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/6S.svg',
      png: 'https://deckofcardsapi.com/static/img/6S.png'
    },
    value: '6',
    suit: 'SPADES'
  },
  '2C': {
    code: '2C',
    image: 'https://deckofcardsapi.com/static/img/2C.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/2C.svg',
      png: 'https://deckofcardsapi.com/static/img/2C.png'
    },
    value: '2',
    suit: 'CLUBS'
  },
  'AS': {
    code: 'AS',
    image: 'https://deckofcardsapi.com/static/img/AS.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/AS.svg',
      png: 'https://deckofcardsapi.com/static/img/AS.png'
    },
    value: 'ACE',
    suit: 'SPADES'
  },
  '2S': {
    code: '2S',
    image: 'https://deckofcardsapi.com/static/img/2S.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/2S.svg',
      png: 'https://deckofcardsapi.com/static/img/2S.png'
    },
    value: '2',
    suit: 'SPADES'
  },
  'JC': {
    code: 'JC',
    image: 'https://deckofcardsapi.com/static/img/JC.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/JC.svg',
      png: 'https://deckofcardsapi.com/static/img/JC.png'
    },
    value: 'JACK',
    suit: 'CLUBS'
  },
  '5H': {
    code: '5H',
    image: 'https://deckofcardsapi.com/static/img/5H.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/5H.svg',
      png: 'https://deckofcardsapi.com/static/img/5H.png'
    },
    value: '5',
    suit: 'HEARTS'
  },
  '3D': {
    code: '3D',
    image: 'https://deckofcardsapi.com/static/img/3D.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/3D.svg',
      png: 'https://deckofcardsapi.com/static/img/3D.png'
    },
    value: '3',
    suit: 'DIAMONDS'
  },
  '7D': {
    code: '7D',
    image: 'https://deckofcardsapi.com/static/img/7D.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/7D.svg',
      png: 'https://deckofcardsapi.com/static/img/7D.png'
    },
    value: '7',
    suit: 'DIAMONDS'
  },
  'KH': {
    code: 'KH',
    image: 'https://deckofcardsapi.com/static/img/KH.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/KH.svg',
      png: 'https://deckofcardsapi.com/static/img/KH.png'
    },
    value: 'KING',
    suit: 'HEARTS'
  },
  '4D': {
    code: '4D',
    image: 'https://deckofcardsapi.com/static/img/4D.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/4D.svg',
      png: 'https://deckofcardsapi.com/static/img/4D.png'
    },
    value: '4',
    suit: 'DIAMONDS'
  },
  'AC': {
    code: 'AC',
    image: 'https://deckofcardsapi.com/static/img/AC.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/AC.svg',
      png: 'https://deckofcardsapi.com/static/img/AC.png'
    },
    value: 'ACE',
    suit: 'CLUBS'
  },
  '4C': {
    code: '4C',
    image: 'https://deckofcardsapi.com/static/img/4C.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/4C.svg',
      png: 'https://deckofcardsapi.com/static/img/4C.png'
    },
    value: '4',
    suit: 'CLUBS'
  },
  'QS': {
    code: 'QS',
    image: 'https://deckofcardsapi.com/static/img/QS.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/QS.svg',
      png: 'https://deckofcardsapi.com/static/img/QS.png'
    },
    value: 'QUEEN',
    suit: 'SPADES'
  },
  '9C': {
    code: '9C',
    image: 'https://deckofcardsapi.com/static/img/9C.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/9C.svg',
      png: 'https://deckofcardsapi.com/static/img/9C.png'
    },
    value: '9',
    suit: 'CLUBS'
  },
  'QD': {
    code: 'QD',
    image: 'https://deckofcardsapi.com/static/img/QD.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/QD.svg',
      png: 'https://deckofcardsapi.com/static/img/QD.png'
    },
    value: 'QUEEN',
    suit: 'DIAMONDS'
  },
  '3S': {
    code: '3S',
    image: 'https://deckofcardsapi.com/static/img/3S.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/3S.svg',
      png: 'https://deckofcardsapi.com/static/img/3S.png'
    },
    value: '3',
    suit: 'SPADES'
  },
  '4H': {
    code: '4H',
    image: 'https://deckofcardsapi.com/static/img/4H.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/4H.svg',
      png: 'https://deckofcardsapi.com/static/img/4H.png'
    },
    value: '4',
    suit: 'HEARTS'
  },
  '6H': {
    code: '6H',
    image: 'https://deckofcardsapi.com/static/img/6H.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/6H.svg',
      png: 'https://deckofcardsapi.com/static/img/6H.png'
    },
    value: '6',
    suit: 'HEARTS'
  },
  'JD': {
    code: 'JD',
    image: 'https://deckofcardsapi.com/static/img/JD.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/JD.svg',
      png: 'https://deckofcardsapi.com/static/img/JD.png'
    },
    value: 'JACK',
    suit: 'DIAMONDS'
  },
  '0D': {
    code: '0D',
    image: 'https://deckofcardsapi.com/static/img/0D.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/0D.svg',
      png: 'https://deckofcardsapi.com/static/img/0D.png'
    },
    value: '10',
    suit: 'DIAMONDS'
  },
  '3H': {
    code: '3H',
    image: 'https://deckofcardsapi.com/static/img/3H.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/3H.svg',
      png: 'https://deckofcardsapi.com/static/img/3H.png'
    },
    value: '3',
    suit: 'HEARTS'
  },
  '4S': {
    code: '4S',
    image: 'https://deckofcardsapi.com/static/img/4S.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/4S.svg',
      png: 'https://deckofcardsapi.com/static/img/4S.png'
    },
    value: '4',
    suit: 'SPADES'
  },
  '8S': {
    code: '8S',
    image: 'https://deckofcardsapi.com/static/img/8S.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/8S.svg',
      png: 'https://deckofcardsapi.com/static/img/8S.png'
    },
    value: '8',
    suit: 'SPADES'
  },
  '7C': {
    code: '7C',
    image: 'https://deckofcardsapi.com/static/img/7C.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/7C.svg',
      png: 'https://deckofcardsapi.com/static/img/7C.png'
    },
    value: '7',
    suit: 'CLUBS'
  },
  '7H': {
    code: '7H',
    image: 'https://deckofcardsapi.com/static/img/7H.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/7H.svg',
      png: 'https://deckofcardsapi.com/static/img/7H.png'
    },
    value: '7',
    suit: 'HEARTS'
  },
  'QH': {
    code: 'QH',
    image: 'https://deckofcardsapi.com/static/img/QH.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/QH.svg',
      png: 'https://deckofcardsapi.com/static/img/QH.png'
    },
    value: 'QUEEN',
    suit: 'HEARTS'
  },
  'QC': {
    code: 'QC',
    image: 'https://deckofcardsapi.com/static/img/QC.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/QC.svg',
      png: 'https://deckofcardsapi.com/static/img/QC.png'
    },
    value: 'QUEEN',
    suit: 'CLUBS'
  },
  '8H': {
    code: '8H',
    image: 'https://deckofcardsapi.com/static/img/8H.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/8H.svg',
      png: 'https://deckofcardsapi.com/static/img/8H.png'
    },
    value: '8',
    suit: 'HEARTS'
  },
  '6C': {
    code: '6C',
    image: 'https://deckofcardsapi.com/static/img/6C.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/6C.svg',
      png: 'https://deckofcardsapi.com/static/img/6C.png'
    },
    value: '6',
    suit: 'CLUBS'
  },
  'JH': {
    code: 'JH',
    image: 'https://deckofcardsapi.com/static/img/JH.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/JH.svg',
      png: 'https://deckofcardsapi.com/static/img/JH.png'
    },
    value: 'JACK',
    suit: 'HEARTS'
  },
  '9H': {
    code: '9H',
    image: 'https://deckofcardsapi.com/static/img/9H.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/9H.svg',
      png: 'https://deckofcardsapi.com/static/img/9H.png'
    },
    value: '9',
    suit: 'HEARTS'
  },
  '9S': {
    code: '9S',
    image: 'https://deckofcardsapi.com/static/img/9S.png',
    images: {
      svg: 'https://deckofcardsapi.com/static/img/9S.svg',
      png: 'https://deckofcardsapi.com/static/img/9S.png'
    },
    value: '9',
    suit: 'SPADES'
  }
};

/*----- state variables -----*/
let shuffledDeck;
// obj;
let deckLeft;
// integer, how many cards left in the deck
let bet;
// integer, how much does player bet
let hands;
// obj: dealer: '6D', '4H', player: '2S', 'JD'
let scores;
// obj: dealer: 0, player: 0
let winner;
// obj: 'dealer', 'player'

/*----- cached elements  -----*/
const cardCount = document.getElementById('card-count');
const hitBtn = document.getElementById('hit');
const resetBtn = document.getElementById('reset');
const standBtn = document.getElementById('stand');
const playerHandCard = document.querySelectorAll('#player-hand img');
const dealerHandCard = document.querySelectorAll('#dealer-hand img');
const playerScore = document.getElementById('player-score');
const dealerScore = document.getElementById('dealer-score');

/*----- event listeners -----*/
document.getElementById('bet')
  .addEventListener('click', handleBet);

resetBtn.addEventListener('click', init);
hitBtn.addEventListener('click', handleHit);
standBtn.addEventListener('click', handleStand);

/*----- functions -----*/
init();

function init() {
  scores = {
    dealer: [],
    player: []
  };

  hands = {
    dealer: [],
    player: []
  };

  shuffledDeck = getNewShuffledDeck();
  bet = 0;
  deckLeft = shuffledDeck.length;
  render();
}

function handleStand() {
  console.log('test');
}

function handleHit() {
  hands.player.push(shuffledDeck.pop());
  renderHands();
}

function handleBet() {
  const betAmount = document.getElementById('bet-input').value;
  console.log(`bet amount: ${betAmount}`);
  if (betAmount === '0') {
    return;
  } else {
    hands.player.push(shuffledDeck.pop());
    hands.player.push(shuffledDeck.pop());
    hands.dealer.push(shuffledDeck.pop());
    hands.dealer.push(shuffledDeck.pop());
    renderHands();
  }
}

function getNewShuffledDeck() {
  const tempDeck = Object.values(originalDeck);
  const newShuffledDeck = [];
  while (tempDeck.length) {
    const rndIdx = Math.floor(Math.random() * tempDeck.length);
    newShuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  return newShuffledDeck;
}

function renderHands() {
  cardCount.innerText = `${shuffledDeck.length} Card Left`;
  console.log(`it's player hand: ${hands.player.length}`);

  for (let i = 0; i < playerHandCard.length; i++) {
    if (!playerHandCard[i].src && hands.player.length > 0) {
      playerHandCard[i].src = hands.player[0].image;
      scores.player.push(hands.player[0].value);
      hands.player.shift();
    }
  }

  for (let i = 0; i < dealerHandCard.length; i++) {
    if (!dealerHandCard[i].src && hands.dealer.length > 0) {
      dealerHandCard[i].src = hands.dealer[0].image;
      scores.dealer.push(hands.dealer[0].value);
      hands.dealer.shift();
    }
  }
  renderScores();
}

function renderScores() {
  let pScore = 0;
  let dScore = 0;

  for (let obj of scores.dealer) {
    if (obj === 'JACK' || obj === 'QUEEN' || obj === 'KING') {
      dScore += 10;
    } else if (obj === 'ACE') {
      dScore += 1;
    } else {
      dScore += parseInt(obj);
    }
  }

  for (let obj of scores.player) {
    if (obj === 'JACK' || obj === 'QUEEN' || obj === 'KING') {
      pScore += 10;
    } else if (obj === 'ACE') {
      pScore += 1;
    } else {
      pScore += parseInt(obj);
    }
  }

  playerScore.innerText = `Player's score: ${pScore}`;
  dealerScore.innerText = `Dealer's score: ${dScore}`;
}

function render() {
  renderScores();
}