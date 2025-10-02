import { RiRobot2Line } from "react-icons/ri";
import Button from "../components/Button";

export default function ServicesCard() {
  return (
    <div
      className="
        w-full 
        rounded-3xl 
        backdrop-blur-3xl 
        bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-900/60
        p-6 md:p-8 
        relative
        overflow-hidden
      "
    >
      {/* Glow suave en los bordes */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 shadow-[0_0_60px_-15px_rgba(59,130,246,0.2)]"></div>

      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 relative z-10">
        <div className="p-3 md:p-6 bg-slate-950/80 rounded-full flex justify-center items-center flex-shrink-0">
          <RiRobot2Line className="w-10 h-10 md:w-16 md:h-16 text-blue-300" />
        </div>
        <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-blue-300 text-center sm:text-left break-words">
          Automatización Inteligente
        </h2>
      </div>

      {/* Contenido */}
      <div className="mt-4 md:mt-6 px-10 text-center sm:text-left relative z-10">
        <p className="text-sm md:text-base lg:text-lg text-blue-100 leading-relaxed break-words">
          Automatizamos procesos y creamos flujos de clientes con agentes y
          chatbots de WhatsApp. Ahorra tiempo y costes de secretaría en tu
          negocio local. Nuestro sistema permite que tus clientes reserven,
          consulten información y reciban atención personalizada 24/7, sin
          intervención manual. Así, puedes dedicarte a lo importante mientras la
          tecnología trabaja para ti.
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center mt-6 md:mt-8 relative z-10">
        <Button
          text="Saber más"
          className="w-[60%] h-12 md:w-[45%] md:h-16 text-xl m-auto"
        />
      </div>
    </div>
  );
}
