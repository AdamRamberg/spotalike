import { white, black, blue, pinkSalmon, cornflowerBlue, tuna } from './colors';
import { createSizings, MAJOR_SECOND } from './sizing';

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
};
