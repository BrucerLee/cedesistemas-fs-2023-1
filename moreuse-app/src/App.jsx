import {RouterProvider} from "react-router-dom"; // Me permite cargar las paginas
import { router } from "./Routes/Router";
import { GlobalStyle } from "./globalStyles";
import { MenuContextStore } from "./Contexts/MenuContext";//Se autoimporto cuando utilice el Componente Context
import { UserContextStore } from "./Contexts/UserContext";// Se autoimporto al utilizar el contexto del usuario

/* //Sin el componente de Context
export const App = () => {
    return (
      <>
      <GlobalStyle />
      <RouterProvider router= {router} />
      </>
  )
}
*/
//Con el componente Context
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <UserContextStore>
        <MenuContextStore>
           <RouterProvider router= {router} />
        </MenuContextStore>
      </UserContextStore>
    </>
)
}
