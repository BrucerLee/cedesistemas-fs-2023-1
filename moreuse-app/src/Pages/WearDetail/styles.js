import styled from "styled-components";

export const WearDetailContainer= styled.section `
//border: 1px solid red;
display: flex;
flex-direction:column;

`;
export const WearImageContainer=styled.div`
//border: 1px solid green;
width: 100%;
display: flex;
justify-content: center;
img{
  //Utilizamos media querie para que los tamaños sean proporcionales a los dispositivos
  //Para los demas dispositivos
  width: 15%;
  //Ejemplo para tablets y smartphones
  @media only screen and (max-width: 768px){
    width: 30%;
  }
  ////////////////////
  height: auto;
}
`;
export const WearDetailContent=styled.div`
margin:0 15px;

`;
