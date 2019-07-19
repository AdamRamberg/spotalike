import { white, black } from './colors';
import { fontSizeMajorSecond } from './fontSize';

export default {
  // Based on Material Design:
  // https://material.io/design/color/the-color-system.html#color-theme-creation
  colors: {
    primary: white,
    primaryVariant: white,
    onPrimary: black,
    secondary: white,
    onSecondary: black,
    background: white,
    onBackground: black,
    secondaryBackground: white,
    onSecondaryBackground: black,
  },
  fontSize: fontSizeMajorSecond({ basePixelFontSize: 18 }),
};
