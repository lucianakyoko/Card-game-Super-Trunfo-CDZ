/* Pegando dados do input do usuário da página inicial (tipo de jogada e nome do jogador): */
const url = window.location.search;
url.replace('?', '');

const query = location.search.slice(1);
const parts = query.split('&');
export const data = {};

parts.forEach(part => {
  const keyValue = part.split('=');
  const key = keyValue[0];
  const value = keyValue[1];

  data[key] = value;
})

/* Pega o Nome do jogador: */
export function getPlayerName() {
  let playerName = data.playerName;

  if(playerName !== '') {
    return playerName;
  } else {
    return playerName = 'Player';
  }
}
