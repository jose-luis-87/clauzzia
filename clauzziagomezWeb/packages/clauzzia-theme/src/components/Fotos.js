import React from 'react'
import {connect, styled} from 'frontity'
import {Container, H1, HorizontalCenter, Carousel, Item} from './Carousel'

const Fotos = ({state})=>{
    
    const fotos = Object.values(state.source.fotografia)    
    const source = state.source.attachment

    return(
        <WrapperFotos>
            <Container>
                <H1>Fotografía</H1>
                <HorizontalCenter>
                    <Carousel>
                        {fotos.map((foto) => (
                            <Item
                            size={30}
                            style={{backgroundImage: `url(${source[foto.featured_media].source_url})`, borderRadius: '16px', opacity: 0.9}}
                            key={foto.id}
                            >
                            <p key={foto.id} dangerouslySetInnerHTML={{__html:foto.title.rendered}}></p>
                            </Item>
                        ))}
                    </Carousel>
                </HorizontalCenter>
            </Container>
        </WrapperFotos>
    )
}
 export default connect(Fotos)

 const WrapperFotos = styled.div`

    margin-top: 12%;
 `