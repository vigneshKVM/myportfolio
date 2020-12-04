/********************************************/

import styled, { createGlobalStyle } from 'styled-components';

/********************************************/
const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Cormorant Infant';
    font-style: normal;
    font-weight: normal;
    src: local('Cormorant Infant'), url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');
}
:root{
  /*----Colors-----*/
  --deepPink: #FF1493;
  --lightPink: #FFB6C1;
  --hotPink: #FF69B4;
  --deepSkyBlue: #00BFFF;
  --black: #000000;
  --blackBG: #181818;
  --lightGrey: #D3D3D3;
  --veryLightGrey: #ededed;
  --veryVeryLighGrey: #F6F3F3;
  --mostLightGrey: #FAF9F9;
  --white: #FFFFFF;
  --red: #FF0000;
  --shadow: rgba(0,0,0,0.2);
}

* {
box-sizing: border-box;
font-size: 20px;
margin: 0;
padding: 0;
font-family: 'Cormorant Infant',serif;
}

@media only screen and (max-width: 1250px) {
    *{
        font-size: 16px;
    }
}

`;
/********************************************/
export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1400px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;
/********************************************/

export default GlobalStyles;
