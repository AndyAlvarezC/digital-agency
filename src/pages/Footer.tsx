import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-gray-950/95 backdrop-blur-xl mt-14 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          {/* Columna 1 - Marca */}
          <div>
            <h2
              className="text-2xl font-bold text-blue-300"
              style={{ fontFamily: "IBM Plex Serif, serif" }}
            >
              Agency Flex Innovations
            </h2>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Soluciones digitales hechas a tu medida. Innovación, tecnología y
              resultados.
            </p>
          </div>

          {/* Columna 2 - Navegación */}
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-3">
              Navegación
            </h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#Inicio" className="hover:text-blue-300 transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#Servicios" className="hover:text-blue-300 transition">
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#Sobre Nosotros"
                  className="hover:text-blue-300 transition"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#Contacto" className="hover:text-blue-300 transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Legal */}
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-3">Legal</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="/aviso-legal"
                  className="hover:text-blue-300 transition"
                >
                  Aviso Legal
                </a>
              </li>
              <li>
                <a
                  href="/politica-privacidad"
                  className="hover:text-blue-300 transition"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="/politica-cookies"
                  className="hover:text-blue-300 transition"
                >
                  Política de Cookies
                </a>
              </li>
              <li>
                <a
                  href="/terminos-condiciones"
                  className="hover:text-blue-300 transition"
                >
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4 - Redes sociales */}
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-3">
              Conecta
            </h3>
            <div className="flex justify-center md:justify-start gap-5">
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="mailto:agencyflexinnovations@gmail.com"
                    className="hover:text-blue-300 transition text-2xl"
                  >
                    <FiMail />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
