import useScrollTo from "../utils/useScrollTo";

type ButtonProps = {
  text: string;
  className?: string;
};

export default function Button({ text, className }: ButtonProps) {
  const scrollTo = useScrollTo();

  const handleClick = () => {
    scrollTo("Contacto");
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 rounded-lg flex items-center justify-center text-center px-4 py-2
                    transform transition duration-300 ease-in-out cursor-pointer hover:scale-105 shadow-md hover:shadow-[0_0_25px_rgba(0,173,255,0.8),0_0_50px_rgba(0,173,255,0.5)]  ${
                      className || ""
                    }`}
    >
      <span className="font-bold text-white">{text}</span>
    </div>
  );
}
