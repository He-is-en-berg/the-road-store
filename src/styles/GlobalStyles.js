import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

/* - Font sizes (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

- Spacing system (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128 */


:root {

}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  transition: background-color 0.3s;
}

html {
  font-size: 62.5%;
}

`;

export default GlobalStyles;
