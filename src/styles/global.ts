import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #202020;
  --red: #E52E4D;
  --headerbg: #0e0e0e;

  --blue-light: #6933FF;

  --text-title: #363F5F;
  --text-body: #969CB3;

  --shape: #FFFFFF

  --font-color: #50C878;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 
}
html {
  @media (max-width: 108px) {
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
// Font Styles
body, input, textarea, button {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}
h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}
// Font Styles End

button {
  cursor: pointer;
}

 [disabled] {
  opacity: 0.6;
  cursor: not-allowed;
 }









`
