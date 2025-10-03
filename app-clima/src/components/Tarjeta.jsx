import { Tema } from '../context/Tema'
import { useContext } from "react"


function Tarjeta({ children, tituloDatos, datos }) {
  const { tema } = useContext(Tema)
  return (
    <div className="flex flex-col items-center gap-1">
      {children}
      <p className={`text-sm ${tema === "light" ? "text-[hsl(220_8.9%_46.1%)]" : "text-[#A1A6B0]"}`}>{tituloDatos}</p>
      <p className="font-semibold">{datos}</p>
    </div>
  )
}

export { Tarjeta }