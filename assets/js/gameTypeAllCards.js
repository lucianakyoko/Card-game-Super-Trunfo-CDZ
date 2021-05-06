import {divNumberOfCardsPlayer} from '../js/index.js';
import {divNumberOfCardsOpponent} from '../js/index.js';
import { playerDeck } from '../js/cardsDistribution.js';
import { opponentDeck } from '../js/cardsDistribution.js';

export const allCards = (winnerDeck, loserDeck, winnerCardNumber, loserCardNumber, winner) => {
  if(winner == 'atie') {
    winnerDeck.splice(winnerDeck.length, 0, winnerDeck.splice(winnerCardNumber, 1)[0]);
    loserDeck.splice(loserDeck.length, 0, loserDeck.splice(loserCardNumber, 1)[0]);

    divNumberOfCardsPlayer.innerHTML = `
      <p>Suas cartas:</p>
      <p>${playerDeck.length}</p>
    `

    divNumberOfCardsOpponent.innerHTML = `
      <p>Cartas do oponente:</p>
      <p>${opponentDeck.length}</p>
    `

  } else {
    winnerDeck.splice(winnerDeck.length, 0, winnerDeck.splice(winnerCardNumber, 1)[0]);
    winnerDeck.splice(winnerDeck.length, 0, loserDeck.splice(loserCardNumber, 1)[0]);

    divNumberOfCardsPlayer.innerHTML = `
      <p>Suas cartas:</p>
      <p>${playerDeck.length}</p>
    `

    divNumberOfCardsOpponent.innerHTML = `
      <p>Cartas do oponente:</p>
      <p>${opponentDeck.length}</p>
    `
  }
}