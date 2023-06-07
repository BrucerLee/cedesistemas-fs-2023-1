import styled from "styled-components"
import { TopbarHeith } from "../../globalStyles";
//Para exportar el espacio donde debe comenzar el contenido respetando el del Topbar
export const PageContainer =styled.section`
margin-top: ${TopbarHeith + 20}px;
`;
//Creamos el estilo para los titulos de las paginas

export const PageTitleContainer=styled.div`
margin: 0 20px;
text-align: center;
`;


