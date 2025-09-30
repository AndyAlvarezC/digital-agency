import Button from "../components/Button";
import FormField from "../components/FormField";

export default function Form() {
  return (
    <section id="Contacto" className="flex min-h-screen justify-center items-center p-4">
      <div className="flex flex-col justify-center items-center gap-16 w-full max-w-3xl">
        <h1 className="text-5xl font-bold text-center">
          Estamos para ayudarte
        </h1>

        <form className="flex flex-col gap-6 w-full bg-gray-900/70 backdrop-blur-xl p-8 rounded-xl shadow-2xl border border-white/10">
          {/* Fila con Nombre y Teléfono */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Nombre */}
            <div className="w-full md:w-1/2">
              <FormField
                type="label"
                htmlFor="name"
                value="Nombre Completo"
              />
              <FormField
                name="name"
                type="text"
                placeholder="Nombre Completo..."
                required
              />
            </div>

            {/* Teléfono */}
            <div className="w-full md:w-1/2">
              <FormField
                type="label"
                htmlFor="phone"
                value="Teléfono (Opcional)"
              />
              <FormField
                name="number"
                type="number"
                placeholder="Teléfono..."
              />
            </div>
          </div>

          {/* Email */}
          <FormField
            type="label"
            htmlFor="email"
            value="Correo Electrónico"
          />
          <FormField
            name="email"
            type="email"
            placeholder="Correo electrónico..."
            required
          />

          {/* Servicios de interés (Checkboxes) */}
          <span className="text-gray-200 font-medium mb-1">
            Servicios de interés
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-200">
            <label className="flex items-center gap-2 bg-white/10 p-2 rounded-lg border border-white/20 backdrop-blur-md shadow-md cursor-pointer hover:bg-white/20 transition">
              <input
                type="checkbox"
                name="services"
                value="servicio1"
                className="w-5 h-5 text-blue-400 bg-transparent border-white/40 rounded focus:ring-0"
              />
              Servicio número 1
            </label>
            <label className="flex items-center gap-2 bg-white/10 p-2 rounded-lg border border-white/20 backdrop-blur-md shadow-md cursor-pointer hover:bg-white/20 transition">
              <input
                type="checkbox"
                name="services"
                value="servicio2"
                className="w-5 h-5 text-blue-400 bg-transparent border-white/40 rounded focus:ring-0"
              />
              Servicio número 2
            </label>
            <label className="flex items-center gap-2 bg-white/10 p-2 rounded-lg border border-white/20 backdrop-blur-md shadow-md cursor-pointer hover:bg-white/20 transition">
              <input
                type="checkbox"
                name="services"
                value="servicio3"
                className="w-5 h-5 text-blue-400 bg-transparent border-white/40 rounded focus:ring-0"
              />
              Servicio número 3
            </label>
            <label className="flex items-center gap-2 bg-white/10 p-2 rounded-lg border border-white/20 backdrop-blur-md shadow-md cursor-pointer hover:bg-white/20 transition">
              <input
                type="checkbox"
                name="services"
                value="servicio4"
                className="w-5 h-5 text-blue-400 bg-transparent border-white/40 rounded focus:ring-0"
              />
              Servicio número 4
            </label>
          </div>

          {/* Mensaje */}
          <FormField
            type="label"
            htmlFor="message"
            value="Mensaje"
            className="text-gray-200 font-medium mb-1"
          />
          <FormField
            name="message"
            type="textarea"
            placeholder="Escribe tu consulta aquí..."
            required
          />

          {/* Checkbox de políticas */}
          <div className="flex items-center gap-2">
            <FormField
              name="terms"
              type="checkbox"
              required
              className="w-5 h-5 text-blue-400 bg-transparent border-white/40 rounded focus:ring-0"
            />
            <label htmlFor="terms" className="text-gray-300 text-sm">
              Acepto las{" "}
              <a href="/politicas" className="text-blue-400 underline">
                políticas de privacidad
              </a>
            </label>
          </div>

          {/* Botón */}
          <Button
            text="Enviar"
            className=" transition-all duration-300 ease bg-blue-500/80 hover:bg-blue-600/90 backdrop-blur-md text-white py-3 rounded-lg font-semibold mt-4 shadow-lg"
          />
        </form>
      </div>
    </section>
  );
}
