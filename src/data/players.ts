export interface PlayerStat {
  number: string;
  name: string;
  year: string;
  positions: string[];
  height: string;
  captain?: boolean;
}

const players: PlayerStat[] = [
  {
    number: '2',
    name: 'Juliann De Jesus',
    year: 'Sr.',
    positions: ['RS', 'OH'],
    height: '5-5',
  },
  {
    number: '4',
    name: 'Emma Downing',
    year: 'Jr.',
    positions: ['MB', 'RS'],
    height: '5-11',
  },
  {
    number: '5',
    name: 'Macy Henry',
    year: 'Sr.',
    positions: ['S', 'RS'],
    captain: true,
    height: '5-8',
  },
  {
    number: '6',
    name: 'Kennedy Herold-Rhoe',
    year: 'Sr.',
    positions: ['DS'],
    height: '5-7',
  },
  {
    number: '7',
    name: 'Kat Dameron',
    year: 'Jr.',
    positions: ['DS'],
    height: '4-11',
  },
  {
    number: '8',
    name: 'Celeste Pasley',
    year: 'Jr.',
    positions: ['OH', 'MB', 'OPP'],
    height: '5-9',
  },
  {
    number: '9',
    name: 'Cailyn Thornton',
    year: 'Jr.',
    positions: ['OH', 'DS'],
    height: '5-4',
  },
  {
    number: '10',
    name: 'Victoria Dalehite',
    year: 'Jr.',
    positions: ['OH', 'RS'],
    height: '5-7',
  },
  {
    number: '11',
    name: 'Lydia Wood',
    year: 'Fr.',
    positions: ['MH', 'OH'],
    height: '5-11',
  },
  {
    number: '18',
    name: 'Colby Rabalais',
    year: 'Sr.',
    positions: ['OH', 'DS'],
    height: '5-7',
  },
  {
    number: '19',
    name: 'Sarah McCuiston',
    year: 'Sr.',
    positions: ['MB', 'OH'],
    height: '5-11',
  },
  {
    number: '20',
    name: 'Rachel Tucker',
    year: 'Sr.',
    positions: ['DS'],
    captain: true,
    height: '5-6',
  },
  {
    number: '1/17',
    name: 'Marlee Rakouskas-Rhoe',
    year: 'So.',
    positions: ['DS', 'OH'],
    height: '5-5',
  },
  {
    number: '12/14',
    name: 'Haylee Cothran',
    year: 'So.',
    positions: ['DS', 'OH'],
    height: '5-7',
  },
  {
    number: '15/16',
    name: 'Hannah Weaks',
    year: 'Sr.',
    positions: ['RS', 'OH', 'S'],
    height: '5-8',
  },
];

export default players;