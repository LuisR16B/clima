import { Tarjeta } from "../components/Tarjeta.jsx"

function TarjetaDatosClima( { error, data, loading, tema } ){
  return (
    <div>
      { loading ? (
        <div className={`p-8 rounded-xl shadow-md text-center ${tema === "light" ? "bg-white text-gray-800" : "bg-[hsl(230_20%_15%)] text-white"}`}>
          <p>Cargando...</p>
        </div>
        ) : error ? (
          <div className={`p-8 rounded-xl shadow-md ${tema === "light" ? "bg-white text-gray-800" : "bg-[hsl(230_20%_15%)] text-white"}`}>
            <h3 className="text-xl font-semibold text-center">Ciudad no encontrada</h3>
            <p className="text-center mt-2">Por favor, intentelo de nuevo.</p>
          </div>
        ) : (
          <div className={`flex flex-col items-center justify-center gap-2 px-5 py-3 rounded-xl shadow-md transition duration-200 ease-out hover:shadow-xl hover:scale-101 ${tema === "light" ? "bg-white" : "bg-[hsl(230_20%_15%)] text-white"}`}>
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-semibold text-2xl">{data?.name}</h3>
              <p className={`${tema === "light" ? "text-[hsl(220_8.9%_46.1%)]" : "text-[#A1A6B0]"}`}>{data?.weather[0].description}</p>
            </div>
            <div className="flex flex-row gap-4 items-center justify-center">
              { data && (<img src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`} alt="hola" />)}
              <div>
                <div className="text-5xl">
                  <span>{data?.main.temp}</span>
                  <span>°</span>
                </div>
                <p className={`${tema === "light" ? "text-[hsl(220_8.9%_46.1%)]" : "text-[#A1A6B0]"}`}>Se siente como {data?.main.feels_like}°</p>
              </div>
            </div>
            <div className={`flex justify-around border-t-1 pt-6 w-full ${tema === "light" ? "border-t-gray-200" : "border-t-gray-700"}`}>
              <Tarjeta tituloDatos="Se siente como" datos={`${data?.main.feels_like}°`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-5 w-5 ${tema === "light" ? "text-[hsl(220_8.9%_46.1%)]" : "text-[#A1A6B0]"}`} data-lov-id="src/components/WeatherCard.tsx:71:16" data-lov-name="Thermometer" data-component-path="src/components/WeatherCard.tsx" data-component-line="71" data-component-file="WeatherCard.tsx" data-component-name="Thermometer" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-muted-foreground%22%7D"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
              </Tarjeta>
              <Tarjeta tituloDatos="Humedad" datos={`${data?.main.humidity}%`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-5 w-5 ${tema === "light" ? "text-[hsl(220_8.9%_46.1%)]" : "text-[#A1A6B0]"}`} data-lov-id="src/components/WeatherCard.tsx:77:16" data-lov-name="Droplets" data-component-path="src/components/WeatherCard.tsx" data-component-line="77" data-component-file="WeatherCard.tsx" data-component-name="Droplets" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-muted-foreground%22%7D"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
              </Tarjeta>
              <Tarjeta tituloDatos={"Viento"} datos={`${data?.wind.speed} m/s`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-5 w-5 ${tema === "light" ? "text-[hsl(220_8.9%_46.1%)]" : "text-[#A1A6B0]"}`} data-lov-id="src/components/WeatherCard.tsx:83:16" data-lov-name="Wind" data-component-path="src/components/WeatherCard.tsx" data-component-line="83" data-component-file="WeatherCard.tsx" data-component-name="Wind" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-muted-foreground%22%7D"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
              </Tarjeta>
            </div>
          </div>
        )}
    </div>
  )
}

export { TarjetaDatosClima }