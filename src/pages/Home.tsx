import Button from "../components/Button";
import HighlightsCard from "../components/HighlightsCard";

export default function Home() {
  return (
    <>
      <section
        className="flex justify-center min-h-screen">
        <div className="flex flex-col text-center gap-8 md:gap-8 py-30 md:py-40">
          <h1 className="text-4xl md:text-6xl font-extrabold pb-3" style={{ fontFamily: 'IBM Plex Serif, serif' }} >
            Agency Flex Innovation
          </h1>
          <p className="text-lg md:text-3xl text-gray-300 pb-2" style={{ fontFamily: 'IBM Plex Serif, serif' }}>
            Soluciones digitales que generan resultados
          </p>
          <div className="tracking-wide pt-24 md:pt-25">
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
