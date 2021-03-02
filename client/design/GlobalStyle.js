import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --color-primary: #55c57a;
  --color-primary-light: #7ed56f;
  --color-primary-dark: #28b485;
  --color-grey-light-1: #f7f7f7;
  --color-grey-light-2: #eee;
  --color-grey-dark: #777;
  --color-grey-dark-2: #ddd;
  --color-grey-dark-3: #333;
  --color-white: #fff;
  --color-black: #000;
  --color-secondary-light: #ffb900;
  --color-secondary-dark: #ff7730;
  --color-tertiary-light: #2998ff;
  --color-tertiary-dark: #5643fa;
  --color-tiffany-default: #0abab5;
  --color-sky-blue: #99ccff;
}
	*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: inherit;
}

html{
    font-size: 62.5%;
}
body{
    box-sizing: border-box;      
    background-image: linear-gradient(
    to right bottom,
    #0abab5,
    #5643fa
  );
   background-size: cover;
   min-height: 100vh;
     font-family:'Lato',sans-serif;
    font-weight: 400;
    line-height: 1.7;
    color:var(--color-grey-dark);
}

.container{
    max-width:120rem;
    min-height: 50rem;
    display: flex;
    flex-direction: column;
    background-color: var(--color-grey-light-2);
    margin: 0 auto;
    margin-top: 8rem;
    border-radius:.3rem;
}


.row{
   display: flex;
   height: 100%;
}
`;

export default GlobalStyle;
