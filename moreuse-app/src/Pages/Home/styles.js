//aArchivo que me permite generar los estilos
import styled from 'styled-components';

export const WearListContainer = styled.section `
//Con Display flex organizamos las imagenes una al lado del otro
display: flex;
//Flex-Wrap hace que no se forme scroll orizontal las imagenes se organizaran en otra fila inferior
flex-wrap: wrap;
margin: 10px 15px;
justify-content: center;
`;
