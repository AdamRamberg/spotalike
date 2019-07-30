import {
  white,
  black,
  blue,
  pinkSalmon,
  cornflowerBlue,
  tuna,
  mischka,
  silverChalice,
  spunPearl,
} from './colors';
import { createSizings, MAJOR_SECOND } from './sizing';
import createBreakpointMixins from './breakpoints';

export const breakpoints = createBreakpointMixins({
  xs: '20em', // 320px
  s: '36em', // 576px
  m: '48em', // 768px
  l: '62em', // 992px
  xl: '75em', // 1200px
});

export default {
  // Based on Material Design:
  // https://material.io/design/color/the-color-system.html#color-theme-creation
  colors: {
    primary: blue,
    primaryVariant: blue,
    onPrimary: white,
    secondary: pinkSalmon,
    onSecondary: white,
    background: white,
    onBackground: tuna,
    onBackgroundLighter: silverChalice,
    onBackgroundLighterVariation: spunPearl,
    onBackgroundLightest: mischka,
    onBackgroundSecondary: cornflowerBlue,
    secondaryBackground: white,
    onSecondaryBackground: black,
  },
  ...createSizings({
    pixelBaseline: 10,
    apparentPixelFontSize: 16,
    fontScale: MAJOR_SECOND,
    spacingBaseline: 8,
  }),
  breakpoints,
};
