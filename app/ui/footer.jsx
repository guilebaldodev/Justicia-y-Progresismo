import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return ( 
    <>
        <footer className="bg-customBlu text-white p-4">

        <div className="flex gap-x-4 flex-col items-center  mx-auto">
            
            <div className="flex items-center gap-x-2 pt-4 pb-2">
            <Image src="/icons/justice.png" alt="justice png" width={35} height={35}></Image>
            <h4 className="font-bold text-xl w-[100%] mx-auto">Justicia y Progresismo</h4>
            </div>

            <p className="w-[80%] mx-auto text-center text-sm custom-sm:w-[100%]">
            Comprometido en defender tus derechos y promover soluciones legales que impulsen el bienestar y la equidad
            </p>
        </div>

        <div className="w-[90%] custom-lg:w-[100%] md:flex-wrap md:!w-[80%] custom-sm:grid  mx-auto flex py-12 justify-around md:justify-normal ">

            <div className="md:w-[50%]   custom-sm:w-[80%] mx-auto xs:!w-[100%]">

                <h4 className="text-xl">Servicios</h4>
                <ul className="pt-6 flex flex-col gap-y-2 ">
                    <li >
                        Derecho Familiar 
                    </li>

                    <li>
                        Derecho Civil
                    </li>

                    <li>
                        Derecho Mercantil
                    </li>

                    <li>
                        Derecho Laboral
                    </li>

                </ul>

            </div>

            <div className="md:w-[50%] custom-sm:mt-8 custom-sm:w-[80%] mx-auto xs:!w-[100%]">

            <h4 className="text-xl">Menu</h4>
            <ul className="pt-6 flex flex-col gap-y-2">
                <li >
          
                </li>

                <li>
                    <Link href={""}>
                        Areas de experiencia
                    </Link>
                </li>

                <li>
                    <Link href={""}>
                        Testimonios
                    </Link>
                </li>

                <li>
                    <Link href={""}>
                        Acerca de mí
                    </Link>
                </li>

          

            </ul>

            </div>

 
            <div className="md:w-[50%] md:mt-8 custom-sm:w-[80%] mx-auto xs:!w-[100%]">

                <h4 className="text-xl">Contacto</h4>
                <ul className="pt-6 flex flex-col gap-y-3">
                    <li className="flex gap-x-3 items-center">
                        <Image src={"/icons/phone2.png"} alt="phonw icon" width={20} height={20}></Image>
                        <p>
                            (+52) 7442937245
                        </p>
                    </li>

                    <li className="flex gap-x-3 items-center">
                        <Image src={"/icons/email.png"} alt="phonw icon" width={20} height={20}></Image>
                        <p>
                            erickgaleana07@gmail.com
                        </p>
                    </li>

                    <li className="flex gap-x-3 items-center">
                        <Image src={"/icons/ubication.png"} alt="phonw icon" width={20} height={20}></Image>
                        <p>
                            Acapulco, Guerrero, México. 
                        </p>
                    </li>

                   

                </ul>

            </div>


        </div>


        </footer>
    
    </> );
}
 
export default Footer;