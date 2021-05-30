import { connect, styled, css } from 'frontity'
import Link from './Link'

const Header = () => {
    return(
        <NavBar>
            <NavLeft>
                <Link href="/">
                    <LogoTxt>Clauzzia Gómez</LogoTxt>
                    <Slogan>Fotografía y realización audiovisual</Slogan>
                </Link>
            </NavLeft>
            <NavRight>
                <div>
                    <p>Sobre mi</p>
                </div>
                <div>
                    <p>Portafolio</p>
                </div>
                <div>
                    <p>Contacto</p>
                </div>
            </NavRight>
        </NavBar>
    )
}

export default connect(Header)

const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
`

const NavLeft = styled.div`
    margin-left: 24px;
    width: 70%;
`

const NavRight = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 30%;
    margin-right: 24px;
    div{
        margin-left: 48px;
    }
`
const LogoTxt = styled.h1`
    font-size: 62px;
    font-weight: 300;
    margin-block-start: 0.15em;
    margin-block-end: 0em;
`

const Slogan = styled.p`
    font-size: 16px;
    margin-block-start: 0.15em;
    margin-block-end: 2em;
`