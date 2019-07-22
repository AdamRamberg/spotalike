import { oneOf } from 'prop-types';

export const GOLDEN_RATIO = 1.618;
export const PERFECT_FIT = 1.5;
export const AUGMENTED_FOURTH = 1.414;
export const PERFECT_FOURTH = 1.333;
export const MAJOR_THIRD = 1.25;
export const MINOR_THIRD = 1.2;
export const MAJOR_SECOND = 1.125;
export const MINOR_SECOND = 1.067;

const BROWSER_DEFAULT_FONT_SIZE = 16;

const defaultOptions = {
  /* Make default baseline (apparent size) of rem equal 10px -> easier calculations between pixels and rems */
  fontSizeBaseline: 10,
  apparentFontSize: 16,
  fontScale: MAJOR_SECOND,
  spacingBaseline: 8,
};

export const createSizings = options => {
  const mergedOptions = Object.assign({}, defaultOptions, options);
  const {
    fontSizeBaseline,
    apparentFontSize,
    spacingBaseline,
    fontScale,
  } = mergedOptions;
  const rootFontSizePercentage =
    (fontSizeBaseline / BROWSER_DEFAULT_FONT_SIZE) * 100;
  /* Readjust default apparent font size to be apparentFontSize (pixels) */
  const apparentRemFontSize = apparentFontSize / fontSizeBaseline;

  return {
    fontSize: fontSizeCretor(fontScale, apparentRemFontSize),
    rootFontSizePercentage: `${rootFontSizePercentage}%`,
    getSpacing: units => (spacingBaseline / fontSizeBaseline) * units,
  };
};

const fontSizeCretor = (scale, apparentRemFontSize) => ({
  xxl: `${(apparentRemFontSize * scale) ** 4}rem`,
  xl: `${(apparentRemFontSize * scale) ** 3}rem`,
  large: `${(apparentRemFontSize * scale) ** 2}rem`,
  medium: `${apparentRemFontSize * scale}rem`,
  default: `${apparentRemFontSize}rem`,
  smaller: `${(apparentRemFontSize * scale) ** -0.5}rem`,
  small: `${(apparentRemFontSize * scale) ** -1}rem`,
  xs: `${(apparentRemFontSize * scale) ** -2}rem`,
  xxs: `${(apparentRemFontSize * scale) ** -3}rem`,
});

export const fontSizePropType = oneOf([
  'xxl',
  'xl',
  'large',
  'medium',
  'default',
  'smaller',
  'small',
  'xs',
  'xxs',
]);
