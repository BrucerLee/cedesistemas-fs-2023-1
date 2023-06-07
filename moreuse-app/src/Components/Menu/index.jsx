import {Link} from 'react-router-dom'
import { MenuCloseWrapper, MenuContainer, MenuItemsWrapper } from './styles'
//Importamos los Iconos para el que cerrara el menu
import { IoClose } from 'react-icons/io5'
import { useContext } from 'react' //se autoimporto al llamar el menuState de useContext
import { MenuContext } from '../../Contexts/MenuContext'//Se autoimporto al llamar el MenuContext
import { UserContext } from '../../Contexts/UserContext'//Se autoimporto al utilizar el contexto del usuario

/*
//Estas serian las opciones el menu sin la validacion del logeo del usuario
const OptionsMenu =[
  {
    name:"Inicio",
    path:"/"
  },
  {
    name:"Perfil",
    path:"/profile"
  },
  {
    name:"Mis prendas",
    path:"/my-clothes"
  },
  {
    name:"Iniciar Sesión",
    path:"/login"
  }
  ,
  {
    name:"Cerrar Sesión",
    path:"/logout"
  }
]
*/
//Estas sera las opciones del menu con la condición de logueo del usuario
const OptionsMenu =[
  {
    name:"Inicio",
    path:"/"

  },
  {
    name:"Inicio",
    path:"/",
    authRequiered:true
  },
  {
    name:"Perfil",
    path:"/profile",
    authRequiered:true
  },
  {
    name:"Mis prendas",
    path:"/my-clothes",
    authRequiered:true
  },
  {
    name:"Iniciar Sesión",
    path:"/login"
  }
  ,
  {
    name:"Cerrar Sesión",
    path:"/logout",
    authRequiered:true
  }
]
/*
//Adicionando estilos al <ul> sin el context del menu que nos optiene la accion cerrado o abierto
export const Menu = () =>{
  return(
    <MenuContainer>
      <MenuCloseWrapper>
        <IoClose/>
        </MenuCloseWrapper>
      <MenuItemsWrapper>
        {
          OptionsMenu.map((item,index)=>(
          <Link  key={index} to={item.path}><li>{item.name}</li></Link>
          )
          )
        }
      </MenuItemsWrapper>
    </MenuContainer>
  )
}
*/
/*
//Con el contexto del menu para la accion de abrir o cerrar
export const Menu = () =>{
  //Trayendo el estado del contexto, es la forma de comunicarnos entre contexto y compnente
  const {menuState}= useContext(MenuContext);
  return(
    <MenuContainer>
      <MenuCloseWrapper>
        <IoClose/>
        </MenuCloseWrapper>
      <MenuItemsWrapper>
        {
          OptionsMenu.map((item,index)=>(
          <Link  key={index} to={item.path}><li>{item.name}</li></Link>
          )
          )
        }
      </MenuItemsWrapper>
    </MenuContainer>
  )
}
*/
/////////////////////////////////////////////////////////////////////////
/*
//Asi exportariamos el menu sin la validacion del logueo del usuario
//Con el contexto del menu para la accion de abrir o cerrar
export const Menu = () =>{
  //Trayendo el estado del contexto, es la forma de comunicarnos entre contexto y compnente
  const {menuState,onChangeOpenCloseMenu}= useContext(MenuContext);
  //Trayendo el contexto del usuario si esta logueado o no
  const {user}= useContext(UserContext);
  return(
    <MenuContainer isShown={menuState.isOpen}>
      <MenuCloseWrapper onClick={onChangeOpenCloseMenu}>
        <IoClose/>
        </MenuCloseWrapper>
      <MenuItemsWrapper>
        {
          OptionsMenu.map((item,index)=>(
          <Link  key={index} to={item.path}><li>{item.name}</li></Link>
          )
          )
        }
      </MenuItemsWrapper>
    </MenuContainer>
  )
}
*/
///////////////////////////////////////////////////////////////////////////////////
export const Menu = () =>{
  //Trayendo el estado del contexto, es la forma de comunicarnos entre contexto y compnente
  const {menuState,onChangeOpenCloseMenu}= useContext(MenuContext);
  //Trayendo el contexto del usuario si esta logueado o no
  const {user}= useContext(UserContext);
  return(
    <MenuContainer isShown={menuState.isOpen}>
      <MenuCloseWrapper onClick={onChangeOpenCloseMenu}>
        <IoClose/>
        </MenuCloseWrapper>
      <MenuItemsWrapper>
        {
          OptionsMenu.map((item,index)=>{
            if(user.isAuth && item.authRequiered){
              return <Link  key={index} to={item.path}><li>{item.name}</li></Link>
              }
              if(!user.isAuth && !item.authRequiered){
                return <Link  key={index} to={item.path}><li>{item.name}</li></Link>
                }
            }
          )
        }
      </MenuItemsWrapper>
    </MenuContainer>
  )
}




///////////////////////////////////////////////////////////////////////////////
/*
//Utilizando la hoja de estilos se cambiaria el componente <section>
//Por el nuevo creado en la hoja de estilos del componente Menú
//esta seria sin los estilos para el <ul>
export const Menu = () =>{
  return(
    <MenuContainer>
      <ul>
        {
          OptionsMenu.map((item,index)=>(
          <Link  key={index} to={item.path}><li>{item.name}</li></Link>
          )
          )
        }
      </ul>
    </MenuContainer>
  )
}
*/
/*
//Esta seria la definición del Menú si no se utiliza la hoja de estilos
export const Menu = () =>{
  return(
    <section>
      <ul>
        {
          OptionsMenu.map((item,index)=>(
          <Link  key={index} to={item.path}><li>{item.name}</li></Link>
          )
          )
        }
      </ul>
    </section>
  )
}
*/
