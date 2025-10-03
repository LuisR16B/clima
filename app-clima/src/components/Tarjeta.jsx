/**
 * @description Componente de tarjeta para mostrar datos con un título y un ícono.
 * @author Luis Rojas
 * @param { Object } props - Propiedades del componente.
 * @param { string } props.children - Contenido de la tarjeta.
 * @param { string } props.tituloDatos - Título de los datos a mostrar.
 * @param { string } props.datos - Datos a mostrar en la tarjeta.
 * @returns { JSX.Element } Componente de tarjeta.
 */

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