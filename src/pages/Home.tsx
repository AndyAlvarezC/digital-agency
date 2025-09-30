import Button from "../components/Button";
import HighlightsCard from "../components/HighlightsCard";

export default function Home() {
  return (
    <>
      <section
        id="Inicio"
        className="flex justify-center min-h-screen items-center pt-24 sm:pt-48 lg:pt-16"
      >
        <div className="flex flex-col text-center gap-8 md:gap-16">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Agency Flex Innovation
          </h1>
          <p className="text-lg md:text-2xl text-gray-300">
            Soluciones digitales que generan resultados
          </p>
          <div className="py-12">
            <Button
              text={"Impulsa tu negocio ahora"}
              className="w-[80%] md:w-[25%] h-16 text-xl m-auto"
            />
          </div>
          <div className="md:pt-16">
            <HighlightsCard />
          </div>
        </div>
      </section>
    </>
  );
}
