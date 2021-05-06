import { playerCard } from '../js/drawCards.js';
import { opponentCard } from '../js/drawCards.js';

export let playerScore = 0;
export let opponentScore = 0;

export function getScoreNumber(winner) {
  const playerScoreNumber = playerCard.score;
  const opponentScoreNumber = opponentCard.score;

  const divPlayerScore = document.querySelector('.player_score');
  const divOpponentScore = document.querySelector('.opponent_score');

  if(winner == 'player') {
    return divPlayerScore.innerHTML = `
      <p>${playerScore += playerScoreNumber}</p>
      <p>pts</p>
    `,
    divOpponentScore.innerHTML = `
      <p>${opponentScore}</p>
      <p>pts</p>
    `,
    playerScore,
    opponentScore

  } else if(winner == 'atie') {
    return divPlayerScore.innerHTML = `
      <p>${playerScore += playerScoreNumber / 2}</p>
      <p>pts</p>
    `,
    divOpponentScore.innerHTML = `
      <p>${opponentScore += opponentScoreNumber / 2}</p>
      <p>pts</p>
    `,
    playerScore,
    opponentScore
  
  } else {
    return divPlayerScore.innerHTML = `
      <p>${playerScore}</p>
      <p>pts</p>
    `,
    divOpponentScore.innerHTML = `
      <p>${opponentScore += opponentScoreNumber}</p>
      <p>pts</p>
    `,
    playerScore,
    opponentScore
  }
  
}
