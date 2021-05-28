import React from 'react'
import {connect} from 'frontity'
import {Container, H1, HorizontalCenter, Carousel, Item} from './Carousel'

const Videos = ({state})=>{
    
    const videos = Object.values(state.source.video)
   
    return(
        <>
            <Container>
                <H1>Videos</H1>
                <HorizontalCenter>
                    <Carousel>
                        {videos.map((video) => (
                            <Item
                            size={30}
                            style={{backgroundImage: `url(${video.acf.imgagen.url})`, borderRadius: '16px', opacity: 0.9}}
                            key={video.id}
                            >
                            <p key={video.id} dangerouslySetInnerHTML={{__html:video.title.rendered}}></p>
                            </Item>
                        ))}
                    </Carousel>
                </HorizontalCenter>
            </Container>
        </>
    )
}
 export default connect(Videos)