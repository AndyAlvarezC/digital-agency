type ButtonProps = {
  text: string,
  className?: string,
}

export default function Button({ text, className } : ButtonProps) {
  return (
    <div className={`bg-blue-600 rounded-lg flex items-center justify-center text-center px-4 transform transition-all duration-300 ease cursor-pointer hover:bg-blue-700 hover:scale-105 ${className || ""}`}>
      <span className="font-bold">{ text }</span>
    </div>
  )
}
