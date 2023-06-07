import { Topbar } from "../Topbar"
import { Menu } from "../Menu"
import { PageContainer } from "./styles"
import { PageTitleContainer } from "./styles"//Importo cuando estilice el titulo de la pagina
import { useLocation } from "react-router-dom"//Se autoimporto al utiliar el uso de
import { useContext, useEffect } from "react"
import { MenuContext } from "../../Contexts/MenuContext"
//Cuando voy a importar varios compnenenres de estilos del mismo lugar podria ser de la siguiente anera:
//import { PageContainer,PageTitleContainer } from "./styles"
/*
//Esta fucncion renderiza pero no muestra el contenido de la pagina que debe
export const Page = () => {
  return (
    <>
      <Topbar />
      <div>aqui va el contenido de cada pagina</div>
      <Menu />
    </>

  )
}
*/
//Debemos utilizar un props, props.children renderiza todo el contenido de la pagina que llamamos
//trae todo lo que este entre <Page> <Page />
/*
export const Page = (props) => {
  return (
    <PageContainer>
      <Topbar />
      <div>
        {props.children}
      </div>
      <Menu />
      </PageContainer>

  )
}
*/
//Si queremos que la pagina incluya la propiedad del titulo
//El children es todo lo que esta dentro del componente (La página)
/*
export const Page = (props) => {
  return (
    <PageContainer>
      <Topbar />
      <PageTitleContainer>
        <h1>{props.title}</h1>
      </PageTitleContainer>
      <div>
        {props.children}
      </div>
      <Menu />
      </PageContainer>

  )
}
*/
/*
// Para renderizar el div del titulo solo cuando tenga valor o titulo lo condicionamos
export const Page = (props) => {
  return (
    <PageContainer>
      <Topbar />

      {// si es verdadero que tiene titulo se realiza lo del parentesis
        props.title &&(
          <PageTitleContainer>
             <h1>{props.title}</h1>
          </PageTitleContainer>
        )
      }
      <div>
        {props.children}
      </div>
      <Menu />
      </PageContainer>

  )
}
*/
//Para cerrar el menu cuando se cargue cada pagina utilizamos el hook useEffect

export const Page = (props) => {
  //Para escuchar el vento del cargue de la pagina para poder cerrar el menu
  const location = useLocation();
  //Utilizamos un hook para poder ver que imprime location, este useEffect nos permite
  //escuchar el cambio de estado de algo, adicionalmente le podeos indicar que ejecute algo cuando el componente se construya
  //funciona como funcion de ciclo de vida de componenetes es una funcion anonima
  const{ onCloseMenu}= useContext(MenuContext)
  useEffect (()=>{
    //Si se dejan los corchetes vacios se ejecuta una unica vez al inicio del componenete
    // console.log('location',location)
    hideMenu();
  },[])
  //Creamos la funcion que se ejecute
  const hideMenu= ()=>{
    onCloseMenu();
  }
  return (
    <PageContainer>
      <Topbar />

      {// si es verdadero que tiene titulo se realiza lo del parentesis
        props.title &&(
          <PageTitleContainer>
             <h1>{props.title}</h1>
          </PageTitleContainer>
        )
      }
      <div>
        {props.children}
      </div>
      <Menu />
      </PageContainer>

  )
}

