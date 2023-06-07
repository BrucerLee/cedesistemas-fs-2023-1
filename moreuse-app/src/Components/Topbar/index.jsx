import {IoMenu} from "react-icons/io5";
import { MenuIconContainer, TopbarContainer } from "./styles";
//Importamos el MenuContext para poder cambiar esa propiedad
import { MenuContext } from "../../Contexts/MenuContext";
//Importamos el useContext de React
import { useContext } from "react";

/*
//Esta seria la funcion de exportar el Topbar sin evento onclick cuando lo presionen
export const Topbar = () =>{
  //Para utilizar el MenuContext como hooks o estado
  const isOpen=useContext(MenuContext)
  return(
    <TopbarContainer>
      <MenuIconContainer>
        <IoMenu />
      </MenuIconContainer>
      <div>
        <img width="170px" alt="logo" src="assets/logo.png"/>
      </div>
    </TopbarContainer>
  )

}
*/
/*
//Funcion que se ejecutara por ejemplo con el onClick
const toggleMenu=()=>{
  alert('toggleMenu')
}
*/

//La funcion con el evento Onclick
export const Topbar = () =>{
  /*
  //Para utilizar el MenuContext como hooks o estado si fuera solo booleano
  const isOpen=useContext(MenuContext)
  */
 //Asi seria la utilizacion del Menu Contex con el objeto
  const {menuState, onChangeOpenCloseMenu} = useContext(MenuContext)
/*
//Funcion que se ejecutara por ejemplo con el onClick pero la que maneja el estado
  const toggleMenu=()=>{
    onChangeOpenCloseMenu ();
  //alert('toggleMenu')
  }
  return(
    <TopbarContainer>
      <MenuIconContainer onClick={toggleMenu}>
        <IoMenu />
      </MenuIconContainer>
      <div>
        <img width="170px" alt="logo" src="assets/logo.png"/>
      </div>

    </TopbarContainer>
  )
  }
  */
//Para colocar un texto si esta abierto o no el topbar podemos utilziar este fragmento
//despues del div y antes de cerrar el </TopbarContainer>
/*

      <p>
         {menuState.isOpen ? "abierto":"cerrado"}
      </p>
*/
//Para que la imagen del logo se observe en todas las paginas del detalle debemos cambiar la ruta
// de imagen elativa a absoluta cambiamos.src="assets/logo.png" por src="/assets/logo.png"
const toggleMenu=()=>{
  onChangeOpenCloseMenu ();
//alert('toggleMenu')
}
return(
  <TopbarContainer>
    <MenuIconContainer onClick={toggleMenu}>
      <IoMenu />
    </MenuIconContainer>
    <div>
      <img width="170px" alt="logo" src="/assets/logo.png"/>
    </div>

  </TopbarContainer>
)
}
