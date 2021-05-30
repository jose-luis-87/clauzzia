import Base from './styles/Base'
import React, {useEffect,useState} from 'react'
import { connect } from 'frontity'
import Header from './components/Header'
import Fotos from './components/Fotos'
import Videos from './components/Videos'
import Proyectos from './components/Proyectos'
import Loading from './components/Loading'
import Hero from './components/Hero'

const Root = ({state, actions}) => {

    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        actions.source.fetch("/fotos")
        actions.source.fetch("/videos")
        actions.source.fetch("/proyectos")
     },[])

     setTimeout(()=>{
         setLoading(false)
     },2000)

     if(loading){
         return(
             <Loading/>
         ) 
     }
     else{
        
         return (
      <>
        <Base/>
        <Header/>
        <Hero/>
        <Fotos/>
        <Videos/>
        <Proyectos/>
      </>
    );
     }
    
  };

  export default connect(Root)
  
