import React, {useEffect} from 'react'
import {connect} from 'frontity'

const Fotos = ({state})=>{
    
    const fotos = state.source.fotografia
    console.log(fotos);
    return(
        <>
            
            <h2>Fotografía</h2>
           {Object.values(fotos).map((foto) =>{
               return(
                   <p key={foto.id} dangerouslySetInnerHTML={{__html:foto.title.rendered}}></p>
               )
           })}
        </>
    )
}
 export default connect(Fotos)