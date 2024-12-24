import { Surprise } from '../../models/sorprise.model';
import { avecesAbesos } from './assets/abesos';
import { atardecer } from './assets/atardecer';
import { bellaquita } from './assets/bellaquita';
import { bestMoment } from './assets/bestmoment';
import { loquera } from './assets/loquera';
import { lugar } from './assets/lugar';
import { malla } from './assets/malla';
import { nocheFinal } from './assets/nochefinal';
import { parranda } from './assets/parranda';
import { primerJuntos } from './assets/primer-juntos';
import { tiktokLoco } from './assets/tiktok-loco';

export const regalos: Surprise[] = [
  {
    type: 'cancion',
    url: avecesAbesos,
    description:
      'Esta canción nunca se me olvidará, jamás de los jamases. Ya tu sabes por qué',
    title: 'Una cancioncita inolvidable',
  },
  {
    type: 'cancion',
    url: parranda,
    description:
      'El primer vallenato que considero bailamos bien y como se debía jaja me encantó.',
    title: 'Un vallenatico ajá',
  },
  {
    type: 'imagen',
    url: `<img src="${bestMoment}"/>`,
    title: 'Esta foto... esta foto',
    description: 'No tengo palabras para describir esto, ya sabrás todo lo que se me pasó por la mente al colocar esto por aquí <3.'
  },
  {
    type: 'tiktok',
    url: tiktokLoco,
    title: 'Un tiktok chapa de un recuerdo simple pero bonito jaja',
    description: 'Me acuerdo de cuando vimos este video en el carro yendo a la fiesta jaja que chapa, me acuerdo de como te reías, yo casi me cago de la risa jaja.',
  },
  {
    type: 'imagen',
    url: `<img src="${primerJuntos}"/>`,
    description:
      'Nuestra primera foto juntos, quisiera que todos los días de mi vida fueran como ese día en particular, fué en berlín, fue de las pocas veces que he sentido que no se nos ha pasado el tiempo volando, me gustó muchisimo.',
    title: 'Upsss una imagen',
  },
  {
    type: 'imagen',
    url: `<img src="${lugar}"/>`,
    title: 'Un lugar',
    description: 'A ver si adivinas esto donde es... Me lo dices por whatsapp.',
  },
  {
    type: 'imagen',
    url: `<img src="${atardecer}" />`,
    title: 'Una fotito',
    description:
      'Mira nada mas... un atardecer super hermoso... Recuerdas ese día? 😏',
  },
  {
    type: 'imagen',
    url: `<img src="${nocheFinal}"/>`,
    title: 'Una noche linda',
    description:
      'Me gustó mucho todo lo que hicimos esa noche, excepto por el final :(',
  },
  {
    type: 'imagen',
    title: 'Otro recuerdo lindo',
    description:
      'Esta imagen a pesar del afán que teníamos me trae solo recuerdos bonitos, lo único feo fue que te tocó irte :( igual nos reimos mucho y la pasamos deli.',
    url: `<img src="${malla}"/>`,
  },
  {
    type: 'imagen',
    title: 'Yo haciendo loqueras según tu',
    description:
      'No sé por qué pero siempre, vaya donde vaya, deseo estar contigo y pues esa vez quise dejar tu nombre allí, a lo mejor y nunca lo borren y algún día podamos estar allá juntos :(',
    url: `<img src="${loquera}" />`,
  },
  {
    title: 'Una cancioncita',
    description:
      'Aunque no lo creas le presto mucha atención a cada canción que pones, y esta es una de ellas, me encanta, hace que todo fluya aún mas natural de lo que ya es. 😏',
    type: 'imagen',
    url: bellaquita,
  },
];
