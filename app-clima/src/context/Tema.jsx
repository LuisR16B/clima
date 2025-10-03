import { createContext, useState } from 'react';

const Tema = createContext('light');

/**
 * @description Contexto para manejar el tema (light o dark) de la aplicación.
 * Proveedor de temas que envuelve la aplicación y proporciona el estado del tema y una función para cambiarlo.
 * @author Luis Rojas
 * @param { Object } props - Propiedades del componente.
 * @param { ReactNode } props.children - Componentes hijos que consumirán el contexto.
 * @returns { JSX.Element } Componente proveedor de temas.
*/

function ProvedorTemas({ children }) {
  const [tema, setTema] = useState(() => {
    const obtenerTema = window.matchMedia('(prefers-color-scheme: light)').matches
    return obtenerTema ? 'light' : 'dark';
  });
  const cambiarTema = () => {
    setTema((tema) => (tema === 'light' ? 'dark' : 'light'));
  }
  return (
    <Tema.Provider value={{ tema, cambiarTema }}>
      {children}
    </Tema.Provider>
  );
}

export { Tema, ProvedorTemas };