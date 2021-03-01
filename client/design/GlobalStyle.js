import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
   background-image: linear-gradient( to right bottom,$color-tiffany-default,rgba($color-tertiary-dark,.5));
   background-size: cover;
   min-height: 100vh;
     font-family:'Lato',sans-serif;
    font-weight: 400;
    line-height: 1.7;
    color:$color-grey-dark;
}

.container{
    max-width:120rem;
    min-height: 50rem;
    display: flex;
    flex-direction: column;
    background-color:$color-grey-light-2;
    margin: 0 auto;
    margin-top: 8rem;
    border-radius:.3rem;
}

.header{
    height: 10rem;
    display: flex;
    position: relative;
}

.row{
   display: flex;
   height: 100%;
}
`;

export default GlobalStyle;
