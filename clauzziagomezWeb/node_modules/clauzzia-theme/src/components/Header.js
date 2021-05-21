import { connect } from 'frontity'
import Link from './Link'

const Header = () => {
    return(
        <>
            <div>
                <Link href="/">
                    <h1>Clauzzia Gómez</h1>
                    <p>Fotografía y realización audiovisual</p>
                </Link>
            </div>
            <div>
                <div>
                    <p>Sobre mi</p>
                </div>
                <div>
                    <p>Portafolio</p>
                </div>
                <div>
                    <p>Contacto</p>
                </div>
              
            </div>
            
        </>
    )
}

export default connect(Header)