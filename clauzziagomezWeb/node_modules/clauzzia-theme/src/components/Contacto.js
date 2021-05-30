import React from 'react'
import {connect, styled} from 'frontity'
import imgBgContact from '../assets/bgContact.jpg'

const Contacto = ({state})=>{
    
    return(
        <ContainerContact>
        </ContainerContact>
    )
}
 export default connect(Contacto)

 const ContainerContact = styled.div`
 width: 100%;
 height: 100vh;
 background: url(${imgBgContact});
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 mix-blend-mode: exclusion;
 opacity: 0.4;
`