import { allKnights } from '../js/knights.js';

/* DISTRIBUIÇÃO DOS DECKS DE CARTAS: */
function cardDistribution(knightList) {
  const cardsDeck = [];
  while(cardsDeck.length < allKnights.length / 2) {
    let index = Math.floor(Math.random() * allKnights.length);

    if(cardsDeck.indexOf(knightList[index]) < 0 ) {
      cardsDeck.push(knightList[index]);
    }
  }
  return cardsDeck;
}

export const playerDeck = cardDistribution(allKnights);
export const opponentDeck = [];

allKnights.forEach(knight => {
  if(playerDeck.indexOf(knight) == -1) {
    opponentDeck.push(knight);
  }
})
 


