# 🎵 Spotalike

A Next.js showcase app

## 👨‍💻 Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [styled-components](https://www.styled-components.com/)
- [react-spring](https://www.react-spring.io/)

## 🗒️ TODO

- Unit tests using [Jest](https://jestjs.io/)
- Translations using [FBT](https://facebookincubator.github.io/fbt/)
- Favicon
- More [react-spring](https://www.react-spring.io/) animations
- [Error boundaries for showing loading](https://codeburst.io/using-promises-and-error-boundaries-for-data-loading-within-your-react-redux-app-219f8d3a6d26) state when fetching data on the client.

## 🏛️ Project Structure

The project is structured is following

### 💅 Styling

Spotalike is using [styled-components](https://www.styled-components.com/) for styling.

#### Modular Type Scale

The project is using a responsive modular type scale, major second (1.125). For more info on type scales see [this](https://medium.com/sketch-app-sources/exploring-responsive-type-scales-cf1da541be54). Some fonts might differ a slightly compared to the sketches based on that. Spotalike is also taking inspiration from [Material Design's type scale system](https://material.io/design/typography/the-type-system.html#type-scale).

#### Units

Using REMs for all units, except for media queries that are using EMs. See [this](https://zellwk.com/blog/media-query-units/) article for more info on why.

Spacing methods are based on [Material Design](https://material.io/design/layout/spacing-methods.html) with a baseline of an apparent 8px.

#### Breakpoints

- xs: 20em / 320px
- s: 36em / 576px
- m: 48em / 768px
- l: 62em / 992px
- xl: 75em / 1200px

### 📃 Pages

All pages could be found under [/pages](/pages).

### 😴 Rest API

The REST API could be found under [/pages/api](/pages/api).

### 🚚 Components & Containers

The project tries to divide components into stateless and statefull components. See [this](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) article for more info.
