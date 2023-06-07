import styled from "styled-components";
import {TopbarHeith} from '../../globalStyles'
export const TopbarContainer= styled.header`
display: flex;
border-bottom: 2px solid #ccc;
padding: 5px 10px;
//Para qeu cuando el contenido haga scroll la barra superior quede fija
position: fixed;
left: 0;
top: 0;
background-color: #fff;
width: 100%;
height:${TopbarHeith}px;//Para que el TopBar tenga una dimension fija
                        //El valir viene de global styles
///////////////////////////////////////////////////////////////////////
`;
export const MenuIconContainer=styled.div`
display: flex;
justify-content: center;
align-items: center;
//le damos un tamaño mayor al icono con la siguiente instruccion
svg{
  font-size: 1.6em;
}
&:hover{
  color: #666;
  cursor: pointer;
}
`
;


