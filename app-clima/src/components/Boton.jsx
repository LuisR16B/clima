

function Boton({ children = "Presioname", estilos = "bg-white px-4 py-2 rounded-xl border-1 border-gray-200", textoSize = "text-base", funcionOnClick }) {
  return (
    <button className={"cursor-pointer " + estilos + " " + textoSize} onClick={funcionOnClick}>{children}</button>
  )
}

export { Boton }