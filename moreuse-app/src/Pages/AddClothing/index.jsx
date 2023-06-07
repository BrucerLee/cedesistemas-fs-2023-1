import { useForm} from 'react-hook-form'
import { Button } from "../../Components/Button"
import{ Page} from '../../Components/Page';
import { TARGETS,GENDERS } from '../../Constants';//Se auto importa al utilizar la lista de las constantes
import { FormContainer,FormControl } from '../../globalStyles';
const AddClothing=()=>{

    //Para implementar el hooh para formularios
    const {register,handleSubmit,formState:{errors}} =useForm();

    const onSubmitAddClothing=(data)=>{
      console.log('data',data);
    }
  return(
    <Page title ="Nueva Prenda">
      <FormContainer>
      <form onSubmit={handleSubmit(onSubmitAddClothing)} noValidate>

        <FormControl>
          <label>Imagen</label>
          <input type='url'{...register("image",{required:true})}/>
          { errors.image?.type=== 'required' && <span>Campo Requerido</span>}
        </FormControl>
        <FormControl>
          <label>Nombre de la Prenda</label>
          <input type='text'{...register("title",{required:true})}/>
          { errors.title?.type=== 'required' && <span>Campo Requerido</span>}
        </FormControl>
        <FormControl>
          <label>Público Objetivo</label>
          <select {...register("target")}>{
            TARGETS.map((item,key)=> <option key={key} value={item}>{item}</option>)
          }
          </select>
        </FormControl>
        <FormControl>
          <label>Género</label>
          <select {...register("genders")}>{
            GENDERS.map((item,key)=> <option key={key} value={item.id}>{item.title}</option>)
          }
          </select>
        </FormControl>
        <FormControl>
          <label>Descripción</label>
          <textarea {...register("description",{required:true})}></textarea>
          { errors.description?.type=== 'required' && <span>Campo Requerido</span>}
        </FormControl>
        <Button type="submit" text="Guardar"/>
        </form>
      </FormContainer>

    </Page>
  )
}
export default AddClothing;

