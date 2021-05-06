import {divNumberOfCardsPlayer} from '../js/index.js';
import {divNumberOfCardsOpponent} from '../js/index.js';
import { playerDeck } from '../js/cardsDistribution.js';
import { opponentDeck } from '../js/cardsDistribution.js';

export const score = (winnerDeck, loserDeck, winnerCardNumber, loserCardNumber) =>{
  winnerDeck.splice(winnerCardNumber, 1);
  loserDeck.splice(loserCardNumber, 1);

  divNumberOfCardsPlayer.innerHTML = `
    <p>Suas cartas:</p>
    <p>${playerDeck.length}</p>
  `

  divNumberOfCardsOpponent.innerHTML = `
    <p>Cartas do oponente:</p>
    <p>${opponentDeck.length}</p>
  `
}

