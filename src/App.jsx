import React from 'react';
import NavBar from './components/navbar'
import Banner from "./components/banner";
import Beneficios from './components/beneficios';
import Pasarela from './components/pasarela';
import Footer from './components/footer';

const App=()=> {
  

  return (
    <>    
      
      <NavBar menu={"inicio"}></NavBar>
      <Banner ></Banner>
      <Beneficios ></Beneficios>
      <Footer></Footer>
      
    </>
  )
}

export default App


//<Pasarela></Pasarela>