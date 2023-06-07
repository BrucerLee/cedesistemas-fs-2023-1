/*
export const WearItem= (props)=>{
  return(
    <div>
      <img alt="wear" src=""/>
      <h3>Camisa Leñadora</h3>
      <h5>Niños 4-5 años</h5>
    </div>
  )
}
*/
/* esta es una opción para traer los objetos por props (propiedades), colocamos
//props.(El atributo que necesitamos)
export const WearItem= (props)=>{
  return(
    <div>
      <img alt="wear" src=""/>
      <h3>{props.name}</h3>
      <h5>Niños 4-5 años</h5>
    </div>
  )
}
*/
//esta es la solucion mas optima la cual me permite asignarle variables por defecto por si no llega el atributo
/*
export const WearItem= ({image,name,target,gender})=>{
  return(
    <div>
      <img width="100px" alt="wear" src={image}/>
      <h3>{name}</h3>
      <h5>{target}/{gender}</h5>
    </div>
  )
}
*/
//En este fragmento de codigo utilizamos el componente de estilo WearItemContainer

import { Link } from "react-router-dom" //Se autoimporto cuando colocamos el componenete para la redireccion a la pagina del detalle
import { WearItemContainer, WearItemImage } from "./styles"
/*
export const WearItem= ({image,name,target,gender})=>{
  return(
    <WearItemContainer>
      <img width="100px" alt="wear" src={image}/>
      <h3>{name}</h3>
      <h5>{target}/{gender}</h5>
    </WearItemContainer>
  )
}
*/
//Para organizar las imagenes colocamos un <div> el cual podemos estilizar a traves de un componente individual
/*
export const WearItem= ({image,name,target,gender})=>{
  return(
    <WearItemContainer>
      <div>
      <img width="100px" alt="wear" src={image}/>
      </div>
      <h3>{name}</h3>
      <h5>{target}/{gender}</h5>
    </WearItemContainer>
  )
}
*/
//Importando el componente para la imagen y dejando el div para que no se estire con las caracteristicas del componente
/*
export const WearItem= ({image,name,target,gender})=>{
  return(
    <WearItemContainer>
      <WearItemImage>
        <div>
          <img width="100px" alt="wear" src={image}/>
        </div>
      </WearItemImage>
      <h3>{name}</h3>
      <h5>{target}/{gender}</h5>
    </WearItemContainer>
  )
}
*/
//Para que redieccione cuando den click en home a la prenda , a la proxima pagina del detalle
//Colocamoe el elemnto  Link to
//Una manera de concatenar el _id seria <Link to={"/wear-detail/" + _id}>
//La otra manera seria <Link to={`/wear-detail/${_id}`}>
export const WearItem= ({_id,image,name,target,gender})=>{
  return(
    <Link to={`/wear-detail/${_id}`}>
    <WearItemContainer>
      <WearItemImage>
        <div>
          <img width="100px" alt="wear" src={image}/>
        </div>
      </WearItemImage>
      <h3>{name}</h3>
      <h5>{target}/{gender}</h5>
    </WearItemContainer>
    </Link>
  )
}

