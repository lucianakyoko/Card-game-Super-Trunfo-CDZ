const radioAttributesOpponentCard = document.getElementsByName('attribute_opponent');
const radioAttributesPlayerCard = document.getElementsByName('attribute_player');

/* Obtem o atributo selecionado pelo jogador: */
export function getPlayerCardCheckedAttribute() {
  radioAttributesPlayerCard.forEach(radioAttribute => {
    radioAttribute.addEventListener('click', () => {
      document.querySelector('.play-btn').disabled = false;
      document.querySelector('.draw-btn').disabled = true;
    })
  });

  for(let i = 0; i < radioAttributesPlayerCard.length; i++) {
    if(radioAttributesPlayerCard[0].checked) {
      radioAttributesOpponentCard[0].checked = true;
      radioAttributesOpponentCard[1].disabled = true;
      radioAttributesOpponentCard[2].disabled = true;
      
      return radioAttributesPlayerCard[0].value, 'cosmos';

    } else if(radioAttributesPlayerCard[1].checked) {
      radioAttributesOpponentCard[1].checked = true;
      radioAttributesOpponentCard[0].disabled = true;
      radioAttributesOpponentCard[2].disabled = true;
      
      return radioAttributesPlayerCard[1].value, 'attack';
      
    } else {
      radioAttributesOpponentCard[2].checked = true;
      radioAttributesOpponentCard[0].disabled = true;
      radioAttributesOpponentCard[1].disabled = true;
      
      return radioAttributesPlayerCard[2].value, 'defense';
    }
  }
}


/* Obtem o atributo selecionando pelo oponente: */
export function getOpponentCardCheckedAttribute() {
  const radioRandom = Math.floor(Math.random() * radioAttributesOpponentCard.length);

 if(radioRandom == 0) {
   radioAttributesOpponentCard[0].checked = true;
   radioAttributesOpponentCard[1].disabled = true;
   radioAttributesOpponentCard[2].disabled = true;

   radioAttributesPlayerCard[0].checked = true;
   radioAttributesPlayerCard[1].disabled = true;
   radioAttributesPlayerCard[2].disabled = true;

   return radioAttributesOpponentCard[0].value,'cosmos';

 } else if( radioRandom == 1) {
   radioAttributesOpponentCard[1].checked = true;
   radioAttributesOpponentCard[0].disabled = true;
   radioAttributesOpponentCard[2].disabled = true;

   radioAttributesPlayerCard[1].checked = true;
   radioAttributesPlayerCard[0].disabled = true;
   radioAttributesPlayerCard[2].disabled = true;

   return radioAttributesOpponentCard[0].value,'attack';

 } else {
   
   radioAttributesOpponentCard[2].checked = true;
   radioAttributesOpponentCard[0].disabled = true;
   radioAttributesOpponentCard[1].disabled = true;

   radioAttributesPlayerCard[2].checked = true;
   radioAttributesPlayerCard[0].disabled = true;
   radioAttributesPlayerCard[1].disabled = true;

  return radioAttributesOpponentCard[0].value, 'defense';
 }
}
