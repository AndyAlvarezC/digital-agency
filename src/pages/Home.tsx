import Button from "../components/Button";
import HighlightsCard from "../components/HighlightsCard";

export default function Home() {
  return (
    <>
      <section className="flex justify-center min-h-screen">
        <div className="flex flex-col text-center gap-8 md:gap-16 py-30 md:py-48">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Agency Flex Innovation
          </h1>
          <p className="text-lg md:text-2xl text-gray-300">
            Soluciones digitales que general resultados
          </p>
          <div className="pt-24 md:pt-32">
          <Button
            text={"Impulsa tu negocio ahora"}
            className="w-[80%] md:w-[25%] h-16 md:h-16 text-xl m-auto"
          />
          </div>
          <div className="md:pt-42">
            <HighlightsCard />
          </div>
        </div>
      </section>
    </>
  );
}
