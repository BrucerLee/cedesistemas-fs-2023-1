import styled,{createGlobalStyle} from 'styled-components';
//Para crear una constante del ancho del Topbar para que las paginas la tomen
export const TopbarHeith =45;


export const GlobalStyle = createGlobalStyle`
// Nos ayuda a que no se salgan los componentes de las cajas
*,::after,::before{
    box-sizing: border-box;
}
////////
body{
  margin:o;
  padding: 0;
  font-family:'Montserrat','Helvetica';
}
//Creando el estilo global para los hipervinculos Link to
a{
  color: #2C2E83;
  text-decoration: none;
}
a:hover{
  color: #2EAAE2;
}
`;
//Crearemos el componenete de estilos para los formularios

export const FormContainer=styled.section`
display: flex;
justify-content: center;
form{
  width: 380px;
  //border: 1px solid red;
}
`;

export const FormControl= styled.div`
  width:100%;
  margin: 20px 0;
  label{
    width: 100%;
    //Para que el label funcione como un bloque
    display: block;
    text-align: center;
  }
  input,textarea,select{
    width: 100%;
    font-family: "Montserrat";
    font-size: 1.1em;
    border: 2px solid #2C2E83;
    padding: 10px 12 px;
    text-align: center;
    border-radius: 4px;
  }
  //Podemos redefinir una propiedad en este caso del text area donde comienza el texto
  // el !important es para que el HTML  priorice esa sobrescripción de la caracteristica
  //Aunque no seria tan necesario ya que renderiza en el orden de como se coloquen las caracteristicas de CSS
  textarea{
    text-align: left !important;
  }
  span{
    color: red;
    font-size: 0.89em;
}

`;
export const Content = styled.section`
margin: 10px 20px;
`;

