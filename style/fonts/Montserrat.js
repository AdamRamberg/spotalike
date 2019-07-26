import { getFontFacesStyle } from '.';

const montserrat = {
  family: 'Montserrat',
  faces: [
    {
      style: 'italic',
      weight: 100,
      localSrcs: ['Montserrat Thin Italic', 'Montserrat-ThinItalic'],
      srcs: [
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-100italic.woff2',
          format: 'woff2',
        },
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-100italic.woff',
          format: 'woff',
        },
      ],
    },
    {
      style: 'normal',
      weight: 100,
      localSrcs: ['Montserrat Thin', 'Montserrat-Thin'],
      srcs: [
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-100.woff2',
          format: 'woff2',
        },
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-100.woff',
          format: 'woff',
        },
      ],
    },
    {
      style: 'italic',
      weight: 200,
      localSrcs: [
        'Montserrat ExtraLight Italic',
        'Montserrat-ExtraLightItalic',
      ],
      srcs: [
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-200italic.woff2',
          format: 'woff2',
        },
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-200italic.woff',
          format: 'woff',
        },
      ],
    },
    {
      style: 'normal',
      weight: 200,
      localSrcs: ['Montserrat ExtraLight', 'Montserrat-ExtraLight'],
      srcs: [
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-200.woff2',
          format: 'woff2',
        },
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-200.woff',
          format: 'woff',
        },
      ],
    },
    {
      style: 'italic',
      weight: 300,
      localSrcs: ['Montserrat Light Italic', 'Montserrat-LightItalic'],
      srcs: [
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-300italic.woff2',
          format: 'woff2',
        },
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-300italic.woff',
          format: 'woff',
        },
      ],
    },
    {
      style: 'normal',
      weight: 300,
      localSrcs: ['Montserrat Light', 'Montserrat-Light'],
      srcs: [
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-300.woff2',
          format: 'woff2',
        },
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-300.woff',
          format: 'woff',
        },
      ],
    },
    {
      style: 'italic',
      weight: 400,
      localSrcs: ['Montserrat Italic', 'Montserrat-Italic'],
      srcs: [
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-400italic.woff2',
          format: 'woff2',
        },
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-400italic.woff',
          format: 'woff',
        },
      ],
    },
    {
      style: 'normal',
      weight: 400,
      localSrcs: ['Montserrat'],
      srcs: [
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-400.woff2',
          format: 'woff2',
        },
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-400.woff',
          format: 'woff',
        },
      ],
    },
    {
      style: 'italic',
      weight: 500,
      localSrcs: ['Montserrat Medium Italic', 'Montserrat-MediumItalic'],
      srcs: [
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-500italic.woff2',
          format: 'woff2',
        },
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-500italic.woff',
          format: 'woff',
        },
      ],
    },
    {
      style: 'normal',
      weight: 500,
      localSrcs: ['Montserrat Medium', 'Montserrat-Medium'],
      srcs: [
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-500.woff2',
          format: 'woff2',
        },
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-500.woff',
          format: 'woff',
        },
      ],
    },
    {
      style: 'italic',
      weight: 600,
      localSrcs: ['Montserrat SemiBold Italic', 'Montserrat-SemiBoldItalic'],
      srcs: [
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-600italic.woff2',
          format: 'woff2',
        },
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-600italic.woff',
          format: 'woff',
        },
      ],
    },
    {
      style: 'normal',
      weight: 600,
      localSrcs: ['Montserrat SemiBold', 'Montserrat-SemiBold'],
      srcs: [
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-600.woff2',
          format: 'woff2',
        },
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-600.woff',
          format: 'woff',
        },
      ],
    },
    {
      style: 'italic',
      weight: 700,
      localSrcs: ['Montserrat Bold Italic', 'Montserrat-BoldItalic'],
      srcs: [
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-700italic.woff2',
          format: 'woff2',
        },
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-700italic.woff',
          format: 'woff',
        },
      ],
    },
    {
      style: 'normal',
      weight: 700,
      localSrcs: ['Montserrat Bold', 'Montserrat-Bold'],
      srcs: [
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-700.woff2',
          format: 'woff2',
        },
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-700.woff',
          format: 'woff',
        },
      ],
    },
    {
      style: 'italic',
      weight: 800,
      localSrcs: ['Montserrat ExtraBold Italic', 'Montserrat-ExtraBoldItalic'],
      srcs: [
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-800italic.woff2',
          format: 'woff2',
        },
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-800italic.woff',
          format: 'woff',
        },
      ],
    },
    {
      style: 'normal',
      weight: 800,
      localSrcs: ['Montserrat ExtraBold', 'Montserrat-ExtraBold'],
      srcs: [
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-800.woff2',
          format: 'woff2',
        },
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-800.woff',
          format: 'woff',
        },
      ],
    },
    {
      style: 'italic',
      weight: 900,
      localSrcs: ['Montserrat Black Italic', 'Montserrat-BlackItalic'],
      srcs: [
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-900italic.woff2',
          format: 'woff2',
        },
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-900italic.woff',
          format: 'woff',
        },
      ],
    },
    {
      style: 'normal',
      weight: 900,
      localSrcs: ['Montserrat Black', 'Montserrat-Black'],
      srcs: [
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-900.woff2',
          format: 'woff2',
        },
        {
          url: '/static/fonts/Montserrat/montserrat-v13-latin-900.woff',
          format: 'woff',
        },
      ],
    },
  ],
};

export default getFontFacesStyle(montserrat);
