import React, {useEffect} from 'react'
import {connect, state, styled, css} from 'frontity'
import {Container, H1, HorizontalCenter, Carousel, Item, colors} from './Carousel'

 
  const numbersArray = Array.from(Array(10).keys()).map((number) => (
    <Item size={5} style={{color: 'black'}} key={number}>
      {number}
    </Item>
  ))
  
  
const Fotos = ({state})=>{
    
    const fotos = Object.values(state.source.fotografia)    
    let media = fotos[2].featured_media
    const source = state.source.attachment
    console.log(source[media].source_url)
    
    return(
        <>
            <Container>
                <H1>Fotografía</H1>
                <HorizontalCenter>
                    <Carousel>
                        {fotos.map((foto) => (
                            
                            <Item
                            size={20}
                            style={{background: 'transparent', borderRadius: '20px', opacity: 0.9}}
                            key={foto.id}
                            >
                            <p key={foto.id} dangerouslySetInnerHTML={{__html:foto.title.rendered}}></p>
                            </Item>
                        ))}
                    </Carousel>
                </HorizontalCenter>

            </Container>


           {/* {fotos.map((foto) =>{
               return(
                   <p key={foto.id} dangerouslySetInnerHTML={{__html:foto.title.rendered}}></p>
               )
           })} */}
        </>
    )
}
 export default connect(Fotos)