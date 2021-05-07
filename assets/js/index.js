import { data, getPlayerName } from '../js/getUserInput.js';
import { playerDeck } from '../js/cardsDistribution.js';
import { opponentDeck } from '../js/cardsDistribution.js';
import { displayPlayerCard} from '../js/drawCards.js';
import { displayOpponentCard } from '../js/drawCards.js';
import { playerCardNumber } from '../js/drawCards.js';
import { opponentCardNumber } from '../js/drawCards.js';
import { allCards } from '../js/gameTypeAllCards.js';
import { score } from '../js/gameTypeScore.js';

import { updateNumberOfMoves } from '../js/updateNumberOfMoves.js';
import { numberOfMoves } from '../js/updateNumberOfMoves.js';
import { checkWhoseTurnToPlay } from '../js/updateNumberOfMoves.js';
import { getMatchWinner } from '../js/checkWinner.js';
import { getOpponentCardCheckedAttribute } from '../js/getAttributes.js';
import { getPlayerCardCheckedAttribute } from '../js/getAttributes.js';
import { getScoreNumber } from '../js/scorePoints.js';
import { playerScore } from '../js/scorePoints.js';
import { opponentScore } from '../js/scorePoints.js';


/* ADICIONANDO PONTOS NO PLACAR: */
const divPlayerScoreBoard = document.querySelector('.player_score_board');
const divOpponentScoreBoard = document.querySelector('.opponent_score_board');

divPlayerScoreBoard.innerHTML = `
  <p class="player_name">${getPlayerName()}:</p>
  <div class="player_score">
    <p>0</p>
    <p>pts</p>
  </div>
`

divOpponentScoreBoard.innerHTML = `
  <p class="opponent_name">Oponente:</p>
  <div class="opponent_score">
    <p>0</p>
    <p>pts</p>
  </div>
`
/* ===== ===== ===== ===== =====*/


/* NÚMERO DE CARTAS DE CADA JOGADOR: */
export const divNumberOfCardsPlayer = document.querySelector('.player_cards_qtds');
export const divNumberOfCardsOpponent = document.querySelector('.opponent_cards_qtds');

divNumberOfCardsPlayer.innerHTML = `
<p>Suas cartas:</p>
<p>${playerDeck.length}</p>
`

divNumberOfCardsOpponent.innerHTML = `
<p>Cartas do oponente:</p>
<p>${opponentDeck.length}</p>
`
/* ===== ===== ===== ===== =====*/


/* BOTÃO "Sortear Carta:" */
const drawBtn = document.querySelector('.draw-btn');
drawBtn.addEventListener('click', () => {  
  document.querySelector('.play-btn').disabled = true;
  document.querySelector('.draw-btn').disabled = true;

  displayPlayerCard();
  displayOpponentCard();

  updateNumberOfMoves();
  checkWhoseTurnToPlay();

  if(numberOfMoves % 2 == 0) {
    getPlayerCardCheckedAttribute();
  } else {
    getOpponentCardCheckedAttribute();
  }
})
/* ===== ===== ===== ===== =====*/

let playerWinQtd = 0;
let playerLoseQtd = 0;
let playerAtieQtd = 0;

let opponentWinQtd = 0;
let opponentLoseQtd = 0;
let opponentAtieQtd = 0;

/* BOTÃO "Jogar" */
const playBtn = document.querySelector('.play-btn');
playBtn.addEventListener('click', () => {
  getMatchWinner(getPlayerCardCheckedAttribute());

  if(data.gameType == 'allcards') {
    if(getMatchWinner(getPlayerCardCheckedAttribute()) == 'player') {
      allCards(playerDeck, opponentDeck, playerCardNumber, opponentCardNumber, 'player');
      getScoreNumber('player');
      return playerWinQtd += 1, opponentLoseQtd += 1;

    } else if(getMatchWinner(getPlayerCardCheckedAttribute()) == 'atie') {
      allCards(playerDeck, opponentDeck, playerCardNumber, opponentCardNumber, 'atie');
      getScoreNumber('atie');
      return playerAtieQtd += 1, opponentAtieQtd += 1;

    } else {
      allCards(opponentDeck, playerDeck, opponentCardNumber, playerCardNumber, 'opponent');
      getScoreNumber('opponent');
      return playerLoseQtd += 1, opponentWinQtd += 1;

    }
  } else {
    score(playerDeck, opponentDeck, playerCardNumber, opponentCardNumber);
    if(getMatchWinner(getPlayerCardCheckedAttribute()) == 'player'){
      getScoreNumber('player');
      return playerWinQtd += 1, opponentLoseQtd += 1;

    } else if (getMatchWinner(getPlayerCardCheckedAttribute()) == 'atie') {
      getScoreNumber('atie');
      return playerAtieQtd += 1, opponentAtieQtd += 1;

    } else {
      getScoreNumber('opponent');
      return playerLoseQtd += 1, opponentWinQtd += 1;
    }
  }
})
/* ===== ===== ===== ===== =====*/


/* FECHA A MENSAGEM O RESULTADO DA JOGADA: */
const divResult = document.querySelector('.result')
divResult.addEventListener('click', () => {
  const divPlayerCard = document.querySelector('.player_card');
  const divOpponentCard = document.querySelector('.opponent_card');

  divResult.style.display = 'none';
  divPlayerCard.style.transform = 'none';
  divOpponentCard.style.transform = 'none';

  document.querySelector('.play-btn').disabled = true;
  document.querySelector('.draw-btn').disabled = false;

  openModal();
})
/* ===== ===== ===== ===== =====*/

/* MOSTRA O MODAL APÓS O JOGO TERMINAR: */
function openModal(){
  const divModal = document.querySelector('.modal');
  const divModalLeft = document.querySelector('.modal_left');
  const modalFraseList = ['Parabéns! Você venceu a batalha!!', 'Que pena. Seu oponente venceu a batalha!', 'Vocês empataram!']

  let modalFrase;
  if(playerScore > opponentScore) {
     modalFrase = modalFraseList[0];

  } else if(playerScore < opponentScore) {
    modalFrase = modalFraseList[1];
  } else {
    modalFrase = modalFraseList[2];
  }

  divModalLeft.innerHTML = `
  <p>O jogo terminou.</p>
            <p class="modal_frase">${modalFrase}!</p>

            <div class="modal_table">
              <table>
                <thead class="modal_table-head">
                  <tr>
                    <th></th>
                    <th>${getPlayerName()}</th>
                    <th>Oponente</th>
                  </tr>
                </thead>
                <tbody class="modal_table-body">
                  <tr class="modal_table-line">
                    <td>vitória</td>
                    <td>${playerWinQtd}</td>
                    <td>${opponentWinQtd}</td>
                  </tr>
                  <tr class="modal_table-line">
                    <td>empate</td>
                    <td>${playerAtieQtd}</td>
                    <td>${opponentAtieQtd}</td>
                  </tr>
                  <tr class="modal_table-line">
                    <td>derrota</td>
                    <td>${playerLoseQtd}</td>
                    <td>${opponentLoseQtd}</td>
                  </tr>
                  <tr class="modal_table-line">
                    <td>pontos <br>acumulados</td>
                    <td>${playerScore}</td>
                    <td>${opponentScore}</td>
                  </tr>
                </tbody>
              </table>             
            </div>

            <div class="modal_bottom">
              <a class="button modal-btn" href='/index.html'>Jogar novamente</a>
              <div class="modal_social_icons">
                <a href="http://www.instagram.com/luciana_kyoko/" target="_blank" rel="noopener noreferrer"><img src="../img/icons/icon-instagram-black.svg" alt="Ícone do Instagram"></a>
                <a href="http://github.com/lucianakyoko" target="_blank" rel="noopener noreferrer"><img src="../img/icons/icon-github-black.svg" alt="Ícone do GitHub"></a>
                <a href="http://www.linkedin.com/in/lucianakyoko/" target="_blank" rel="noopener noreferrer"><img src="../img/icons/icon-linkedin-black.svg" alt="Ícone do LinkedIn"></a>
              </div>
            </div> 
  `
  if(data.gameType == 'score' && playerDeck.length == 0) {
    divModal.style.display ='flex';
  } else if (data.gameType == 'allcards' && (playerDeck.length == 0 || opponentDeck.length == 0)){
    divModal.style.display ='flex';
  } else {
    divModal.style.display ='none';
  }
}
/* ===== ===== ===== ===== =====*/

