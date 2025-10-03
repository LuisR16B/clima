import { useContext, useState, useRef} from "react"
import { Tema } from '../context/Tema'
import { useFetch } from '../hooks/useFetch.js'
import { Boton } from "../components/Boton.jsx"
import { TarjetaDatosClima } from "../components/TarjetaDatosClima.jsx"

const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

/**
 * @description Página principal de la aplicación de clima.
 * Muestra el clima actual de una ciudad y permite buscar por nombre o usar la geolocalización.
 * @author Luis Rojas
 * @returns { JSX.Element } Componente de la página de clima.
 */

function Clima(){
  const { tema, cambiarTema } = useContext(Tema)
  const [ciudad, setCiudad] = useState("Tariba");
  let url = null;

  if (ciudad) {
    if (ciudad.includes(',')) {
      const [lat, lon] = ciudad.split(',');
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es&units=metric&lang=es`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es&units=metric&lang=es`;
    }
  }
  const { data, error, loading } = useFetch(url);
  const input = useRef(null);

  const obtenerLocalizacion = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCiudad(`${position.coords.latitude},${position.coords.longitude}`);
        }
      );
    } else {
      console.log("La geolocalización no es compatible con este navegador.");
    }
  };

  return(
    <div className= {`min-h-[100vh] flex flex-col items-center justify-center gap-4 relative transition duration-500 ease-out ${tema === "light" ? "bg-[linear-gradient(135deg,hsl(199_89%_85%),hsl(199_89%_48%))]" : "bg-[linear-gradient(135deg,hsl(230_35%_7%),hsl(199_89%_25%))]"}`}>
      <Boton estilos= {`p-3 rounded-xl absolute top-5 right-5 ${tema === "light" ? "bg-white" : "bg-[hsl(230_20%_15%)] text-white"}`} funcionOnClick={cambiarTema}>
        {tema === "light" ?
          (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon h-5 w-5 text-foreground" data-lov-id="src/components/ThemeToggle.tsx:32:8" data-lov-name="Moon" data-component-path="src/components/ThemeToggle.tsx" data-component-line="32" data-component-file="ThemeToggle.tsx" data-component-name="Moon" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-foreground%22%7D"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>) :
          (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun h-5 w-5 text-foreground" data-lov-id="src/components/ThemeToggle.tsx:34:8" data-lov-name="Sun" data-component-path="src/components/ThemeToggle.tsx" data-component-line="34" data-component-file="ThemeToggle.tsx" data-component-name="Sun" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-foreground%22%7D"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>)}
      </Boton>
      <div className={`flex flex-col items-center ${tema === "light" ? "text-black" : "text-[#F5F7F9]"}`}>
        <h2 className="font-bold text-4xl">El Tiempo Ahora</h2>
        <p className={`text-ms  ${tema === "light" ? "text-[hsl(220_8.9%_46.1%)]" : "text-[#A1A6B0]"}`}>Hermoso clima, bellamente exhibido</p>
      </div>
      <div className={`w-[90vw] max-w-[600px] flex flex-col gap-4`}>
        <div className={`w-full flex justify-center gap-2 px-4 py-3 rounded-xl shadow-md transition duration-200 ease-out hover:shadow-xl hover:scale-101 ${tema === "light" ? "bg-white" : "bg-[hsl(230_20%_15%)]"}`}>
          <input ref={input} type="text" placeholder="Busca una ciudad..." className={`w-full border-1 p-2 rounded-lg placeholder-gray-400 ${tema === "light" ? "text-black border-gray-200" : "text-white border-gray-900 bg-gray-900"}`} onKeyDown={(e) => { if (e.key === "Enter") { setCiudad(input.current.value.toLowerCase()) } }} />
          <Boton children="Buscar" estilos="bg-[hsl(199_89%_48%)] text-white py-0 px-3 rounded-lg" funcionOnClick={() => {setCiudad(input.current.value.toLowerCase())}}/>
        </div>
        <TarjetaDatosClima error={error} data={data} tema={tema} loading={loading} />
        <div className="flex items-center justify-center">
          <Boton estilos={`p-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition duration-200 ease-out hover:shadow-xl hover:scale-102 cursor-pointer ${tema === "light" ? "bg-white text-black" : "bg-[hsl(230_20%_15%)] text-white"}`} funcionOnClick={obtenerLocalizacion}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2" data-lov-id="src/components/WeatherApp.tsx:122:14" data-lov-name="MapPin" data-component-path="src/components/WeatherApp.tsx" data-component-line="122" data-component-file="WeatherApp.tsx" data-component-name="MapPin" data-component-content="%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>Mi Localizacion</span>
          </Boton>
        </div>
      </div>
    </div>
  );
}

export { Clima }