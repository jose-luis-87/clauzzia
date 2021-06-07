import {Global, css} from 'frontity'

const Base = () => {
    const primaryGreen = '#00363A'
    const ligthText = '#F5FEFF'
    const secondary = '#EF5350'
    const darkGreen = '#000505'
    const lightGreen = '#00646B'
    const success = '#00F2B8'
    const error = '#EA1601'
    const warning = '#EF9F2F'
    return(
        <Global
            styles ={css(`
                @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');

                html{
                    font-family: 'Raleway', sans-serif;
                    color: ${ligthText};
                }

                body{
                    margin: 0;
                    background-color: transparent;
                }

                h1{
                    font-family: 'Amatic SC', cursive;
                }
                
                a{
                    text-decoration: none;
                    color: ${ligthText};
                }
                ::-webkit-scrollbar {
                    display: none;
                }
            `)
            }
        />
    )
}

export default Base