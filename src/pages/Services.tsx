import ChatBot from "../components/ChatBot";
import ServicesCard from "../components/ServicesCard";

export default function Services() {
  return (
    <section className="flex justify-center py-24 min-h-screen">
      <div className="w-full md:w-4/5 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
          Soluciones digitales hechas a tu medida
        </h1>

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
