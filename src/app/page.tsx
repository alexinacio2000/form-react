import Image from "next/image";
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />



export default function Home() {
  return (
    
    <div className="w-screen h-screen bg-blue-bg flex items-center justify-center">
      <div className="w-580 pr-8">
        <h1 className="text-title size text-5xl font-bold">GYN </h1>
        <h1 className="text-title size text-3xl">Treine na melhor academia da região.</h1>
        </div>
          <div className="bg-white p-4 w-380 rounded-md flex justify-center items-center flex-col shadow-lg">
        
            <input className="border-gray-300 rounded-sm border w-full h-14 mb-2.5 pl-2" placeholder="Nome" type="text" name="nome" id="nome" />
            <input className="border-gray-300 rounded-sm border w-full h-14 mb-2.5 pl-2" type="email" name="email" placeholder="E-mail" id="email  onChange={(e) => setEmail(e.target.value)}"/> 
            
            <button type="submit" className="bg-btn text-gray-50 w-full h-12">Enviar</button>
            
          </div>
    </div>

    
  );
}
