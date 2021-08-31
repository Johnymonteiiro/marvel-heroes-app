import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
 *{
     margin: 0;
     padding:0;
     box-sizing: border-box;
     outline: none;
 }
html{
    width:100%;
}
body{
     width:100%;
     height: 100%;
     font-family:"Marvel";
     background-color:#DEDEDE;
 }
 a,ul,li{
     text-decoration:none;
     list-style:none;
 }
`;