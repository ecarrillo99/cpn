import React from 'react';
import { useNavigate } from 'react-router-dom';


function Navbar({menu}) {
  const navigation = useNavigate();
  const handleScrollToSection = () => {
    navigation("/")
    setTimeout(() => {
      const elementoSeccion = document.getElementById('conocemas');
      if (elementoSeccion) {
        elementoSeccion.scrollIntoView({ behavior: 'smooth' });
      }      
    }, 100);
    
  };
  return (
    <div className="bg-blackCPN-900 h-[140px]">
    <div className='mx-auto max-w-6xl sm:px-6 lg:px-8 flex text-white font-bold'>
        <div className='h-[140px] flex items-center justify-center w-1/4'>
            <img className='h-12 cursor-pointer' src="./img/LOGO_CPN.svg" alt="CPN" onClick={()=>{window.open("https://www.cpn.fin.ec/")}}/>
        </div>
        <div className='flex w-3/4 gap-4 justify-end items-end pb-5'>
            <a className={`border-2 border-blackCPN-900 ${menu == "inicio" ? "bg-orangeCPN-600" : "hover:border-white"} w-44 flex items-center justify-center rounded-full py-1.5 cursor-pointer`} href='/'>INICIO </a>
            <a className={`border-2 border-blackCPN-900 ${menu == "contactanos" ? "bg-orangeCPN-600" : "hover:border-white"} w-44 flex items-center justify-center rounded-full py-1.5 cursor-pointer`} href='/contactanos'>CONTÁCTANOS</a>
            <a className={`border-2 border-blackCPN-900 ${menu == "conocemas" ? "bg-orangeCPN-600" : "hover:border-white"} w-44 flex items-center justify-center rounded-full py-1.5 cursor-pointer`} onClick={handleScrollToSection}>CONOCE MÁS</a>
            <a className={`border-2 border-orangeCPN-600 bg-orangeCPN-600 hover:bg-blackCPN-900 hover:border-orangeCPN-600 w-44 flex items-center justify-center rounded-full py-1.5 cursor-pointer`}>SUSCRÍBETE AHORA</a>            
        </div>
    </div>
</div>

  );
}

export default Navbar;
