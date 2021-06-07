import React from 'react'
import {connect, styled} from 'frontity'
import imgBg from '../assets/About-desktop.jpg'
import {Container, HorizontalCenter, Carousel} from './Carousel'

const About = ({state})=>{
    const testimonios = Object.values(state.source.testimoniales)    
    
    console.log(testimonios);
   
    return(
        <ContainerAbout>
            <Expert>
                <h3>Realizadora audiovisual, fotográfa profesiona y activista social con perspectiva de género. Editora con mas de 10 años de experiencia en post-producción fotografía comercial y social.</h3>
            </Expert>
            <Testimoniales>
            <Container>
                <H1>Testimoniales</H1>
                <HorizontalCenter>
                    <Carousel>
                        {testimonios.map((opinion) => (
                            <Item
                            size={33}
                            style={{backgroundImage: '', borderRadius: '16px', opacity: 0.9}}
                            key={opinion.id}
                            >
                                <h3  dangerouslySetInnerHTML={{__html:opinion.title.rendered}}></h3>
                                <p  dangerouslySetInnerHTML={{__html:opinion.content.rendered}}></p>
                            </Item>
                        ))}
                    </Carousel>
                </HorizontalCenter>
            </Container>
            </Testimoniales>
        </ContainerAbout>
    )
}
 export default connect(About)

 const ContainerAbout = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${imgBg});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    //mix-blend-mode: exclusion;
    opacity: 1;
    position: relative;
 `
const Expert = styled.div`
    position: absolute;
    width: 30%;
    top: 25%;
    right: 5%;
    >h3{
        text-align: left;
    }
`

 const Testimoniales = styled.div`
    position: absolute;
    width: 100%;
    height: auto;
    bottom: 6%;
 `
 const H1 = styled.h2`
 text-align: center;
 margin: 0 auto;
 padding-bottom: 1rem;
`
 const Item = styled.div`
    color: white;
    font-size: 1rem;
    text-transform: capitalize;
    width: ${({size}) => `${size}rem`};
    height: ${({size}) => `${size/2}rem`};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;    
    >h3{
        width: 50%;
    }
    >p{
        width: 70%;
    }
`