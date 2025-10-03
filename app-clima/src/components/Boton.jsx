/**
 * @description Componente de botón reutilizable.
 * @author Luis Rojas
 * @param { Object } props - Propiedades del componente.
 * @param { string } props.children - Contenido del botón.
 * @param { string } props.estilos - Clases tailwind CSS para estilos personalizados.
 * @param { string } props.textoSize - Tamaño del texto del botón.
 * @param { function } props.funcionOnClick - Función a ejecutar al hacer clic en el botón.
 * @returns { JSX.Element } Componente de botón.
 */

function Boton({ children = "Presioname", estilos = "bg-white px-4 py-2 rounded-xl border-1 border-gray-200", textoSize = "text-base", funcionOnClick }) {
  return (
    <button className={"cursor-pointer " + estilos + " " + textoSize} onClick={funcionOnClick}>{children}</button>
  )
}

export { Boton }