/*
export const WearDetail = () =>{
  return(
    <h1>Wear Detail Page</h1>
  )
}
*/
/*
import { Page } from "../../Components/Page"
 const WearDetail = () =>{
  return(
    <Page>
      <h1>Wear Detail Page</h1>
    </Page>

  )
}
export default WearDetail
*/
//Antes de los estilos de los coponentes
/*
import { Page } from "../../Components/Page"
 const WearDetail = () =>{
  return(
    <Page>
      <section>
        <div>
          <img src="https://offcorss.vteximg.com.br/arquivos/ids/772866-460-540/51048852-Rojo-18-1660_1.jpg?v=638030964301800000"/>
        </div>
          <div>
           <h3>Camisa Leñadora</h3>
           <h4>2 meses /Masculino</h4>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, quia dolores, aspernatur magni unde nostrum expedita nihil cum suscipit dicta esse totam ullam magnam veniam dolore iusto eaque. Sed, quae!</p>
          </div>
        <button>Comprar</button>
      </section>
    </Page>

  )
}
export default WearDetail
*/
//Importando los estilos creados para este componente
import { useParams } from "react-router-dom"// Se autoimporto cuando llamo el hook useParams para utilizar el hook al implementar el id de la ruta
import { Button } from "../../Components/Button"
import { Page } from "../../Components/Page"
import { WearDetailContainer, WearDetailContent, WearImageContainer } from "./styles"
/*
 const WearDetail = () =>{
  return(
    <Page>
      <WearDetailContainer>
        <WearImageContainer>
          <img src="https://offcorss.vteximg.com.br/arquivos/ids/772866-460-540/51048852-Rojo-18-1660_1.jpg?v=638030964301800000"/>
        </WearImageContainer>
          <WearDetailContent>
           <h3>Camisa Leñadora</h3>
           <h4>2 meses /Masculino</h4>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, quia dolores, aspernatur magni unde nostrum expedita nihil cum suscipit dicta esse totam ullam magnam veniam dolore iusto eaque. Sed, quae!</p>
          </WearDetailContent>

      </WearDetailContainer>

      <Button text="Comprar"/>
    </Page>

  )
}
*/
// Para utilizar el _id de la ruta de la prenda cuando se seleccione para ir al detalle
const WearDetail = () =>{
  //Agregamos el dato de la url de la redireccion de la ruta utilizamos un hook de la dependencia
  const {id}= useParams();
  return(
    <Page>
      <WearDetailContainer>
        <WearImageContainer>
          <img src="https://offcorss.vteximg.com.br/arquivos/ids/772866-460-540/51048852-Rojo-18-1660_1.jpg?v=638030964301800000"/>
        </WearImageContainer>
          <WearDetailContent>
            <h6>referencia: {id}</h6>
           <h3>Camisa Leñadora</h3>
           <h4>2 meses /Masculino</h4>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, quia dolores, aspernatur magni unde nostrum expedita nihil cum suscipit dicta esse totam ullam magnam veniam dolore iusto eaque. Sed, quae!</p>
          </WearDetailContent>

      </WearDetailContainer>

      <Button text="Comprar"/>
    </Page>

  )
}
export default WearDetail
