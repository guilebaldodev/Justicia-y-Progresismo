'use client';

import Link from 'next/link';
import { useState } from 'react';

const Form = () => {


  const message = encodeURIComponent('¡Hola! Me gustaría recibir más información sobre tus servicios.');
  const whatsAppURL = `https://wa.me/${process.env.PHONE_NUMBER}?text=${message}`;

  
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio.';
    if (!formData.surname.trim()) newErrors.surname = 'Los apellidos son obligatorios.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Introduce un correo válido.';
    }
    if (!formData.phone.trim() || !/^\d+$/.test(formData.phone)) {
      newErrors.phone = 'Introduce un teléfono válido (solo números).';
    }
    if (!formData.message.trim()) newErrors.message = 'El mensaje es obligatorio.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Valida si no hay errores
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      alert('Correo enviado con éxito');
      setFormData({ name: '', surname: '', email: '', phone: '', message: '' }); // Reinicia el formulario
    } else {
      alert('Hubo un error al enviar el correo');
    }
  };

  return (
    <form className="pt-8" onSubmit={handleSubmit}>
      <div className="flex justify-between sm:justify-end sm:flex-col">
        <div className="flex flex-col w-[48%] sm:w-[100%] pb-4">
          <label htmlFor="name" className="font-bold">Nombre</label>
          <input
            id="name"
            name="name"
            className="customInput h-[36px]"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="flex flex-col w-[48%] sm:w-[100%] pb-4">
          <label htmlFor="surname" className="font-bold">Apellidos</label>
          <input
            id="surname"
            name="surname"
            className="customInput h-[36px]"
            type="text"
            value={formData.surname}
            onChange={handleChange}
          />
          {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}
        </div>
      </div>

      <div className="flex justify-between sm:flex-col ">
        <div className="flex flex-col w-[48%] sm:w-[100%] pb-4" >
          <label htmlFor="email" className="font-bold">Correo</label>
          <input
            id="email"
            name="email"
            className="customInput h-[36px]"
            type="text"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="flex flex-col w-[48%] sm:w-[100%] pb-4">
          <label htmlFor="phone" className="font-bold">Teléfono</label>
          <input
            id="phone"
            name="phone"
            className="customInput h-[36px]"
            type="text"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
      </div>

      <div className="flex flex-col w-[100%]">
        <label htmlFor="message" className="font-bold">Mensaje</label>
        <textarea
          id="message"
          name="message"
          className="customInput h-[80px]"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>

      <div className="w-[100%] pt-4 sm:pb-4">
        <Link         
        href={whatsAppURL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatea con nosotros en WhatsApp"
        className="text-customGreen underline underline-offset-2">O mándame un WhatsApp</Link>
      </div>

      <div className="flex justify-end">
        <button type="submit" className="bg-customBronw text-white text-base px-6 py-3 rounded-md max-w-max">Enviar</button>
      </div>
    </form>
  );
}

export default Form;
