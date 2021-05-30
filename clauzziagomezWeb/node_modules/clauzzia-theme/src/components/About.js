import React from 'react'
import {connect, styled} from 'frontity'
import imgBg from '../assets/bgAbout.jpg'


const About = ({state})=>{
    
    return(
        <ContainerAbout>
        </ContainerAbout>
    )
}
 export default connect(About)

 const ContainerAbout = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${imgBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    mix-blend-mode: exclusion;
    opacity: 0.4;
 `