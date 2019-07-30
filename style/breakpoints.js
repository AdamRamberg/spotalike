import { css } from 'styled-components';

const createMixins = breakpoints =>
  Object.keys(breakpoints).reduce(
    (map, key) => ({
      ...map,
      [key]: (...args) => css`
        @media only screen and (min-width: ${breakpoints[key]}) {
          ${css(...args)}
        }
      `,
    }),
    {},
  );

export default createMixins;
