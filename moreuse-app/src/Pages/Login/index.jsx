//creamos el componente de la pagina del login
//importamos los componenetes que son transversales y necesitaremos
import { Page } from '../../Components/Page';
import { Button} from'../../Components/Button';
import { FormContainer, FormControl } from '../../globalStyles';//Se auto importo al traer el estilo del forulario
import { Link } from 'react-router-dom';//Para hacer los hipervinculos con Link to
import { SignupContent } from './styles';//Se autoimporto cuando estilice el link
import {useForm} from 'react-hook-form';// Importamos el Hook useForm para formularios
//asi se exportaria la pagina si no fuera con lazy-louding
//export const Login = () => {
/*
//Como estamos utilizando el lazy-louding o carga perezoza se exporta por default
  const Login = () => {
  return (
    <Page>
     <h1>Login</h1>
     <section>
      <form>
        <div>
          <label>Correo electrónico</label>
          <input type='email'/>
        </div>
        <div>
          <label>Contraseña</label>
          <input type='password'/>
        </div>
        <Button text="Ingresar"/>
      </form>
     </section>

    </Page>

  )

}
export default Login;
*/
/*
//Con os estilos del formulario de esta manera quedaria el index de la pagina de login
const Login = () => {
  return (
    <Page >
     <h1>Login</h1>

     <FormContainer>
      <form>
        <FormControl>
          <label>Correo electrónico</label>
          <input type='email'/>
        </FormControl>
        <FormControl>
          <label>Contraseña</label>
          <input type='password'/>
        </FormControl>
        <Button text="Ingresar"/>
      </form>
     </FormContainer>
     <SignupContent>
      <p>
        ¿Aún no tienes una cuenta?

      </p>
      <Link to="/signup">Registrarme</Link>
     </SignupContent>
    </Page>

  )

}
export default Login;
*/
//Si queremos que la pagina tenga el atributo del titulo seleccionado cuando deseamos,
//Esa propiedad la colocamos en el componenete page
/*
const Login = () => {

  return (
    <Page title="Ingresar">
     <FormContainer>
      <form>
        <FormControl>
          <label>Correo electrónico</label>
          <input type='email'/>
        </FormControl>
        <FormControl>
          <label>Contraseña</label>
          <input type='password'/>
        </FormControl>
        <Button text="Ingresar"/>
      </form>
     </FormContainer>
     <SignupContent>
      <p>
        ¿Aún no tienes una cuenta?
      </p>
      <Link to="/signup">Registrarme</Link>
     </SignupContent>
    </Page>
  )
}
export default Login;
*/
///////////////
//Con el hook de validacion del form
const Login = () => {
  //Para implementar el hooh para formularios
  const {register,handleSubmit,formState:{errors}} =useForm();
  //Creamos la funcion que escucha el submit del formulario , la que nos dira que hacemos con esos datos, vamos al servidor etc
  const onSubmitLogin=(data)=>{
    console.log('data',data);
  }
  return (
    <Page title="Ingresar">
     <FormContainer>
      <form onSubmit={handleSubmit(onSubmitLogin)}>
        <FormControl>
          <label>Correo electrónico</label>
          <input type='text'{...register("emailAddress",{required:true,pattern:/^[A-Za-z]+[A-Za-z0-9_\.]*@[A-Za-z0-9]+\.[A-Za-z0-9]+/i})}/>
          { errors.emailAddress?.type=== 'required' && <span>Campo Requerido</span>}
          { errors.emailAddress?.type=== 'pattern' && <span>Debes escribir un correo válido</span>}
        </FormControl>
        <FormControl>
          <label>Contraseña</label>
          <input type='password'{...register("password",{required:true,minLength:8})}/>
          {errors.password?.type === 'required' && <span>Campo Requerido</span>}
          {errors.password?.type === 'minLength' && <span>Mínimo 8 caracteres</span>}
        </FormControl>
        <Button type="submit" text="Ingresar"/>
      </form>
     </FormContainer>
     <SignupContent>
      <p>
        ¿Aún no tienes una cuenta?
      </p>
      <Link to="/signup">Registrarme</Link>
     </SignupContent>
    </Page>
  )
}
export default Login;

