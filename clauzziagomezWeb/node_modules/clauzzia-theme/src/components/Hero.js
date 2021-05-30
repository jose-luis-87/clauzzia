import React from 'react'
import {connect, styled} from 'frontity'
import imgHero from '../assets/Home-desktop.jpg'



const Hero = ({state})=>{
    
    return(
        <ContainerHero/>
    )
}
 export default connect(Hero)

 const ContainerHero = styled.div`
    background: url(${imgHero});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: relative;
 `