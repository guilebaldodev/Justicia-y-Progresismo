import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const MobileMenu = ({ isVisible, onClose }) => {

    if (!isVisible) return null;

  return (
    <div
    className="fixed inset-0 bg-customBlue text-white z-50 flex flex-col"
  >
    {/* Barra superior del menú móvil */}
    <div className="h-17 flex py-4 items-center justify-between w-[90%] mx-auto">
      <div className="flex items-center space-x-4">
        <Image
          src={"/icons/justice.png"}
          alt="justice icon"
          width={30}
          height={30}
        />
        <p className="font-bold text-lg">Erick Galeana</p>
      </div>

      <Image
        className="cursor-pointer"
        src={"/icons/burger-menu.png"} // Ícono de cierre
        width={32}
        height={32}
        alt="Cerrar menú"
        onClick={onClose}
      />
    </div>

    {/* Opciones del menú */}
    <div className="flex flex-col  justify-center gap-8 mt-8 text-lg">
      <div className="w-[60%] mx-auto flex gap-x-3 items-center">

      <Image src={"/icons/me.png"} alt="icono de persona" width={25} height={25}></Image>
      <Link href="#acerca" onClick={onClose}>
        Acerca de mí
      </Link>
      </div>
      <div className="w-[60%] mx-auto flex gap-x-3 items-center">
      <Image src={"/icons/testimonial.png"} alt="icono de testimonio" width={25} height={25}></Image>
      <Link href="#testimonios" onClick={onClose}>
        Testimonios
      </Link>
      </div>
      <div className="w-[60%] mx-auto flex gap-x-3 items-center">
      <Image src={"/icons/briefcase.png"} alt="icono de testimonio" width={25} height={25}></Image>
      <Link href="#areas" onClick={onClose}>
        Áreas de Experiencia
      </Link>
      </div>
      <div className="w-[60%] mx-auto">

      <Link
        className="bg-customBronw px-6 py-2 rounded-sm flex" 
        href="#consulta"
        onClick={onClose}
        >
        Consulta
      </Link>
      </div>
    </div>
  </div>
  );
};

export default MobileMenu;