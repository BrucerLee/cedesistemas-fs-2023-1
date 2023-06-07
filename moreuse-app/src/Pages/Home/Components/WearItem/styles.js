//En este archivo estilizamos el componenete de WearItems
import styled from "styled-components";
export const WearItemContainer = styled.div`
//border: 1px solid red;
//Le damos un tamaño fijo a cada elemento(Descripción de prenda)
width: 210px;
display: flex;
//Con la siguiente propiedad coloca cada elemento uhna debajo del otro
flex-direction: column;
padding: 5px;
//para alinear al centro los elementos que estan uno debajo de otro
align-items: center;
margin: 2px 0;
h5{
  margin: 0;
}
h3{
  margin: 10px 0 ;
}
&:hover{
  background-color: #f2f2f2;
  cursor: pointer;
}
`;
export const WearItemImage=styled.div`
//border: 1px solid red;
width: 100%;
height: 160px;
display: flex;
justify-content: center;
ima{
  width: 100%;
  height: 100%;
}
`;

