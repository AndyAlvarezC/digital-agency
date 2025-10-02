import ChatBot from "../components/ChatBot";
import ServicesCard from "../components/ServicesCard";

export default function Services() {
  return (
    <section id="Servicios" className="relative">
      {/* Glow lateral izquierdo */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-blue-500/20 via-blue-500/5 to-transparent blur-3xl" />

      {/* Glow lateral derecho */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-blue-500/20 via-blue-500/5 to-transparent blur-3xl" />

      <div className="w-full px-6 py-6 md:px-40 md:py-15 z-10">
        <h2
          className="text-4xl md:text-6xl font-extrabold text-center mb-16"
          style={{ fontFamily: "IBM Plex Serif, serif" }}
        >
          Soluciones digitales hechas a tu medida
        </h2>
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          {/* Columna 1 */}
          <div className="w-full md:w-1/2 flex justify-center">
            <ServicesCard />
          </div>

          {/* Columna 2 */}
          <div className="w-full md:w-1/2 flex justify-center">
            <ChatBot />
          </div>
        </div>
      </div>
    </section>
  );
}
