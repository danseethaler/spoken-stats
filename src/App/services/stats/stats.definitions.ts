import {SetsType} from '../../../redux/redux.definitions';

export const enum StatRecordingType {
  manual = 'manual',
  calculated = 'calculated',
}

export const enum StatResultTypes {
  nill = 'nill',
  error = 'error',
  point = 'point',
}

export interface StatDefinitionType {
  name: string;
  shorthand: string;
  maxPrepsId: string;
  commandNames?: string[][];
  calculator: (name: string, sets: SetsType) => any;
  maxPrepsCalculator?: (name: string, sets: SetsType) => any | null;
  recordingType: StatRecordingType;
  result: StatResultTypes;
  raking?: boolean;
}

export const enum StatCategories {
  General = 'General',
  Serving = 'Serving',
  Receiving = 'Receiving',
  Blocking = 'Blocking',
  Digs = 'Digs',
  BallHandling = 'Ball Handling',
  Attack = 'Attack',
}

export interface StatCategoryType {
  name: StatCategories;
  stats: StatDefinitionType[];
}
