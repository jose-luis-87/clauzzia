import React from 'react'
import {connect} from 'frontity'
import {Container, H1, HorizontalCenter, Carousel, Item} from './Carousel'

const Proyectos = ({state})=>{
    
    const proyectos = Object.values(state.source.proyectos)
    console.log(proyectos);
    return(
        <>
            <Container>
                <H1>Proyectos</H1>
                <HorizontalCenter>
                    <Carousel>
                        {proyectos.map((proyecto) => (
                            <Item
                            size={30}
                            style={{backgroundImage: `url(${proyecto.acf.imagen.url})`, borderRadius: '16px', opacity: 0.9}}
                            key={proyecto.id}
                            >
                            <p key={proyecto.id} dangerouslySetInnerHTML={{__html:proyecto.title.rendered}}></p>
                            </Item>
                        ))}
                    </Carousel>
                </HorizontalCenter>
            </Container>
        </>
    )
}
 export default connect(Proyectos)