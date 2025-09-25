import { useState } from "react";
import Button from "../components/Button";
import { HiX, HiMenu } from "react-icons/hi";
import logo from "../assets/logo/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full flex md:p-6 justify-center z-50 overflow-hidden">
        <nav
          className="relative w-full md:w-[80%] h-16 p-4 md:h-20 flex items-center justify-between 
                       /* Efecto Liquid Glass Mobile */
                      bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg
                       /* Efecto Liquid Glass Desktop */
                      md:bg-white/5 md:backdrop-blur-3xl md:rounded-2xl md:border md:border-white/10 
                      md:shadow-2xl md:shadow-black/10
                       /* Animaciones suaves */
                      transition-all duration-500 ease-out
                       /* Efecto de brillo sutil */
                      before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/5 before:via-transparent before:to-white/5 
                      before:rounded-2xl before:pointer-events-none before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700
                       /* Soporte para diferentes fondos */
                      supports-[backdrop-filter]:bg-white/5 supports-[backdrop-filter]:backdrop-blur-3xl
                      "
        >
          <div className="flex items-center md:hidden">
            <button
              className="text-2xl transition-all duration-300 md:hidden text-white/90 hover:text-white
                        hover:scale-110 active:scale-95"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <HiX className="transform rotate-90 transition-transform duration-300" />
              ) : (
                <HiMenu className="transform rotate-0 transition-transform duration-300" />
              )}
            </button>
          </div>

          <div>
            <a
              href="/"
              className="block transition-transform duration-300 hover:scale-105"
            >
              <img
                src={logo}
                alt="logo"
                className="h-10 md:h-14 w-auto cursor-pointer rounded-lg 
                          drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
              />
            </a>
          </div>

          {/* === Menú desktop === */}
          <div className="hidden md:flex md:text-xl gap-8 items-center">
            {["Inicio", "Servicios", "Sobre Nosotros", "Contacto"].map(
              (item, index) => (
                <p
                  key={item}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-white/80 hover:text-white transition-all duration-300
                          relative px-3 py-2 rounded-lg"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: "fadeInUp 0.6s ease-out forwards",
                  }}
                >
                  {item}
                </p>
              )
            )}
          </div>

          <div className="hidden md:flex">
            <div className="relative rounded-xl transition-all duration-300 ease">
              <Button text={"Agenda tu Cita"} className="p-3" />
            </div>
          </div>
        </nav>

        {/* === Menú desplegable móvil === */}
        <div
          className={`fixed top-16 left-0 w-full h-screen flex flex-col items-center 
              justify-start py-26 gap-8 text-2xl font-bold transform transition-all duration-500 ease-out z-40
              /* Efecto Liquid Glass para móvil */
              bg-black/20 backdrop-blur-3xl
              border-t border-white/10 shadow-2xl shadow-black/20
              supports-[backdrop-filter]:bg-black/10 supports-[backdrop-filter]:backdrop-blur-3xl
              ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
        >
          <div className="flex flex-col gap-8 text-center mb-8 w-full px-8">
            {["Inicio", "Servicios", "Sobre Nosotros", "Contacto"].map(
              (item, index) => (
                <p
                  key={item}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer hover:text-gray-300 transition-all duration-300 text-white/90
                          py-4 px-6 rounded-xl hover:bg-white/10 backdrop-blur-sm
                          transform hover:scale-105 active:scale-95
                          border border-transparent hover:border-white/20
                          relative overflow-hidden"
                  style={{
                    animationDelay: `${index * 100 + 200}ms`,
                    animation: isOpen
                      ? "slideInLeft 0.6s ease-out forwards"
                      : "none",
                  }}
                >
                  {item}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                              -translate-x-full hover:translate-x-full transition-transform duration-700 pointer-events-none"
                  ></div>
                </p>
              )
            )}

            <div
              className="mt-4 relative overflow-hidden rounded-xl"
              style={{
                animationDelay: "600ms",
                animation: isOpen
                  ? "slideInLeft 0.6s ease-out forwards"
                  : "none",
              }}
            >
              <Button text={"Agenda tu Cita"} className="h-16" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
