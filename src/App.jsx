import React from 'react';
import NavBar from './components/navbar'
import Banner from "./components/banner";
import Beneficios from './components/beneficios';

const App=()=> {
  

  return (
    <>    
      
      <NavBar></NavBar>
      <div className='z-0'><Banner ></Banner></div>
      <div className='z-50'> <Beneficios ></Beneficios></div>
    </>
  )
}

export default App
