import { oneOf } from 'prop-types';

export const GOLDEN_RATIO = 1.618;
export const PERFECT_FIT = 1.5;
export const AUGMENTED_FOURTH = 1.414;
export const PERFECT_FOURTH = 1.333;
export const MAJOR_THIRD = 1.25;
export const MINOR_THIRD = 1.2;
export const MAJOR_SECOND = 1.125;
export const MINOR_SECOND = 1.067;

const DEFAULT_STANDARD_FONT_SIZE = 16;

const defaultOptions = {
  basePixelFontSize: DEFAULT_STANDARD_FONT_SIZE,
};

const fontSizeCretor = (scale, options) => {
  const mergedOptions = Object.assign({}, defaultOptions, options);
  const fontSizeMultiplier =
    mergedOptions.basePixelFontSize / DEFAULT_STANDARD_FONT_SIZE;
  return {
    xxl: `${(fontSizeMultiplier * scale) ** 4}rem`,
    xl: `${(fontSizeMultiplier * scale) ** 3}rem`,
    large: `${(fontSizeMultiplier * scale) ** 2}rem`,
    medium: `${fontSizeMultiplier * scale}rem`,
    default: `${fontSizeMultiplier}rem`,
    smaller: `${(fontSizeMultiplier * scale) ** -0.5}rem`,
    small: `${(fontSizeMultiplier * scale) ** -1}rem`,
    xs: `${(fontSizeMultiplier * scale) ** -2}rem`,
    xxs: `${(fontSizeMultiplier * scale) ** -3}rem`,
  };
};

export const fontSizeGoldenRatio = options =>
  fontSizeCretor(GOLDEN_RATIO, options);
export const fontSizePerfectFit = options =>
  fontSizeCretor(PERFECT_FIT, options);
export const fontSizeAugmentedFourth = options =>
  fontSizeCretor(AUGMENTED_FOURTH, options);
export const fontSizePerfectFourth = options =>
  fontSizeCretor(PERFECT_FOURTH, options);
export const fontSizeMajorThird = options =>
  fontSizeCretor(MAJOR_THIRD, options);
export const fontSizeMinorThird = options =>
  fontSizeCretor(MINOR_THIRD, options);
export const fontSizeMajorSecond = options =>
  fontSizeCretor(MAJOR_SECOND, options);
export const fontSizeMinorSecond = options =>
  fontSizeCretor(MINOR_SECOND, options);

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
