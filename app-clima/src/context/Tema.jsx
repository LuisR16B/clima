import { createContext, useState } from 'react';

const Tema = createContext('light');

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