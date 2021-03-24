import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

   
   const {data:images, loading} = useFetchGifs (category);

    /* LO MUEVO AL HOOK USEFETCHGIFTS */ 
    // useEffect(() => {
    //     getGifs(category)
    //    // .then( imgs => setImages(imgs));
    //    .then( setImages);//cuando el argumento de la funcion se manda como argumento a la otra func se puede dejar asi
       
    // }, [category]) //solo se ejectua si la categoria cambia

    
    

    return (
        <>
            <h4 className="animate__animated animate__fadeIn"> {category} </h4>
            {loading && <i className="animate__animated animate__flash">Loading</i> }
        <div className="card-grid">
            
               {
               images.map(img  => (
                  <GifGridItem 
                  key = {img.id}
                    {...img} 
                  />
               )) 
               } 
                    
        </div>
        </>
    )
}


