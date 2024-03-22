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

const backCard = {
  image: 'https://www.deckofcardsapi.com/static/img/back.png'
}

const MSG_LOOKUPS = {
  null: 'Game is on!',
  'tie': "It's push! 🥸",
  'player': "You Win! 🥳",
  'dealer': "You Lose! 🥶",
  'pbj': "Wow You get Blackjack! 🤩",
  'dbj': "Dealer gets Blackjack! 😅"
}

const sounds = {
  bgm: "./assets/audio/fuzzball_parade.mp3",
  bet: "./assets/audio/bet.mp3",
  deal: "./assets/audio/deal.mp3"
}

/*----- state variables -----*/
let shuffledDeck;
// obj;
let deckLeft;
// integer, how many cards left in the deck
let hands;
// obj: dealer: '6D', '4H', player: '2S', 'JD'
let scores;
// obj: dealer: 0, player: 0
let winner;
// obj: 'dealer', 'player'
let hitDouble;
let hitStand;
let faceDownCard;
let deckShuffled;
let playerHardHand;
let isNewGame;
let audioPausedTime;
let isCalulated;

/*----- cached elements  -----*/
const msgEl = document.getElementById('msg');
const cardCountEl = document.getElementById('card-count');
const hitBtn = document.getElementById('hit');
const resetBtn = document.getElementById('reset');
const zeroBtn = document.getElementById('zero');
const roundBtn = document.getElementById('round');
const standBtn = document.getElementById('stand');
const doubleBtn = document.getElementById('double');
const playerHandCard = document.querySelectorAll('#player-hand img');
const dealerHandCard = document.querySelectorAll('#dealer-hand img');
const playerScore = document.getElementById('player-score');
const dealerScore = document.getElementById('dealer-score');
const betAmount = document.getElementById('bet-input');
const chipBtns = document.querySelectorAll('.bet-amount');
const bankAmount = document.getElementById('bankroll');
const betBtn = document.getElementById('bet');
const bgmEl = document.getElementById('bgm');
const bgmBtn = document.getElementById('bgm-btn');


/*----- event listeners -----*/
betBtn.addEventListener('click', handleBet);
zeroBtn.addEventListener('click', function () {
  betAmount.innerText = '0';
});
hitBtn.addEventListener('click', handleHit);
standBtn.addEventListener('click', handleStand);
doubleBtn.addEventListener('click', handleDouble);
chipBtns.forEach(chipBtn => {
  chipBtn.addEventListener('click', handleChip);
});

resetBtn.addEventListener('click', init);
roundBtn.addEventListener('click', roundInit);
bgmBtn.addEventListener('click', handleAudio);

/*----- functions -----*/
init();

function init() {
  resetScoresAndHands();
  clearGameVariables();

  audioPausedTime = 0;
  rendercall = 0;
  deckShuffled = false;
  bankAmount.innerText = '1000';
  shuffledDeck = getShuffledDeck(originalDeck);
  deckLeft = shuffledDeck.length;
  cardCountEl.innerText = `${shuffledDeck.length} Card Left`;
  render();
}

function roundInit() {
  if (!deckShuffled && shuffledDeck.length < originalDeck.length) {
    shuffledDeck = getShuffledDeck(shuffledDeck);
    deckShuffled = true;
  }

  resetScoresAndHands();
  clearGameVariables();
  render();
}

function resetScoresAndHands() {
  scores = {
    dealer: 0,
    player: 0
  };

  hands = {
    dealer: [],
    player: []
  };
}

function clearGameVariables() {
  isCalulated = false;
  faceDownCard = false;
  winner = false;
  hitDouble = false;
  hitStand = false;
  playerHardHand = true;
  betAmount.innerText = '0';
  isNewGame = true;

  for (let obj of playerHandCard) {
    obj.removeAttribute('src');
  }
  for (let obj of dealerHandCard) {
    obj.removeAttribute('src');
  }
}

function playAnAudio(soundName) {
  let sound = new Audio(sounds[soundName]);
  sound.volumn = 0.5;
  sound.play();
}


function handleAudio() {
  if (bgmEl.paused) {
    bgmEl.currentTime = audioPausedTime;
    bgmEl.play();
  } else {
    bgmEl.pause();
    audioPausedTime = bgmEl.currentTime;
  }
}

function handleDouble() {
  bankAmount.innerText = parseInt(bankAmount.innerText) + parseInt(betAmount.innerText);
  betAmount.innerText = parseInt(betAmount.innerText) * 2;
  bankAmount.innerText = parseInt(bankAmount.innerText) - parseInt(betAmount.innerText);
  hitDouble = 'first';
  doubleBtn.disabled = true;
}

function handleStand() {
  hitStand = true;
  while (scores.dealer < 17) {
    hands.dealer.push(shuffledDeck.pop());
    render();
  }
  render();
}

function handleHit() {
  if (hitDouble !== 'second' && scores.player < 21) {
    hands.player.push(shuffledDeck.pop());
    render();
  }

  if (hitDouble === 'first') {
    hitDouble = 'second';
    hitBtn.disabled = true;
    handleStand();
  }
  playAnAudio("deal");
}

function handleChip(evt) {
  const button = evt.target;
  let betMoney = parseInt(betAmount.innerText);
  betMoney += parseInt(button.innerText.replace('$', ''));
  if (betMoney > parseInt(bankAmount.innerText) + 1) {
    return;
  }
  betAmount.innerText = String(betMoney);
  playAnAudio("bet");
}

function handleBet() {
  isNewGame = false;
  winner = null;
  if (betAmount.innerText === '0') {
    return;
  } else {
    bankAmount.innerText = parseInt(bankAmount.innerText) - parseInt(betAmount.innerText);
    hands.player.push(shuffledDeck.pop());
    hands.player.push(shuffledDeck.pop());
    hands.dealer.push(shuffledDeck.pop());
    hands.dealer.push(shuffledDeck.pop());
    renderVisibility('Ongoing');
  }
  render();
  playAnAudio("deal");
}

function renderVisibility() {
  if (isNewGame) {
    chipBtns.forEach(btn => {
      btn.style.visibility = 'visible';
    });
    betBtn.disabled = false;
    hitBtn.disabled = false;
    doubleBtn.disabled = false;
    zeroBtn.style.visibility = 'visible';
    hitBtn.style.visibility = 'hidden';
    standBtn.style.visibility = 'hidden';
    doubleBtn.style.visibility = 'hidden';
    roundBtn.style.visibility = 'hidden';
  } else {
    chipBtns.forEach(btn => {
      btn.style.visibility = 'hidden';
    });
    betBtn.disabled = true;
    if (!playerHardHand || hitDouble === 'first' || hitDouble === 'second') {
      doubleBtn.disabled = true;
    } else {
      doubleBtn.disabled = false;
    }
    zeroBtn.style.visibility = 'hidden';
    hitBtn.style.visibility = 'visible';
    standBtn.style.visibility = 'visible';
    doubleBtn.style.visibility = 'visible';
  }

}

function getShuffledDeck(deck) {
  let tempDeck;
  if (deck === originalDeck) {
    tempDeck = Object.values(originalDeck).concat(Object.values(originalDeck));
  } else {
    tempDeck = Object.values(deck);
  }

  const newShuffledDeck = [];
  while (tempDeck.length) {
    const rndIdx = Math.floor(Math.random() * tempDeck.length);
    newShuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  return newShuffledDeck;
}

function renderHands() {
  cardCountEl.innerText = `${shuffledDeck.length} Card Left`;

  for (let i = 0; i < playerHandCard.length; i++) {
    if (!playerHandCard[i].src && hands.player.length > 0) {
      playerHandCard[i].src = hands.player[0].image;
      scores.player += checkCardValue(hands.player[0], 'player');
      hands.player.shift();
    }
  }

  for (let i = 0; i < dealerHandCard.length; i++) {
    if (!dealerHandCard[i].src && hands.dealer.length > 0) {
      if (i === 0) {
        faceDownCard = hands.dealer[0];
        dealerHandCard[i].src = backCard.image;
      } else {
        dealerHandCard[i].src = hands.dealer[0].image;
      }
      scores.dealer += checkCardValue(hands.dealer[0], 'dealer');
      hands.dealer.shift();
    }
  }
  checkWinner();
}

function checkHardHand(checker) {
  if (checker === 'player') {
    if (scores.player + 11 > 21) {
      return 1;
    } else {
      playerHardHand = false;
      return 11;
    }
  } else {
    return scores.dealer + 11 > 21 ? 1 : 11;
  }
}

function checkCardValue(card, checker) {
  if (card) {
    switch (card.value) {
      case 'JACK':
      case 'QUEEN':
      case 'KING':
        return 10;
      case 'ACE':
        return checkHardHand(checker);
      default:
        return parseInt(card.value);
    }
  }
}

function checkWinner() {
  if (scores.player > 21) {
    winner = 'dealer';
  } else if (scores.dealer > 21) {
    winner = 'player';
  } else if (scores.player === 21 && scores.dealer === 21) {
    winner = 'tie';
  } else if (scores.player === 21) {
    winner = 'pbj'
  } else if (scores.dealer === 21) {
    winner = 'dbj'
  }

  if ((scores.dealer >= 17 && !winner && hitStand)) {
    if (scores.dealer < scores.player) {
      winner = 'player';
    } else if (scores.dealer > scores.player) {
      winner = 'dealer';
    } else {
      winner = 'tie';
    }
  }
}


function renderMsg() {
  if (!scores.player && bankAmount.innerText !== '0') {
    msgEl.innerText = "Place some bets!";
  } else if (bankAmount.innerText === '0' && betAmount === '0') {
    msgEl.innerText = "You're Broke! Reset the Game.";
  } else {
    if (winner in MSG_LOOKUPS) {
      msgEl.innerText = MSG_LOOKUPS[winner];
    }
  }
}

function renderScores() {
  if (!hitStand && !winner && faceDownCard) {
    dealerScore.innerText = `Dealer's score: ${scores.dealer - checkCardValue(faceDownCard, 'dealer')}`;
  } else {
    dealerScore.innerText = `Dealer's score: ${scores.dealer}`;
  }
  playerScore.innerText = `Player's score: ${scores.player}`;
}

function renderFaceDown() {
  if (winner) {
    const firstCard = document.getElementById('d-card-1');
    firstCard.src = faceDownCard.image;

    hitBtn.style.visibility = 'hidden';
    standBtn.style.visibility = 'hidden';
    doubleBtn.style.visibility = 'hidden';
    roundBtn.style.visibility = 'visible';
  }
}

function renderBank() {
  if (winner && !isCalulated) {
    isCalulated = true;
    let betAmountInt = parseInt(betAmount.innerText)
    let winning = 0;

    if (winner === 'pbj') {
      winning = betAmountInt * 1.5;
    } else if (winner === 'player') {
      winning = betAmountInt * 1;
    } else if (winner === 'tie') {
      winning = 0;
    } else if (winner === 'dealer' || winner === 'dbj') {
      winning = betAmountInt * -1;
    }
    
    bankAmount.innerText = parseInt(bankAmount.innerText) + betAmountInt + winning;
  }
}

function render() {
  renderVisibility();
  renderHands();
  renderMsg();
  renderScores();
  renderFaceDown();
  renderBank();
}