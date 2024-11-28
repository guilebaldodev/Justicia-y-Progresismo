import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return ( 
    <>
        <header className="h-screen w-full flex flex-col bg-customBlue">

        <nav className="h-16 text-white flex w-[90%] mx-auto items-center justify-between  pt-4">
            <div className="flex space-x-4">
                <Link href="#inicio">Acerca de mí</Link>
                <Link href="#inicio">Testimonios</Link>
            </div>

            <div className="flex space-x-4 items-center">
                <Image src={"/icons/justice.png"} alt="justice icon" width={30} height={30}></Image>
                <p className="font-bold">Erick Galeana</p>
            </div>


            <div className="flex space-x-4 items-center">
                <Link href="#inicio">Areas de Experiencia</Link>
                <Link className="bg-customBronw px-4 py-1.5 rounded-sm" href="#inicio">Consulta</Link>
            </div>

        </nav>

        <div className="flex  gap-4  px-16 pt-16 h-full text-white w-[90%] mx-auto ">
            
            <div className="w-[40%]  flex justify-center items-end">
                {/* <Image src={"/img/pavel.png"} style={{height:"80%",width:"auto"}} width={100} height={100}></Image> */}
                <Image src={"/img/pavel5.png"} style={{objectFit:"cover",width:"auto",height:"100%"}} width={500} height={500}></Image>
            </div>

            <div className="w-[60%] h-full flex pt-8 flex-col ">
                <h1 className="text-5xl p-4 leading-tight">Servicios Jurídicos Justicia y Progresismo</h1>
                <p className="p-4">
                Cuento con amplia experiencia en derecho familiar, civil, mercantil, laboral y amparos. Mi compromiso es ofrecer asesoría legal personalizada, siempre enfocado en garantizar la justicia y el progreso en cada caso.
                </p>

                <div className="flex p-4 mt-3 gap-4" >

                <Link className="bg-customBronw font-bold  text-lg px-4 py-2 rounded-sm" href="#inicio">Contactame</Link>
                
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