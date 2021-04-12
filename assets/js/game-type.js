
const btn = document.querySelector('.home-btn')


btn.addEventListener('click', () => {
  getGameType() 
  getPlayerName()

  window.location.href = './assets/pages/board-game.html';

})

function getGameType() {
  const type = document.getElementsByName('game-type');
  for(let i = 0; i < type.length; i++) {
    if(type[i].checked) {
      return console.log(type[i].value)
    }
  }
}

function getPlayerName() {
  let playerName = document.querySelector('#player-name');
  if(playerName.value == '') {
    return console.log('Player');
  } else {
    return console.log(playerName.value);
  }
}

