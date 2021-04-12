// LISTA DE TODOS OS CAVALEIROS DO JOGO:

function Knights(knight, armor, image, score, cosmos, attack, defense) {
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

const saori = new Knights('Saori Deusa Atena', 'divina', '..\img\knights\supertrunfo\Saori-Athenas.png', 200, 150, 150, 150);

const shiryu = new Knights('Shiryu de Dragao', 'bronze', '..\img\knights\supertrunfo\Shiryu.png', 150,	95,	100,	90);
const seiya = new Knights('Seia de Pegasus', 'bronze', '..\img\knights\supertrunfo\Seiya.png', 150,	95,	90,	100);
const ikki = new Knights('Ikki de Fenix', 'bronze', '..\img\knights\supertrunfo\Ikki.png', 90,	90,	85,	85);
const shun = new Knights('Shun de Andromeda', 'bronze', '..\img\knights\supertrunfo\Shun.png', 100,	85,	80,	90);
const hyoga = new Knights('Hyoga de Cisne', 'bronze', '..\img\knights\supertrunfo\Hyoga.png', 100,	85,	85,	90);

const guilty = new Knights('Guilty Guardiao da Ilha da Rainha da Morte', 'noir', '..\img\knights\supertrunfo\Guilty.png', 90,	90,	90,	90);
const itahoa = new Knights('Itahora de Fenix Negro', 'noir', '..\img\knights\supertrunfo\Itahoa.png', 120, 100, 95, 100);
const jango = new Knights('Jango lider dos Cavaleiros Negros', 'noir', '..\img\knights\supertrunfo\Jango.png', 90, 130,	100, 95);
const jid = new Knights('Jid de Cisne Negro', 'noir', '..\img\knights\supertrunfo\Jid.png', 120, 125, 95,	100);
const kenuma = new Knights('Kenuma de Pegasus Negro', 'noir', '..\img\knights\supertrunfo\Kenuma.png', 120,	120, 100,	95);
const andromedaNoir = new Knights('Andromeda Negro', 'noir', '..\img\knights\supertrunfo\Andromeda-noir.png', 120, 85, 120, 125);
const shinadekuro = new Knights('Shinadekuro de Dragao Negro', 'noir', '..\img\knights\supertrunfo\Shinadekuro.png', 120,	120, 125, 100);

const aiolia = new Knights('Aiolia de Leao', 'noir', '..\img\knights\supertrunfo\Aiolia-leo.png', 95,	85,	140, 95);
const aioros = new Knights('Aioros de Sagitario', 'noir', '..\img\knights\supertrunfo\Aioros-sagittarius.png', 150,	95,	100, 125);
const aldebaran = new Knights('Aldebaran de Touro', 'noir', '..\img\knights\supertrunfo\Aldebaran-taurus.png', 125,	125, 85, 95);
const aphrodite = new Knights('Afrodite de Peixes', 'noir', '..\img\knights\supertrunfo\Aphrodite-pisces.png', 95, 100, 100, 95);
const camus = new Knights('Camus de Aquarios', 'noir', '..\img\knights\supertrunfo\Camus-aquarius.png', 90, 145, 125, 85);
const dethmask = new Knights('Mascara da Morte de Câncer', 'noir', '..\img\knights\supertrunfo\Deathmask-cancer.png', 150, 90, 95, 90);
const dhoko = new Knights('Dhoko de Libra', 'noir', '..\img\knights\supertrunfo\Dhoko-libra.png', 155, 145, 140, 130);
const milo = new Knights('Milo de Escorpiao', 'noir', '..\img\knights\supertrunfo\Milo-scorpio.png', 100, 85, 90, 100);
const mu = new Knights('Mu de Aries', 'noir', '..\img\knights\supertrunfo\Mu-aries.png', 155, 95, 85, 130);
const saga = new Knights('Saga de Gemeos', 'noir', '..\img\knights\supertrunfo\Saga-gemini.png', 100, 125, 90, 90);
const shaka = new Knights('Shaka de Virgem', 'noir', '..\img\knights\supertrunfo\Shaka-virgo.png', 125, 90, 95, 100);
const shura = new Knights('Shura de Capricornio', 'noir', '..\img\knights\supertrunfo\Shura-capricornio.png', 90, 100, 125, 85);

const algethi = new Knights('Algethi de Herculos', 'silver', '..\img\knights\supertrunfo\Algethi.png', 140, 90, 100, 95);
const algol = new Knights('Algol de Perseu', 'silver', '..\img\knights\supertrunfo\Algol.png', 90, 100, 85, 120);
const babel = new Knights('Babel de Centauro', 'silver', '..\img\knights\supertrunfo\Babel.png', 85, 95, 120, 90);
const capella = new Knights('Capella de Auriga', 'silver', '..\img\knights\supertrunfo\Capella.png', 80, 120, 100, 85);
const dante = new Knights('Dante de Cerbero', 'silver', '..\img\knights\supertrunfo\Dante.png', 130, 100, 85, 90);
const dio = new Knights('Dio de Mosca', 'silver', '..\img\knights\supertrunfo\Dio.png', 100, 95, 110, 80);
const jamian = new Knights('Jamian de Corvo', 'silver', '..\img\knights\supertrunfo\Jamian.png', 80, 120, 90, 125);
const marin = new Knights('Marin de Aguia', 'silver', '..\img\knights\supertrunfo\Marin.png', 120, 95, 85, 125);
const misty = new Knights('Misty de LAgarto', 'silver', '..\img\knights\supertrunfo\Misty.png', 80, 95, 120, 95);
const moses = new Knights('Moses de Baleia', 'silver', '..\img\knights\supertrunfo\Moses.png', 85, 100, 90, 120);
const orfeu = new Knights('Orfeu de Lira', 'silver', '..\img\knights\supertrunfo\Orfeu.png', 100, 90, 100, 100);
const shaina = new Knights('Shaina de Ofiuco', 'silver', '..\img\knights\supertrunfo\Shaina.png', 130, 90, 120, 95);
const sirius = new Knights('Sirius de Caes de Caca', 'silver', '..\img\knights\supertrunfo\Sirius.png', 90, 85, 100, 95);


const divine = [saori]
const bronzeKnights = [shiryu, seiya, ikki, shun, hyoga];
const noirKnights = [guilty, itahoa, jango, jid, kenuma, andromedaNoir, shinadekuro];
const goldKnights = [aiolia, aioros, aldebaran, aphrodite, camus, dethmask, dhoko, milo, mu, saga, shaka, shura];
const silverKnights = [algethi, algol, babel, capella, dante, dio, jamian, marin, misty, moses, orfeu, shaina, sirius];

export const allknights = divine.concat(bronzeKnights, noirKnights, goldKnights, silverKnights);






