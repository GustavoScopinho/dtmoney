import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #202024;
    --red: #e52e4d;
    --black: #000;
    --text-title: #E1E1E6;
    --green: #00B37E;
  }


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }

  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 700;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

`