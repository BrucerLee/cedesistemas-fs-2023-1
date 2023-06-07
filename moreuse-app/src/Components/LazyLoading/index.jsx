//Creamos el componente para el lazy loading
import styled from 'styled-components'

const PageLoading = styled.section`
width: 100%;
height: 100%;
position: fixed;
display: flex;
justify-content: center;
align-items: center;
`;
/*
const CustomLoader = styled.div`
   width:50px;
  height:50px;
  border-radius:50%;
  border:8px solid;
  border-color: green;
  //border-color:#E4E4ED;
  border-right-color: white;
 //border-right-color: #766DF4;
  animation:s2 1s infinite linear;
  @keyframes s2 {to{transform: rotate(1turn)}}
`;
*/
//

const CustomLoader = styled.div`
--d:22px;
width: 4px;
  height: 4px;
  border-radius: 50%;
  color: #766DF4;
  box-shadow:
    calc(1*var(--d))      calc(0*var(--d))     0 0,
    calc(0.707*var(--d))  calc(0.707*var(--d)) 0 1px,
    calc(0*var(--d))      calc(1*var(--d))     0 2px,
    calc(-0.707*var(--d)) calc(0.707*var(--d)) 0 3px,
    calc(-1*var(--d))     calc(0*var(--d))     0 4px,
    calc(-0.707*var(--d)) calc(-0.707*var(--d))0 5px,
    calc(0*var(--d))      calc(-1*var(--d))    0 6px;
  animation: s7 1s infinite steps(8);
  @keyframes s7 {to{transform: rotate(1turn)}}
`;

///
export const LazyLoading = () => {
  return(
    <PageLoading>
       <CustomLoader/>
    </PageLoading>
  )
}




