import Image from "next/image";
import Header from "./ui/Header";
import { areasDePractica, testimonios } from "./consts";
import Link from "next/link";
import Form from "./ui/form";
import Footer from "./ui/footer";
import WhatsAppButton from "./ui/WhatsAppButton";

export default function Home() {
  return (
    <>
    <WhatsAppButton></WhatsAppButton>
      <Header></Header>
      <main>
        <div className="pt-12">
          <div className="text-center">
          <h4 className="text-gray-500 text-xl font-bold md:text-lg">Que hago</h4>
          <h2 className="text-2xl font-bold md:text-xl md:w-[90%] mx-auto xs:w-[80%]">
            Pasion por la Justica, Areas de Especializacion
          </h2>
          </div>

          <div className="p-6 pb-14 grid grid-cols-3 w-[90%]  mx-auto
            custom-lg:grid-cols-2 custom-lg:gap-6
            sm:!grid-cols-1 
          ">
              {areasDePractica && areasDePractica.map((area)=>

                <div className="p-6 border-2 border-gray-50 shadow">
                  <Image src={area.img} className="pb-1" alt="justice icon" width={60} height={60}></Image>

                   <h5 className="text-xl font-bold text-customBlu pb-3 xs:text-lg">{area.title}</h5> 

                    <p>{area.description}</p>

                </div>


              )}
          </div>



        </div>

        <div className="bg-customGrey">

        <div className="pt-10 pb-12 w-[75%] mx-auto gap-x-4 flex items-center
        custom-lg:w-[85%]
        md:flex-col-reverse
        ">

              <div className="w-[60%] flex flex-col md:w-[90%]">

              <h4 className="text-gray-500 text-lg font-bold md:pt-6 ">Acerca de mi</h4>

                <h2 className="text-3xl font-bold pb-4 custom-lg:text-2xl">Un Abogado Comprometido con tus Necesidades</h2>
                <p className="pb-8 text-lg custom-lg:text-base">
                Mi práctica se centra en brindar asesoría jurídica de alta calidad, siempre enfocándome en los intereses y derechos de mis clientes. Cada caso es único y merece una atención dedicada para encontrar las mejores estrategias legales.
                </p>

                <button className="bg-customBlu text-white text-lg px-8 py-3 rounded-md max-w-max" href="#inicio">Contactame</button>


              </div>

              <div className="w-[50%] flex justify-end md:w-[80%] md:justify-start">
                <Image src={"/img/me.jpeg"} style={{objectFit:"cover",width:"100%",height:"auto",maxWidth:"400px"}} width={400} height={600}></Image>


              </div>
              
              

        </div>

        </div>

        {/*  Testimonials*/}

          <div className="bg-customBlue p-8">

          <div className="text-center">
          <h4 className="text-white text-xl custom-lg:text-lg ">Opiniones</h4>
          <h2 className="text-3xl font-bold pt-2 text-white custom-lg:text-2xl sm:!text-xl">
            Lo que dicen los clientes de mi
          </h2>
          </div>


          <div className="w-[80%] mx-auto grid grid-cols-2 my-8 gap-4 custom-lg:w-[95%] sm:grid-cols-1">
              {
                testimonios && testimonios.map((testimonio,index)=>
                <>
                  <div key={index} className="bg-white rounded-md p-6">

                    <div className="flex items-center">
                      <div className="rounded-full p-4 mr-3 text-lg text-white w-[45px] h-[45px] bg-customBronw flex items-center justify-center">
                        <p>{(testimonio.nombre)[0]}</p>
                      </div>
                      <h4 className="font-bold">{testimonio.nombre}</h4>
                    </div>

                    <p className="pt-4">{testimonio.comentario}</p>

                  </div>
                </>)
              }
          </div>

            </div>

            {/* Testimonials */}
        

            {/* Contacto */}

            <div className="py-10 w-[80%] mx-auto custom-lg:w-[90%]">

              <h2 className="text-4xl font-bold text-center custom-lg:text-3xl sm:!text-2xl">Contactame</h2>

              <div className="flex gap-8 sm:flex-col">

              <div className="w-[50%] sm:w-[95%] xs:!w-[80%] mx-auto">
                <Image src={"/img/law.jpg"} style={{width:"100%",height:"auto",objectFit:"contain", maxHeight:"500px"}} width={400} height={400}></Image>
              </div>

              <div className="w-[50%] sm:w-[95%] mx-auto pt-10">
                <p>
                Si tienes alguna duda o necesitas asesoría legal, estoy aquí para ayudarte. No dudes en ponerte en contacto conmigo, estaré encantado de brindarte la orientación que necesitas
                </p>

              <Form></Form>

              </div>

              </div>
            </div>

      </main>  

        {/*Footer*/}

        <Footer></Footer>

    </>
  );
}
