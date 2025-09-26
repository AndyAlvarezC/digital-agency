type ButtonProps = { text: string; className?: string };

export default function Button({ text, className }: ButtonProps) {
  return (
    <div
      className={`bg-gradient-to-br from-[var(--blue1)] via-[var(--blue2)] to-[var(--blue3)] hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 rounded-lg flex items-center justify-center text-center px-4 py-2
                    transform transition duration-300 ease-in-out cursor-pointer hover:scale-110 shadow-md hover:shadow-[0_0_25px_rgba(0,173,255,0.8),0_0_50px_rgba(0,173,255,0.5)]  ${
                      className || ""
                    }`}
    >
      <span className="font-bold text-blue">{text}</span>
    </div>
  );
}
