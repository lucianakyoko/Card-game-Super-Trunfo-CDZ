
const btn = document.querySelector('.home-btn');

btn.addEventListener('click', (event) => {
  // event.preventDefault();
  
  getSelectedGameType()
  getPlayerName();

})

function getSelectedGameType() {
  const gameTypes = document.getElementsByName('game-type');

  for(let i = 0; i < gameTypes.length; i++) {
    if(gameTypes[i].checked) {
       return console.log(gameTypes[i].value);
    }
  }
}

function getPlayerName() {
  const getPlayerName = document.querySelector('#player-name').value;
   return getPlayerName;
}
