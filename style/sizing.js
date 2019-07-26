import { css } from 'styled-components';

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
  /* Make apparent size of 1rem equal 10px -> easier calculations between pixels and rems */
  apprentPxSize1Rem: 10,
  apparentDefaultPxFontSize: 16,
  fontScale: MAJOR_SECOND,
  spacingPxBaseline: 8,
};

export const createSizings = options => {
  const mergedOptions = Object.assign({}, defaultOptions, options);
  const {
    apprentPxSize1Rem,
    apparentDefaultPxFontSize,
    fontScale,
    spacingPxBaseline,
  } = mergedOptions;
  const rootFontSizePercentage =
    (apprentPxSize1Rem / BROWSER_DEFAULT_FONT_SIZE) * 100;
  /* Readjust default apparent font size to be apparentDefaultPxFontSize */
  const apparentDefaultRemFontSize =
    apparentDefaultPxFontSize / apprentPxSize1Rem;
  const fontSizeMap = createFontSizeMap(fontScale, apparentDefaultRemFontSize);
  const spacing = units =>
    `${(spacingPxBaseline / apprentPxSize1Rem) * units}rem`;

  return {
    typeScale: ({
      family,
      size,
      weight,
      textTransform = 'none',
      letterSpacing = 'normal',
      lineHeight = 'normal',
    }) => {
      // TODO: Validation of parameters
      let fontSize = '';
      if (size && FONT_SIZE_KEYS.includes(size)) {
        fontSize = `font-size: ${fontSizeMap[size]};`;
      } else if (size) {
        fontSize = `font-size: ${size}rem;`;
      } else {
        fontSize = `font-size: ${fontSizeMap.default};`;
      }

      return css`
        ${family && `font-family: ${family};`}
        ${fontSize}
        ${weight && `font-weight: ${weight};`}
        ${textTransform && `text-transform: ${textTransform};`}
        ${letterSpacing && `letter-spacing: ${letterSpacing};`}
        ${lineHeight && `line-height: ${lineHeight};`}
      `;
    },
    globalStyles: css`
      :root {
        font-size: ${rootFontSizePercentage}%;
      }
      body {
        font-size: ${fontSizeMap.default};
      }
    `,
    spacing,
    marginX: units => css`
      margin-left: ${spacing(units)};
      margin-right: ${spacing(units)};
    `,
    marginY: units => css`
      margin-top: ${spacing(units)};
      margin-bottom: ${spacing(units)};
    `,
    paddingX: units => css`
      padding-left: ${spacing(units)};
      padding-right: ${spacing(units)};
    `,
    paddingY: units => css`
      padding-top: ${spacing(units)};
      padding-bottom: ${spacing(units)};
    `,
  };
};

const createFontSizeMap = (scale, apparentRemFontSize) => ({
  xxl: `${apparentRemFontSize * scale ** 4}rem`,
  xl: `${apparentRemFontSize * scale ** 3}rem`,
  large: `${apparentRemFontSize * scale ** 2}rem`,
  medium: `${apparentRemFontSize * scale}rem`,
  default: `${apparentRemFontSize}rem`,
  smaller: `${apparentRemFontSize * scale ** -0.5}rem`,
  small: `${apparentRemFontSize * scale ** -1}rem`,
  xs: `${apparentRemFontSize * scale ** -2}rem`,
  xxs: `${apparentRemFontSize * scale ** -3}rem`,
});

export const FONT_SIZE_KEYS = [
  'xxl',
  'xl',
  'large',
  'medium',
  'default',
  'smaller',
  'small',
  'xs',
  'xxs',
];
