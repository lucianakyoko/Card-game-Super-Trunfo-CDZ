function Knight(knight, armor, image, score, cosmos, attack, defense) {
  this.knight = knight,
  this.armor = armor
  this.image = image,
  this.score = score,
  this.attributes = {
    cosmos,
    attack,
    defense
  }
}

// LISTA DE TODOS OS CAVALEIROS DO JOGO:
const saori = new Knight('Saori Deusa Atena', 'divine', '../img/knights/supertrunfo/athenas.png', 200, 150, 150, 150);

const shiryu = new Knight('Shiryu de Dragao', 'bronze', '../img/knights/bronze/shiryu.png', 150,	95,	100,	90);
const seiya = new Knight('Seiya de Pegasus', 'bronze', '../img/knights/bronze/seiya.png', 150,	95,	90,	100);
const hyoga = new Knight('Hyoga de Cisne', 'bronze', '../img/knights/bronze/hyoga.png', 100,	85,	85,	90);
const shun = new Knight('Shun de Andromeda', 'bronze', '../img/knights/bronze/shun.png', 100,	85,	80,	90);
const ikki = new Knight('Ikki de Fenix', 'bronze', '../img/knights/bronze/ikki.png', 90,	90,	85,	85);

const andromedaNoir = new Knight('Andromeda Negro', 'black', '../img/knights/black/andromeda-noir.png', 120, 85, 120, 125);
const guilty = new Knight('Guilty Guardiao da Ilha da Rainha da Morte', 'black', '../img/knights/black/guilty.png', 90, 90, 90, 90);
const itahoa = new Knight('Itahora de Fenix Negro', 'black', '../img/knights/black/itahoa.png', 120, 100, 95, 100);
const jid = new Knight('Jid de Cisne Negro', 'black', '../img/knights/black/jid.png', 120, 125, 95, 100);
const jango = new Knight('Jango lider dos Cavaleiros Negros', 'black', '../img/knights/black/jango.png', 90, 130, 100, 95);
const kenuma = new Knight('Kenuma de Pegasus Negro', 'black', '../img/knights/black/kenuma.png', 120,	120, 100,	95);
const shinadekuro = new Knight('Shinadekuro de Dragao Negro', 'black', '../img/knights/black/shinadekuro.png', 120,	120, 125, 100);

const aquarius = new Knight('Camus de Aquarios', 'gold', '../img/knights/gold/aquarius.png', 90, 145, 125, 85);
const aries = new Knight('Mu de Aries', 'gold', '../img/knights/gold/aries.png', 155, 95, 85, 130);
const cancer = new Knight('Mascara da Morte de Câncer', 'gold', '../img/knights/gold/cancer.png', 150, 90, 95, 90);
const capricorn = new Knight('Shura de Capricornio', 'gold', '../img/knights/gold/capricorn.png', 90, 100, 125, 85);
const gemini = new Knight('Saga de Gemeos', 'gold', '../img/knights/gold/gemini.png', 100, 125, 90, 90);
const leo = new Knight('Aiolia de Leao', 'gold', '../img/knights/gold/leo.png', 95,	85,	140, 95);
const libra = new Knight('Dhoko de Libra', 'gold', '../img/knights/gold/libra.png', 155, 145, 140, 130);
const pisces = new Knight('Afrodite de Peixes', 'gold', '../img/knights/gold/pisces.png', 95, 100, 100, 95);
const sagittarius = new Knight('Aioros de Sagitario', 'gold', '../img/knights/gold/sagittarius.png', 150,	95,	100, 125);
const scorpio = new Knight('Milo de Escorpiao', 'gold', '../img/knights/gold/scorpio.png', 100, 85, 90, 100);
const taurus = new Knight('Aldebaran de Touro', 'gold', '../img/knights/gold/taurus.png', 125,	125, 85, 95);
const virgo = new Knight('Shaka de Virgem', 'gold', '../img/knights/gold/virgo.png', 125, 90, 95, 100);

const algethi = new Knight('Algethi de Herculos', 'silver', '../img/knights/silver/algethi.png', 140, 90, 100, 95);
const algol = new Knight('Algol de Perseu', 'silver', '../img/knights/silver/algol.png', 90, 100, 85, 120);
const babel = new Knight('Babel de Centauro', 'silver', '../img/knights/silver/babel.png', 85, 95, 120, 90);
const capella = new Knight('Capella de Auriga', 'silver', '../img/knights/silver/capella.png', 80, 120, 100, 85);
const dante = new Knight('Dante de Cerbero', 'silver', '../img/knights/silver/dante.png', 130, 100, 85, 90);
const dio = new Knight('Dio de Mosca', 'silver', '../img/knights/silver/dio.png', 100, 95, 110, 80);
const jamian = new Knight('Jamian de Corvo', 'silver', '../img/knights/silver/jamian.png', 80, 120, 90, 125);
const marin = new Knight('Marin de Aguia', 'silver', '../img/knights/silver/marin.png', 120, 95, 85, 125);
const misty = new Knight('Misty de Lagarto', 'silver', '../img/knights/silver/misty.png', 80, 95, 120, 95);
const moses = new Knight('Moses de Baleia', 'silver', '../img/knights/silver/moses.png', 85, 100, 90, 120);
const orfeu = new Knight('Orfeu de Lira', 'silver', '../img/knights/silver/orfeu.png', 100, 90, 100, 100);
const shaina = new Knight('Shaina de Ofiuco', 'silver', '../img/knights/silver/shaina.png', 130, 90, 120, 95);
const sirius = new Knight('Sirius de Caes de Caca', 'silver', '../img/knights/silver/sirius.png', 90, 85, 100, 95);

const divine = [saori];
const bronzeKnights = [shiryu, seiya, hyoga, shun, ikki];
const noirKnights = [andromedaNoir, guilty, itahoa, jid, jango, kenuma, shinadekuro];
const goldKnights = [aquarius, aries, cancer, capricorn, gemini, leo, libra, pisces, sagittarius, scorpio, taurus, virgo];
const silverKnights = [algethi, algol, babel, capella, dante, dio, jamian, marin, misty, moses, orfeu, shaina, sirius];

export const allKnights = divine.concat(bronzeKnights, noirKnights, goldKnights, silverKnights);
