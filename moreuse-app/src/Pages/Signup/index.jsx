//Importo los componentes transversales
import { Page } from '../../Components/Page';
import { Button} from'../../Components/Button';
import { FormContainer, FormControl } from '../../globalStyles';

const Signup = () =>{
  return(
    <Page title="Registrarme">
     <FormContainer>
      <form>
      <FormControl>
          <label>Nombre</label>
          <input type='Text'/>
        </FormControl>
        <FormControl>
          <label>Correo electrónico</label>
          <input type='email'/>
        </FormControl>
        <FormControl>
          <label>Dirección</label>
          <input type='Text'/>
        </FormControl>
        <FormControl>
          <label>Celular</label>
          <input type='Text'/>
        </FormControl>
        <FormControl>
          <label>Contraseña</label>
          <input type='password'/>
        </FormControl>
        <Button text="Registrarme"/>
      </form>
     </FormContainer>
    </Page>
  )
}
export default Signup;
