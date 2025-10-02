import Button from "../components/Button";
import FormField from "../components/FormField";

export default function Form() {
  return (
    <section
      id="Contacto"
      className="flex min-h-screen w-full justify-center items-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8 xl:py-16"
    >
      <div className="flex flex-col w-full max-w-6xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent pb-6 sm:pb-8 lg:pb-10">
          Estamos para ayudarte
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 xl:gap-12 w-full mt-2 sm:mt-4">
          {/* Columna izquierda: Formulario */}
          <div
            className="flex-1 w-full lg:w-1/2 min-h-fit p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl border border-white/10 flex flex-col justify-center
              bg-gradient-to-tr from-blue-900/80 via-slate-900/90 to-blue-800/80 shadow-xl
            "
          >
            <form
              id="Contacto"
              className="flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full"
            >
              {/* Campos principales */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                {[
                  {
                    label: "Nombre Completo",
                    name: "name",
                    type: "text",
                    placeholder: "Nombre Completo...",
                    required: true,
                  },
                  {
                    label: "Teléfono (Opcional)",
                    name: "number",
                    type: "number",
                    placeholder: "Teléfono...",
                  },
                ].map((field) => (
                  <div className="w-full sm:w-1/2" key={field.name}>
                    <FormField
                      type="label"
                      htmlFor={field.name}
                      value={field.label}
                    />
                    <FormField
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                    />
                  </div>
                ))}
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

              {/* Servicios de interés */}
              <div className="grid grid-cols-1 gap-4 sm:gap-5">
                <div>
                  <span className="text-gray-200 font-medium mb-1 block text-sm sm:text-base">
                    Servicios de interés
                  </span>
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-gray-200 text-sm sm:text-base">
                    {[
                      { label: "Servicio nº 1", value: "servicio1" },
                      { label: "Servicio nº 2", value: "servicio2" },
                      { label: "Servicio nº 3", value: "servicio3" },
                      { label: "Otros", value: "servicio4" },
                    ].map((service) => (
                      <label
                        key={service.value}
                        className="p-2.5 sm:p-3 flex items-center gap-2 bg-white/10 rounded-lg border border-white/20 backdrop-blur-md shadow-md cursor-pointer hover:bg-white/20 transition"
                      >
                        <input
                          type="checkbox"
                          name="services"
                          value={service.value}
                          className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 bg-transparent border-white/40 rounded focus:ring-0"
                        />
                        {service.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Mensaje */}
                <div>
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
                    className="pb-17"
                  />
                </div>
              </div>

              {/* Checkbox y botón */}
              <div className="flex items-center gap-2">
                <FormField
                  name="terms"
                  type="checkbox"
                  required
                  className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 bg-transparent border-white/40 rounded focus:ring-0 flex-shrink-0"
                />
                <label
                  htmlFor="terms"
                  className="text-gray-300 text-xs sm:text-sm"
                >
                  Acepto las{" "}
                  <a href="/politicas" className="text-blue-400 underline">
                    políticas de privacidad
                  </a>
                </label>
              </div>
              <Button text="Enviar" />
            </form>
          </div>

          {/* Columna derecha: Calendly */}
          <div
            className="flex-1 w-full lg:w-1/2 min-h-fit bg-gray-900/80 backdrop-blur-xl p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl border border-white/10 flex flex-col items-center justify-start
            bg-gradient-to-br from-blue-900/80 via-slate-900/90 to-blue-800/80 shadow-xl
          "
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent text-center">
              Agenda una Videollamada
            </h1>
            <div className="w-full flex-1 flex items-center justify-center min-h-[24rem] sm:min-h-[28rem] lg:min-h-[32rem]">
              <iframe
                src="https://calendly.com/agencyflexinnovations/new-meeting"
                title="Reserva tu cita"
                className="w-full h-full aspect-[4/5] sm:aspect-[3/4] rounded-lg sm:rounded-xl border-2 border-blue-300 shadow-lg bg-white"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
