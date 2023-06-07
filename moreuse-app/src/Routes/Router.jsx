//importamos la dependencia, para crear la función que nos permite recibir los arreglos de los objetos
import React, {Suspense} from 'react';//importamos Suspense de react
import {createBrowserRouter} from 'react-router-dom';
import { LazyLoading } from '../Components/LazyLoading';// Se automimporto cuando llamo el componente

//Importamos el componente que vamos a utilizar a renderizar o cargar en la página
//import {Home} from '../Pages/Home';// 1.Con este podemos definir el element de la función que recibe los objetos
//import {WearDetail} from '../Pages/WearDetail';// 2.Este lo autoimporto , en caso de ser necesario se coloca el codigo de importación manual
//por defecto en el folder Home la aplicación encuentra el index de ese componente

//Definimos la función que recibe el arreglo de objetos, la palabra export es para que sea publico y se pueda utilizar
//Una buena practica es utilizar una carga perezoza para que las paginas esten como si fuera precargadas
//mejora el performace de la aplicacion sobre todo cuando es grande la APP,
const Home =React.lazy(() => import('../Pages/Home'));//Reemplazo la linea 5 1.
const WearDetail =React.lazy(() => import('../Pages/WearDetail'));//Reemplazo la linea 6 2.
const Login =React.lazy(() => import('../Pages/Login'));
const Signup =React.lazy(() => import('../Pages/Signup'));
const Profile =React.lazy(() => import('../Pages/Profile'));
const AddClothing =React.lazy(() => import('../Pages/AddClothing'));
const MyClothes =React.lazy(() => import('../Pages/MyClothes'));
/*
//Para ensayar el loauding podemos utilizar el siguiente codigo en este caso generamos un retardo de 1 segun para cargar la pagina de Login
const Login =React.lazy(() => import('../Pages/Login').then((module) => {
  return new Promise((resolve)=>{
    setTimeout(()=>{resolve (module);},3000)
  })
}));
*/
/*
//Sin el componente de Lazy-Louding se exporta asi
export const router = createBrowserRouter(
  [
    {
      path:"/",// Atributo que define la ruta base que el navegador busca
      //element:<Home />  //Componente inicial que deseamos que cargue la aplicación ,la primera ruta, este seria la isntruccion sin el lazy
      //Cuando utilizamos Suspense el element se retorna de la siguiente manera:
      element:(
        <>
        <Suspense fallback={<div>crgando...</div>} />
        <Home />
        <Suspense />
        </>
      )
    },
    {
      path:"/wear-detail",
      //elemen:<WearDetail/>
      element:(
        <>
        <Suspense fallback={<div>crgando...</div>} />
        <WearDetail />
        <Suspense />
        </>
      )
    },
    {
      path:"/login",
      //elemen:<WearDetail/>
      element:(
        <>
        <Suspense fallback={<div>crgando...</div>} />
        <Login />
        <Suspense />
        </>
      )
    },
    {
      path:"/Signup",
      //elemen:<Signup/>
      element:(
        <>
        <Suspense fallback={<div>crgando...</div>} />
        <Signup />
        <Suspense />
        </>
      )
    }
  ]
);
*/
//////////////////////////////////////////////////////////
//Con el componente de lazy-Louding se exporta asi
export const router = createBrowserRouter(
  [
    {
      path:"/",// Atributo que define la ruta base que el navegador busca
      //element:<Home />  //Componente inicial que deseamos que cargue la aplicación ,la primera ruta, este seria la isntruccion sin el lazy
      //Cuando utilizamos Suspense el element se retorna de la siguiente manera:
      element:(
        <>
        <Suspense fallback={<LazyLoading />} >
        <Home />
        </Suspense >
        </>
      )
    },
    /*
    //La ruta del "/wear-detail" sin el _id seria asi
    {
      path:"/wear-detail",
      //elemen:<WearDetail/>
      element:(
        <>
        <Suspense fallback={<LazyLoading />} >
        <WearDetail />
        </Suspense >
        </>
      )
    },
    */
        //La ruta del "/wear-detail" con el _id seria
        {
          path:"/wear-detail/:id",
          //elemen:<WearDetail/>
          element:(
            <>
            <Suspense fallback={<LazyLoading />} >
            <WearDetail />
            </Suspense >
            </>
          )
        },
    {
      path:"/login",
      //elemen:<WearDetail/>
      element:(
        <>
        <Suspense fallback={<LazyLoading />} >
        <Login />
        </Suspense>
        </>
      )
    },
    {
      path:"/Signup",
      //elemen:<Signup/>
      element:(
        <>
        <Suspense fallback={<LazyLoading />} >
        <Signup />
        </Suspense >
        </>
      )
    }
    ,
    {
      path:"/Profile",
      //elemen:<Signup/>
      element:(
        <>
        <Suspense fallback={<LazyLoading />} >
        <Profile />
        </Suspense >
        </>
      )
    }
    ,
    {
      path:"/add-clothing",
      //elemen:<Signup/>
      element:(
        <>
        <Suspense fallback={<LazyLoading />} >
        <AddClothing />
        </Suspense >
        </>
      )
    }
    ,
    {
      path:"/my-clothes",
      //elemen:<Signup/>
      element:(
        <>
        <Suspense fallback={<LazyLoading />} >
        <MyClothes />
        </Suspense >
        </>
      )
    }
  ]
);

//////////////////////////////////////////////////////////

