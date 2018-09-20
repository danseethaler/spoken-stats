export interface PlayerType {
  jersey: number[];
  name: string;
  alternateNames: string[];
  nameFull: string;
  year: string;
  photoPath: string;
  positions: string[];
  height: string;
  captain?: boolean;
}

export const getPlayerData = (playerName): PlayerType =>
  players.find(({name}) => name === playerName);

const players = [
  {
    jersey: [2],
    name: 'Juliann',
    alternateNames: [
      'julie ann',
      'julianne',
      'julienne',
      'julianna',
      'juliana',
      'julie anne',
      'juliane',
      'juliann',
      'julieanne',
      'julian',
      'julieann',
      'julie-ann',
    ],
    photoPath: require('../../assets/photos/juliann.png'),
    nameFull: 'Juliann De Jesus',
    year: 'Sr.',
    positions: ['RS', 'OH'],
    height: '5-5',
  },
  {
    jersey: [4],
    name: 'Emma',
    alternateNames: [
      'emma',
      'ema',
      'emmah',
      'emah',
      'gemma',
      'am i',
      'ammo',
      'imma',
    ],
    photoPath: require('../../assets/photos/emma.png'),
    nameFull: 'Emma Downing',
    year: 'Jr.',
    positions: ['MB', 'RS'],
    height: '5-11',
  },
  {
    jersey: [5],
    name: 'Macy',
    alternateNames: [
      'macy',
      'maci',
      'macey',
      'maisie',
      'macie',
      "macy's",
      'mac',
      'macee',
      'messi',
      'maycee',
      'messy',
      'lacey',
      'she',
      'c',
      'sea',
      'ac',
      'easy',
      'city',
      'missy',
      'racing',
      'racy',
    ],
    photoPath: require('../../assets/photos/macy.png'),
    nameFull: 'Macy Henry',
    year: 'Sr.',
    positions: ['S', 'RS'],
    captain: true,
    height: '5-8',
  },
  {
    jersey: [6],
    name: 'Kennedy',
    alternateNames: [
      'kennedy',
      'kenedy',
      'kennedi',
      'kenadee',
      'kenadie',
      'kennedie',
    ],
    photoPath: require('../../assets/photos/kennedy.png'),
    nameFull: 'Kennedy Herold-Rhoe',
    year: 'Sr.',
    positions: ['DS'],
    height: '5-7',
  },
  {
    jersey: [7],
    name: 'Kat',
    alternateNames: ['cat', 'kat', 'katt', 'chat', 'khat', 'catt', 'kath'],
    photoPath: require('../../assets/photos/kat.png'),
    nameFull: 'Kat Dameron',
    year: 'Jr.',
    positions: ['DS'],
    height: '4-11',
  },
  {
    jersey: [8],
    name: 'Celeste',
    alternateNames: [
      'celeste',
      'celest',
      'seleste',
      'to last',
      'celeste',
      'to lust',
      'two last',
      'the last',
      '2 last',
      'to the last',
      'to list',
      'two lost',
      'celest',
    ],
    photoPath: require('../../assets/photos/celeste.png'),
    nameFull: 'Celeste Pasley',
    year: 'Jr.',
    positions: ['OH', 'MB', 'OPP'],
    height: '5-9',
  },
  {
    jersey: [9],
    name: 'Cailyn',
    alternateNames: [
      'kon',
      'kwin',
      'kom',
      'kaelyn',
      'k o n',
      'tom',
      '2 in',
      'kaitlyn',
      'caitlin',
      'kailyn',
      'thielen',
      'thelen',
      'phelan',
      'feelin',
      'thelen',
      'tilan',
    ],
    photoPath: require('../../assets/photos/cailyn.png'),
    nameFull: 'Cailyn Thornton',
    year: 'Jr.',
    positions: ['OH', 'DS'],
    height: '5-4',
  },
  {
    jersey: [10],
    name: 'Victoria',
    alternateNames: [
      'tori',
      'tory',
      'torre',
      'torrey',
      'torrie',
      'torry',
      'torey',
      'torri',
      'torii',
      'torie',
      'towing',
      'victoria',
      'adore you',
      'i toria',
      'viktoria',
      'adoria',
      'midoriya',
      'atoria',
      'story',
    ],
    photoPath: require('../../assets/photos/victoria.png'),
    nameFull: 'Victoria Dalehite',
    year: 'Jr.',
    positions: ['OH', 'RS'],
    height: '5-7',
  },
  {
    jersey: [11],
    name: 'Lydia',
    alternateNames: [
      'lydia',
      'lidia',
      'lidiya',
      'lidya',
      'olivia',
      'lidija',
      'lithia',
      'madea',
      'lidea',
      'whittier',
      'wittier',
    ],
    photoPath: require('../../assets/photos/lydia.png'),
    nameFull: 'Lydia Wood',
    year: 'Fr.',
    positions: ['MH', 'OH'],
    height: '5-11',
  },
  {
    jersey: [18],
    name: 'Colby',
    alternateNames: [
      'colby',
      'kobe',
      'kolby',
      'coby',
      'kolbe',
      'call bee',
      'colbie',
      'call b',
      "i'll be",
      'scoby',
    ],
    photoPath: require('../../assets/photos/colby.png'),
    nameFull: 'Colby Rabalais',
    year: 'Sr.',
    positions: ['OH', 'DS'],
    height: '5-7',
  },
  {
    jersey: [19],
    name: 'Sarah',
    alternateNames: [
      'sarah',
      'sara',
      'serra',
      'cera',
      'sera',
      'cerra',
      'saira',
      'sarrah',
      'scera',
      'ciara',
    ],
    photoPath: require('../../assets/photos/sarah.png'),
    nameFull: 'Sarah McCuiston',
    year: 'Sr.',
    positions: ['MB', 'OH'],
    height: '5-11',
  },
  {
    jersey: [20],
    name: 'Rachel',
    alternateNames: [
      'rachel',
      'rachael',
      'reichel',
      'rachele',
      'raychel',
      'racheal',
      'raechel',
      'reichle',
      'rachel roy',
    ],
    photoPath: require('../../assets/photos/rachel.png'),
    nameFull: 'Rachel Tucker',
    year: 'Sr.',
    positions: ['LB'],
    captain: true,
    height: '5-6',
  },
  {
    jersey: [1, 17],
    name: 'Marlee',
    alternateNames: [
      'marley',
      'marlee',
      'marlie',
      'marly',
      'marli',
      'marle',
      'marleigh',
      'marlene',
      'majerle',
      'harley',
    ],
    photoPath: require('../../assets/photos/marlee.png'),
    nameFull: 'Marlee Rakouskas-Rhoe',
    year: 'So.',
    positions: ['DS', 'OH'],
    height: '5-5',
  },
  {
    jersey: [12, 14],
    name: 'Haylee',
    alternateNames: [
      'haley',
      'hailey',
      'hayley',
      'bailey',
      'hailee',
      'haylee',
      'hailie',
      'kaley',
      'daily',
      'kaylee',
      'halley',
      'theory',
      'baby',
      'take me',
      'tv',
      'hairy',
      'harry',
    ],
    photoPath: require('../../assets/photos/haylee.png'),
    nameFull: 'Haylee Cothran',
    year: 'So.',
    positions: ['DS', 'OH'],
    height: '5-7',
  },
  {
    jersey: [15, 16],
    name: 'Hannah',
    alternateNames: [
      'chana',
      'china',
      'channa',
      'jana',
      'jenna',
      'janna',
      'hannah',
      'gianna',
      'shanna',
      'canna',
    ],
    photoPath: require('../../assets/photos/hannah.png'),
    nameFull: 'Hannah Weaks',
    year: 'Sr.',
    positions: ['RS', 'OH'],
    height: '5-8',
  },
] as PlayerType[];

export default players;
