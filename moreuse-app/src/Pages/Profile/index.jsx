import{ Page} from '../../Components/Page';
import { Content } from '../../globalStyles';

const Profile =() =>{
  return(
    <Page title="Perfil">
      <Content>
        <h4>Nombre</h4>
        <p>Pepito</p>
        <h4>Correo Electrónico</h4>
        <p>Pepito@gmail.com </p>
        <h4>Dirección</h4>
        <p>Calle 77ito</p>
        <h4>Telefono</h4>
        <p>4549000</p>
      </Content>
    </Page>
  )
}
export default Profile;

