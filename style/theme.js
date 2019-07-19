import { white, black, blue, pinkSalmon } from './colors';
import { fontSizeMajorSecond } from './fontSize';

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
    onBackground: black,
    secondaryBackground: white,
    onSecondaryBackground: black,
  },
  fontSize: fontSizeMajorSecond({ basePixelFontSize: 18 }),
};
