import React from 'react'
import {connect, styled} from 'frontity'
import imgBgContact from '../assets/Contact-Desktop.jpg'
import iconMail from '../assets/fluent_mail-20-filled.svg'
import iconPhone from '../assets/mdi_cellphone-text.svg'
import btnWa from '../assets/btn-wa.svg'

const Contacto = ({state})=>{
    
    return(
        <ContainerContact>
            <ContainerData>
                <Dato>
                    <img src={iconMail}/>
                    <h3>clauzziagomez@gmail.com</h3>
                </Dato>
                <Dato>
                    <img src={iconPhone}/>
                    <h3>55 2264 2831</h3>
                </Dato>
                <BtnWhatsApp src={btnWa}/>
            </ContainerData>
        </ContainerContact>
    )
}
 export default connect(Contacto)

 const ContainerContact = styled.div`
 width: 100%;
 height: 100vh;
 background: url(${imgBgContact});
 background-position: top;
 background-repeat: no-repeat;
 background-size: cover;
 display: flex;
    align-items: center;
    justify-content: center;
`
const ContainerData = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Dato = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    >img{
        width:4%;
    }
    >h3{
        width: 50%;
        margin-left: 40px;
    }
`
const BtnWhatsApp = styled.img`
    width: 40%;
    margin-top: 28px;
`