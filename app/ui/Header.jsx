'use client'

import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileNav";
import { useEffect, useState } from "react";

const Header = () => {

    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };

  
    
    return ( 
    <>
        <header className="md:pb-8   w-full flex flex-col bg-customBlue">

        
        <MobileMenu isVisible={isMenuOpen} onClose={closeMenu} />

        <nav className="h-17 fixed bg-customBlue w-[100%] px-[5%]  text-white flex mx-auto items-center justify-between  py-4
        
        ">


                
            <div className="space-x-4 flex custom-lg:hidden">
                <Link href="#acerca">Acerca de mí</Link>
                <Link href="#testimonios">Testimonios</Link>
            </div>

            <div className="flex space-x-4 items-center">
                <Image src={"/icons/justice.png"} alt="justice icon" width={30} height={30}></Image>
                <p className="font-bold text-lg">Erick Galeana</p>
            </div>


            <div className="flex space-x-4 items-center sm:hidden">
                <Link href="#areas">Áreas de Experiencia</Link>
                <Link className="bg-customBronw px-4 py-1.5 rounded-sm" href="#consulta">Consulta</Link>
            </div>

            <Image onClick={toggleMenu} className="burger-menu cursor-pointer hidden sm:flex" src={"/icons/burger-menu.png"} width={32} height={32}></Image>


                
        </nav>

        <div className="flex  px-14 pt-2 h-full
         text-white w-[90%] mx-auto 
        custom-lg:w-[95%] custom-lg:px-8
        md:flex-col-reverse
        sm:pt-0 
        xs:!px-4
        pb-8
        mt-16

        ">
            
            <div className="w-[40%]  flex justify-center items-end
                md:w-[100%] mx-auto
                xs:w[100%]
            ">
                {/* <Image src={"/img/pavel.png"} style={{height:"80%",width:"auto"}} width={100} height={100}></Image> */}
                <Image src={"/img/me.png"} style={{objectFit:"cover",width:"auto",height:"100%",maxHeight:"480px"}} width={500} height={500}></Image>
                {/* <Image src={"/img/small.jpeg"} style={{objectFit:"cover",width:"auto",height:"100%"}} width={500} height={500}></Image> */}
            </div>

            <div className="w-[60%] flex pt-8 flex-col md:w-[100%] ">
                <h1 className="
                text-5xl p-4 leading-tight 
                custom-lg:text-4xl
                sm:!text-3xl
                xs:!text-2xl
                ">Servicios Jurídicos: Justicia y Progresismo</h1>
                <p className="p-4">
                Cuento con conocimientos en derecho familiar, civil, mercantil, laboral y amparos. Ubicado en Acapulco, mi compromiso es ofrecer asesoría legal personalizada, siempre enfocado en garantizar la justicia y el progreso en cada caso.                
                
                <br />
                <br />
                <strong>Cédula Profesional:</strong> 13582076.
                </p>
    
                <div className="flex p-4 mt-3 gap-4 xs:flex-col" >

                <Link href="#consulta" className="bg-customBronw font-bold  text-lg px-4 py-2 rounded-sm" >Contáctame</Link>
                
                <div className="flex items-center space-x-2">
                    <Image src={"/icons/phone.png"} alt="phone icon" width={30} height={10}></Image>
                    <p>7442937245</p>
                </div>

                </div>



            </div>

        </div>


        </header>
    </> );
}
 
export default Header;