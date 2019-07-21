module.exports = api => {
  api.cache(true);
  return {
    presets: ['next/babel'],
    plugins: [
      [
        'styled-components',
        {
          ssr: true,
          displayName: true,
          preprocess: false,
        },
      ],
      'inline-react-svg',
    ],
  };
};
