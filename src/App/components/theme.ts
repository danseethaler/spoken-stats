import {
  ArrayInterpolation,
  ClassInterpolation,
  CSSObject,
} from 'create-emotion';
import {hexToRgb} from '../services/styles';

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  // main colors
  primary: '#00A3E0',
  secondary: '#00C7B1',
  tertiary: '#01497C',
  affirmative: '#30B34A',
  negative: '#FF530D',
  // grays
  extraDarkGray: '#283A42',
  darkGray: '#425464',
  lightDarkGray: '#3C525B',
  gray: '#68707E',
  mediumGray: '#878D99',
  lightGray: '#ACAFB8',
  extraLightGray: '#D7D8DC',
  // cool grays
  darkCoolGray: '#54728C',
  coolGray: '#798AA2',
  mediumCoolGray: '#98A4B5',
  lightCoolGray: '#BAC0CC',
  extraLightCoolGray: '#DDE0E7',
  xxLightCoolGray: '#F0F2F6',
  // Dynamic style
  boxShadow: hexToRgb('#425464', 0.1),
  green: '#58E797',
  purple: '#4633ed',
};

export const styles = {
  borderBoxShadow: '0 0 0 0.05em ' + colors.extraLightGray,
  lightBorder: `1px solid ${colors.extraLightCoolGray}`,
  extraLightGrayBorder: `1px solid ${colors.extraLightGray}`,
  lightBoxShadow: '0 0.75em 2em 0 ' + colors.boxShadow,
  lightBoxShadowCompressed: '0 0 0 0 ' + colors.boxShadow,
  extraLightBoxShadow: `0 0.3em 0.5em 0 ${colors.extraLightCoolGray}`,
  sectionHeaderBoxShadow: `0 1px 2px 0 ${colors.extraLightCoolGray}`,
  primaryButtonBackground: `linear-gradient(135deg, ${colors.green}, #71eb9b)`,
};

export const mq = {
  min: [
    '@media (min-width: 576px)',
    '@media (min-width: 768px)',
    '@media (min-width: 992px)',
    '@media (min-width: 1200px)',
  ],
  max: [
    '@media (max-width: 575px)',
    '@media (max-width: 767px)',
    '@media (max-width: 991px)',
    '@media (max-width: 1199px)',
  ],
};

export type StyleType =
  | TemplateStringsArray
  | CSSObject
  | ArrayInterpolation
  | ClassInterpolation;
