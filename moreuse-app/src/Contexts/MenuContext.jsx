//Creamos el archivo del componente menu context con el fin de guardar aca el estado del menu
import React ,{createContext,useState} from "react";
//Podemos crear el estado inicial del menu
//Se puede tener un booleano o un objeto el export es para poderlo utilizar de donde se llama
/*
export const MenuContext = createContext(false);
//Creamos el componenete que lo va a utilizar

//Sin utilizar el Hook de use.state quedaria asi.
export const MenuContextStore =(props)=>{
  return(
    <MenuContext.Provider value={true}>
      {props.children}
    </MenuContext.Provider>
  )
}
*/
//Para que quede mas extendible no vamos a retornar un booleano, retornaremos un objeto co atributos
const initialState ={
  isOpen:false
};
export const MenuContext = createContext(initialState);

export const MenuContextStore =(props)=>{
  //utilizamos el useState para poder intercambiar esa propiedad
  const[menuState,setMenuState]= useState(initialState);
  //La administracion del cambio del estado seria la siguiente funcion
  const onChangeOpenCloseMenu = () => {
    //Descompongo el objeto y accedo al valor de isOpen del objeto
    setMenuState({...menuState,isOpen:!menuState.isOpen});
    //Creamos la funcion para cerrar el menu cuando carguen las paginas
  }
  const onCloseMenu= ()=>{
    setMenuState({...menuState,isOpen: false});

  }
  return(
    <MenuContext.Provider value={{menuState,onChangeOpenCloseMenu,onCloseMenu}}>
      {props.children}
    </MenuContext.Provider>
  )
}
