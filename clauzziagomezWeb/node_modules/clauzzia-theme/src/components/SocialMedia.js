import React from 'react'
import {connect, styled} from 'frontity'
import imgFacebook from '../assets/btnFace.png'
import imgInstagram from '../assets/btnInsta.png'
import imgYT from '../assets/btnYout.png'
import imgSpotify from '../assets/btnSpotify.png'

const SocialMedia = ({state})=>{
    
    return(
        <ContainerSocial>
            <LinksSocial>
                <a href="https://www.facebook.com/clauzziagomez">
                    <ImgLink src={imgFacebook}/>
                </a>
                <a href="https://www.instagram.com/clauzziagomez/">
                    <ImgLink src={imgInstagram}/>
                </a>
                <a href="https://www.youtube.com/clauzziagomez">
                    <ImgLink src={imgYT}/>
                </a>
                <a href="https://open.spotify.com/show/0i9emlNV9AenSpWUN50Cxo?si=QsZ-jUEKTuGc3J3jbIYYbA">
                    <ImgLink src={imgSpotify}/>
                </a>
            </LinksSocial>
        </ContainerSocial>
    )
}
 export default connect(SocialMedia)

 const ContainerSocial = styled.div`
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
 `

 const LinksSocial = styled.div`
    width: 100%;
    height: 140px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: rgb(0,54,58);
    background: linear-gradient(0deg, rgba(0,54,58,1) 6%, rgba(0,54,58,0.8158613787311799) 30%, rgba(0,54,58,0) 62%);
    >a{
        display: flex;
        align-items: center;
        justify-content: center;
        height: auto;
    }
 `
 const ImgLink = styled.img`
    width: 100%;
    height: 100%;
    margin-left: 12px;
    margin-right: 12px;
 `