import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  color: inherit;
}

textarea {
  resize: none;
}

button {
  cursor: pointer;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}
`;

export const GlobalContainer = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 25px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;
