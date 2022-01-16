import { createGlobalStyle } from 'styled-components';
import CustomFont from './fonts/a_avantelt-light_[bg.allfont.net](2).ttf';

console.log(CustomFont);

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'CustomFont';
  src: url(${CustomFont}) format('truetype'),
      
}

body {
    font-family: 'CustomFont';
   
}

button {
    font-family: 'CustomFont';
}
`;

export default FontStyles;
