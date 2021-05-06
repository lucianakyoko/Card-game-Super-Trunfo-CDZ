import { playerDeck } from '../js/cardsDistribution.js';
import { opponentDeck } from '../js/cardsDistribution.js';

/* SORTEIA AS CARTAS DA JOGADA:*/
export function drawCards(deck) {
  const cardNumber = Math.floor(Math.random() * deck.length);
  return cardNumber;
}

/* MOSTRA A CARTA SORTEADA E SEUS ATRIBUTOS: */
//Carta do Jogador:
export let playerCardNumber;
export let playerCard; 
export function displayPlayerCard() {
  playerCardNumber = drawCards(playerDeck);
  playerCard = playerDeck[playerCardNumber];
  
  const divPlayerCardFront = document.querySelector('.player_card_front');

  divPlayerCardFront.style.backgroundImage = `url(${playerCard.image})`;

  divPlayerCardFront.innerHTML = `
    <h2>${playerCard.knight}</h2>
    <span>${playerCard.score}</span>

    <div class="player_card_attributes">
      <div class="card_attribute_cosmos">
        <input type="radio" name="attribute_player" id="cosmoPlayer">
        <label for="cosmoPlayer">cosmo ${playerCard.attributes.cosmos}</label>
      </div>
      <div class="card_attribute_attack">
        <input type="radio" name="attribute_player" id="attackPlayer">
        <label for="attackPlayer">ataque ${playerCard.attributes.attack}</label>
      </div>
      <div class="card_attribute_defense">
        <input type="radio" name="attribute_player" id="defensePlayer">
        <label for="defensePlayer">defesa ${playerCard.attributes.defense}</label>
      </div>
    </div>
  `
  return playerCardNumber, playerCard;
}

//Carta do Oponente:
export let opponentCardNumber;
export let opponentCard;

export function displayOpponentCard() {
  opponentCardNumber = drawCards(opponentDeck);
  opponentCard = opponentDeck[opponentCardNumber];

  const divOpponentCardFront = document.querySelector('.opponent_card_front');
  divOpponentCardFront.style.backgroundImage = `url(${opponentCard.image})`;

  divOpponentCardFront.innerHTML = `
    <h2>${opponentCard.knight}</h2>
    <span>${opponentCard.score}</span>

    <div class="opponent_card_attributes">
      <div class="card_attribute_cosmos">
        <input type="radio" name="attribute_opponent" id="cosmoOpponent">
        <label for="cosmoOpponent">cosmo ${opponentCard.attributes.cosmos}</label>
      </div>
      <div class="card_attribute_attack">
        <input type="radio" name="attribute_opponent" id="attackOpponent">
        <label for="attackOpponent">ataque ${opponentCard.attributes.attack}</label>
      </div>
      <div class="card_attribute_defense">
        <input type="radio" name="attribute_opponent" id="defenseOpponent">
        <label for="defenseOpponent">defesa ${opponentCard.attributes.defense}</label>
      </div>
    </div>
  `
  return opponentCardNumber, opponentCard;
}
