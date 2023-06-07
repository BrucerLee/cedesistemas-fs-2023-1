//Importamos los componenetes de estilo
import styled from "styled-components"
/*
//Para hacer publica la hoja de estilos del Menú y poderla utilizar luego
export const MenuContainer =styled.section`
border-right: 4px solid #2EAAE2;
width:300px ;
position: fixed;//posicion fixed para que cuando el contenido haga scroll quede fijo el menu
top: 0px;
background-color: #2C2E83;
height: 100%;
display: none;//temporal mientras programamos cerrar el menu
`;
*/
//Con el context de abrir o cerrar el menu
export const MenuContainer =styled.section`
border-right: 4px solid #2EAAE2;
width:300px ;
position: fixed;//posicion fixed para que cuando el contenido haga scroll quede fijo el menu
top: 0px;
background-color: #2C2E83;
height: 100%;
display: ${props => props.isShown ? 'block':'none'};//con el context
`;

//Creamos los estilos para el envuelve los items del menu
export const  MenuItemsWrapper =styled.ul`
padding: 20px 15px;
a{
  color: #fff;
  text-decoration: none;
  //Con esta seupdoclase hacemos que al pasar por encima de la lista del menuj cabien de colores la lista
  &:hover {
    color: #2EAAE2;
  }
}
li{
  list-style: none;
  margin-top: 10px;
}
font-size: 1.3em;
`
;
export const MenuCloseWrapper = styled.div`
display: flex;
justify-content: right;
padding: 20px;

svg{
  color: #fff;
  font-size: 1.3em;
  cursor: pointer;
  &:hover{
    color: #2EAAE2;
  }
}
`
;
