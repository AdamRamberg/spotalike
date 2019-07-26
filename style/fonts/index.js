export const getFontFacesStyle = ({ family, faces }) =>
  faces.map(face => `${getFontFaceStyle({ family, ...face })}\n`);

const getFontFaceStyle = ({ style, weight, family, srcs, localSrcs = [] }) =>
  (style &&
    weight &&
    family &&
    srcs &&
    `
      @font-face {
        font-family: '${family}';
        font-style: ${style};
        font-weight: ${weight};
        font-display: auto;
        src: ${getFontSrcValue(srcs, localSrcs)};
      }
    `) ||
  undefined;

const getFontSrcValue = (srcs, localSrcs = []) =>
  localSrcs
    .map(src => `local('${src}')`)
    .concat(srcs.map(src => `url('${src.url}') format('${src.format}')`))
    .join(', ');
