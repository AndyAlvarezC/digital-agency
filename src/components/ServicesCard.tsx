import { RiRobot2Line } from "react-icons/ri";

export default function ServicesCard() {
  return (
    <div
      className="w-full rounded-3xl shadow-2xl bg-gradient-to-r from-blue-500 to-blue-800
                p-6 md:p-8 transform transition-all duration-300 hover:shadow-3xl"
    >
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
        <div className="p-3 md:p-6 bg-white/20 rounded-full flex justify-center items-center flex-shrink-0">
          <RiRobot2Line className="w-10 h-10 md:w-16 md:h-16 text-white" />
        </div>
        <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-white text-center sm:text-left break-words">
          Automatización Inteligente
        </h2>
      </div>

      {/* Contenido */}
      <div className="mt-4 md:mt-6 text-center sm:text-left">
        <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed break-words">
          Implementamos chatbots personalizados y sistemas de reservas
          automáticas para tu negocio, optimizando tiempo y mejorando la
          experiencia del cliente.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-6 md:mt-8">
        <button
          className="w-full md:text-lg md:py-4 bg-white text-blue-600 font-semibold py-2 rounded-full shadow-lg
                    hover:bg-gray-100 transition-all duration-300 cursor-pointer"
        >
          Saber más
        </button>
      </div>
    </div>
  );
}
