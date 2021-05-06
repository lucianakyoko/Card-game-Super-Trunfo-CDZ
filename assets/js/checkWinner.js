import { playerDeck } from '../js/cardsDistribution.js';
import { opponentDeck } from '../js/cardsDistribution.js';
import { opponentCardNumber } from '../js/drawCards.js';
import { playerCardNumber } from '../js/drawCards.js';
import { playerCard } from '../js/drawCards.js';
import { opponentCard } from '../js/drawCards.js';
import { data } from '../js/getUserInput.js';


export function getMatchWinner(attribute) {
  const playerCosmo = playerCard.attributes.cosmos;
  const playerAttack = playerCard.attributes.attack;
  const playerDefense = playerCard.attributes.defense;

  const opponentCosmo = opponentCard.attributes.cosmos;
  const opponentAttack = opponentCard.attributes.attack;
  const opponentDefense = opponentCard.attributes.defense;
  
  const divPlayerCard = document.querySelector('.player_card');
  const divOpponentCard = document.querySelector('.opponent_card');
  const divResult = document.querySelector('.result');
  
  const resultMessage = ['Você venceu!', 'Empatou!', 'Você perdeu!'];
  const winner = ['player', 'atie', 'opponent'];

  divPlayerCard.style.transform = 'rotateY(180deg)';
  divOpponentCard.style.transform = 'rotateY(180deg)';

  divResult.style.display = 'block';


  if(attribute == 'cosmos') {
    if(playerCosmo > opponentCosmo) {
      divResult.innerHTML = `
        <p>${resultMessage[0]}</p>
        <p>x</p>
      `
      
      return winner[0];

    } else if(playerCosmo < opponentCosmo) {
      divResult.innerHTML = `
        <p>${resultMessage[2]}</p>
        <p>x</p>
      `
      return winner[2];

    } else {
      divResult.innerHTML = `
        <p>${resultMessage[1]}</p>
        <p>x</p>
      `
      return winner[1];
    }

  } else if(attribute == 'attack') {
      if(playerAttack > opponentAttack) {
        divResult.innerHTML = `
          <p>${resultMessage[0]}</p>
          <p>x</p>
        `
        
        return winner[0];

      } else if(playerAttack < opponentAttack) {
        divResult.innerHTML = `
        <p>${resultMessage[2]}</p>
        <p>x</p>
      `
        
        return winner[2];

      }else {
        divResult.innerHTML = `
          <p>${resultMessage[1]}</p>
          <p>x</p>
      `
          
        return winner[1]; 
      }
  } else if(attribute == 'defense'){
    if(playerDefense > opponentDefense) {
      divResult.innerHTML = `
        <p>${resultMessage[0]}</p>
        <p>x</p>
      `
        
      return winner[0];
    } else if(playerDefense < opponentDefense) {
      divResult.innerHTML = `
        <p>${resultMessage[2]}</p>
        <p>x</p>
      `
        
      return winner[2];
    }else {
      divResult.innerHTML = `
        <p>${resultMessage[1]}</p>
        <p>x</p>
      `
        
      return winner[1]; 
    }
  } else {
    return;
  }
  
}


/*  */
const  allCards = (winnerDeck, loserDeck, winnerCardNumber, loserCardNumber, winner) => {
  if(winner == 'atie') {
    winnerDeck.splice(winnerDeck.length, 0, winnerDeck.splice(winnerCardNumber, 1)[0]);
    loserDeck.splice(loserDeck.length, 0, loserDeck.splice(loserCardNumber, 1)[0]);
  } else {
    winnerDeck.splice(winnerDeck.length, 0, winnerDeck.splice(winnerCardNumber, 1)[0]);
    winnerDeck.splice(winnerDeck.length, 0, loserDeck.splice(loserCardNumber, 1)[0]);
  }
}

/*  */
const score = (winnerDeck, loserDeck, winnerCardNumber, loserCardNumber) =>{
  winnerDeck.splice(winnerCardNumber, 1);
  loserDeck.splice(loserCardNumber, 1);
}
