import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
*{
    margin : 0;
    padding : 0;
    outline : 0;
    box-sizing : border-box;
}

html,body,#root{
    min-height : 100%;
}

body{
  background  : #f5f5f5;
  -webkit-font-smoothing: antialiased !important;
  font-family: Roboto, sans-serif;
}

body,input,button{
    color : #222;
    font-size : 14px;
}
button{
    cursor: pointer; 
}

`;
