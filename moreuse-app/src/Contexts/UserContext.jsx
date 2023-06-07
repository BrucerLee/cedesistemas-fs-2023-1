//Para crear el contesto para los datos del usuario
import React, {createContext,useState} from "react";
//Creamos el estado inicial de los datos del usuario
const initialState={

  isAuth:false,
  name:'',
  email:'',
  phone:'',
  address:''
};
export const UserContext= createContext(initialState);
export const UserContextStore =(props)=>{
  const [user,setUser]= useState(initialState);
  const setAthorization=(userData)=>{
    setUser({isAuth:true,...userData});
  }
   const removeAthorization =()=>{
    setUser(initialState);
   }
   //Terminada la definición del contexto se debe llevar al archivo  App el <UserContextStore></UserContextStore>
  return(
    <UserContext.Provider value={{user,setAthorization,removeAthorization}}>
      {props.children}

    </UserContext.Provider>

  )

}

