type ButtonProps = {
  text: string,
  className?: string,
}

export default function Button({ text, className } : ButtonProps) {
  return (
    <div className={`bg-blue-600 p-2 rounded-lg cursor-pointer transition-all duration-300 ease hover:bg-blue-700 ${className || ""}`}>
      <span>{ text }</span>
    </div>
  )
}
