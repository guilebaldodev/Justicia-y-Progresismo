const Form = () => {
    return ( <>
                   <form className="pt-8">

<div className="flex justify-between gap-4">
  <div className="flex flex-col w-[50%]">
  <label htmlFor=""className="font-bold">Nombre</label>
  <input className="customInput h-[36px]" type="text"  />
  </div>

  <div  className="flex flex-col w-[50%]">
  <label htmlFor="" className="font-bold">Apellidos</label>
  <input className="customInput h-[36px]" type="text"  />
  </div>
</div>


<div className="flex justify-between gap-4">
  <div className="flex flex-col w-[50%]">
  <label htmlFor=""className="font-bold">Correo</label>
  <input className="customInput h-[36px]" type="text"  />
  </div>

  <div  className="flex flex-col w-[50%]">
  <label htmlFor="" className="font-bold">Telefono</label>
  <input className="customInput h-[36px]" type="text"  />
  </div>
</div>

<div  className="flex flex-col w-[100%]">
  <label htmlFor="" className="font-bold">Mensaje</label>
  <textarea className="customInput h-[80px]" type="text"  />
</div>

<div className="flex justify-end">
<button className="bg-customBronw text-white text-base px-6 py-3 rounded-md max-w-max" href="#inicio">Enviar</button>
</div>


</form>
    
    </> );
}
 
export default Form;