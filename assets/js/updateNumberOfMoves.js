export let numberOfMoves = 0;
const divNumberOfMoves = document.querySelector('.play_number');
divNumberOfMoves.innerHTML = `
    <p>${numberOfMoves++}</p>
    <p>jogadas</p>
  `

export function updateNumberOfMoves() {
  return divNumberOfMoves.innerHTML = `
    <p>${numberOfMoves++}</p>
    <p>jogadas</p>
  `
}

/* VERIFICA DE QUEM É A VEZ DE JOGAR: */
export function checkWhoseTurnToPlay() {
  const divTurntoPlay = document.querySelector('.turn');
  const divPlayerCard = document.querySelector('.player_card')
  const divOpponentCard = document.querySelector('.opponent_card')
 
  if(numberOfMoves % 2 == 0) {
    divTurntoPlay.innerHTML = `
      <p>Sua vez de escolher um atributo</p>
    `
    divPlayerCard.style.transform = 'rotateY(180deg)';
    divOpponentCard.style.transform = 'none';
 
    return 'playerTurn';
  } else {
    document.querySelector('.play-btn').disabled = false;
    document.querySelector('.draw-btn').disabled = true;

    divTurntoPlay.innerHTML = `
      <p>Vez do oponente de escolher um atributo</p>
    `
    divOpponentCard.style.transform = 'rotateY(180deg)';
    divPlayerCard.style.transform = 'none';
    
    return 'opponentTurn';
  }
}