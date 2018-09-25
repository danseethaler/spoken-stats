import {flatten} from 'lodash';

const service = [
  'servus',
  'servis',
  'serviced',
  'service',
  'cervus',
  'surface',
  'serbis',
];

const receiving = [
  'reception',
  'reception',
  'reception',
  'perception',
  'perception',
  'reception',
  'reception',
  'perception',
  'receiving',
  'receive',
  'sieving',
];

const error = [
  'error',
  'are',
  'air',
  'there',
  'ever',
  'heir',
  'your',
  'near',
  'terror',
  'errors',
];

const ace = [
  'a',
  'ace',
  'eggs',
  'areas',
  'hayes',
  'size',
  'ice',
  "a's",
  'is',
  "it's",
  '88',
  '80',
  '80s',
  "80's",
];

const kill = [
  'kill',
  'chill',
  'killed',
  'kilo',
  'jill',
  'chill',
  'pill',
  'carol',
  'channel',
  'cairo',
  'churchill',
  'kiehl',
  'cahill',
];

const freeball = [
  'freeball',
  'free ball',
  'pre-bowl',
  'spree bowl',
  'spree ball',
  'pretty ball',
  'brie bowl',
  'pre bowl',
  'free ball',
  'brie ball',
  'pre ball',
  'friebel',
];

const attempt = [
  'attempt',
  'attendant',
  'attempt',
  'attempt',
  'at em',
  '1/10',
  'attempt',
  'a tent',
  'a temp',
  'attempt',
  'attempt',
  'attempt',
  'shaka',
  'tempt',
  'temp',
  'tempe',
  'temple',
  'attempts',
  'attempted',
  'a temps',
  '10th',
  'to 10',
  'and 10',
  'tent',
  'tent',
  'tant',
  'tenth',
];

const dig = [
  'dig',
  'digging',
  'didinger',
  'digit',
  'jake',
  'pig',
  'did',
  'dude',
  'i did',
  'david',
  'doing',
  'big',
  'stage',
  'did you',
  'dirty',
  'dead',
  'thin',
  'dear',
  '30',
  '3d',
  'greg',
  'bag',
  'dick',
];

const digError = [
  ...flatten(
    dig.map(digItem => error.map(errorItem => digItem + ' ' + errorItem))
  ),
  'dig error',
  'diggler',
  'take care',
  'figure',
  'daycare',
  'duke energy',
  'duke are',
  'digging are',
  'digging are',
  'digger',
  'bigger',
];

const ballHandling = [
  'handling',
  'handel',
  'handle',
  'handler',
  'mandolin',
  'hand ling',
  'hand sing',
  'handles',
  'ball handling',
  'ball handeling',
  'all handling',
  'fall handling',
  'hall handling',
  'play annoying',
  'call handling',
  'call handeling',
];

const block = [
  'block',
  'bloc',
  'bloch',
  'fox',
  'lock',
  'vox',
  'box',
  'blocking',
  'locking',
];

const wordAlternates = {
  service,
  receiving,
  error,
  ace,
  kill,
  freeball,
  attempt,
  dig,
  digError,
  ballHandling,
  block,
};

export default wordAlternates;
