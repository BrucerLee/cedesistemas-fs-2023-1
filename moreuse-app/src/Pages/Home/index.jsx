//Con esta funcion exportamos sin lazy
/*
export const Home = () =>{
  return(
    <h1>Home Page</h1>
  )
}
*/
//////////////////////////////////////////////
/*
//Si utilizamos Lazy carga peresoza debemos exportar el componenete asi
 const Home = () =>{
  return(
    <h1>Home Page</h1>
  )
}
export default Home;
/////////////
*/
//Si importo el componente de Menu y topbar desde Page ya no se neceitan independientes
/*
import { Menu } from "../../Components/Menu";
import { Topbar } from "../../Components/Topbar";
*/
/////////////////Para ensayar la rederizacion del menu <> </> es un fragment
//al colocar el Topbar y el Menu lo auto importa en caso contrario se deben importar
//import { Menu } from "../../Components/Menu";
//import { Topbar } from "../../Components/Topbar";
/*
const Home = () =>{
  return(
    <>
    <Topbar />
    <h1>Home Page</h1>
    <Menu />
    </>
  )
}
export default Home;
////////////////
*/

//utilizando el index de Page
import { Page } from "../../Components/Page"
import { WearItem } from "./Components/WearItem"
import { WearListContainer } from "./styles"
/*
//Inicialmente creamos unos objetos que nos retornara la pagina Home
const WEAR_LIST = [
{
  image:'https://offcorss.vteximg.com.br/arquivos/ids/772866-460-540/51048852-Rojo-18-1660_1.jpg?v=638030964301800000',
  name:'Camisa Leñadora',
  target:'2 meses',
  gender:'masculino'
},
{
  image:'https://cdn.shopify.com/s/files/1/0701/5229/0615/products/0011_420145-VERDE-1_1800x1800.jpg?v=1683325910',
  name:'Pantalon Corto',
  target:'6 meses',
  gender:'masculino'
},
{
  image:'https://cdn.shopify.com/s/files/1/0701/5229/0615/products/0002_Vestido-Nina-390166-Rayas-Codelin-1_1800x1800.jpg?v=1679374515',
  name:'Vestido',
  target:'4 meses',
  gender:'femenino'
}
]
///////////////////////////////////////////////////
*/
//Agregamos los id a los items para que cuando el usuario seleccione uno se dirija a la siguiente pagina del detalle
// con la notación de guin bajo iniciando _id con el fin de que esa es la que se utiliza despues en base de datos moongose
const WEAR_LIST = [
  {
    _id:1,
    image:'https://offcorss.vteximg.com.br/arquivos/ids/772866-460-540/51048852-Rojo-18-1660_1.jpg?v=638030964301800000',
    name:'Camisa Leñadora',
    target:'2 meses',
    gender:'masculino'
  },
  {
    _id:2,
    image:'https://cdn.shopify.com/s/files/1/0701/5229/0615/products/0011_420145-VERDE-1_1800x1800.jpg?v=1683325910',
    name:'Pantalon Corto',
    target:'6 meses',
    gender:'masculino'
  },
  {
    _id:3,
    image:'https://cdn.shopify.com/s/files/1/0701/5229/0615/products/0002_Vestido-Nina-390166-Rayas-Codelin-1_1800x1800.jpg?v=1679374515',
    name:'Vestido',
    target:'4 meses',
    gender:'femenino'
  }
  ]
  ///////////////////////////////////////////////////
  //Para la redireccion al detalle de la prenda lo hacemos en el componente <WearItem>
const Home = () =>{
  return(
    <Page>

      <WearListContainer>
      {
        WEAR_LIST.map((item,key)=><WearItem  key={key} {...item}/>)//Traemos cada objeto,desestructurar el objeto
        //image={item.image} name={item.name} en caso de no desestructurar el objeto tocaria traer uno a uno
      }
      </WearListContainer>
      </Page>
  )
}
export default Home;

