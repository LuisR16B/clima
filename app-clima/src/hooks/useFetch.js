import { useState, useEffect } from "react"

/**
 * @description Custom hook para realizar fetch a una URL dada.
 * @param {string} url - La URL a la que se realizará la petición fetch.
 * @returns {Object} Un objeto que contiene los datos obtenidos, el estado de carga y cualquier error ocurrido.
 * @example const { data, loading, error } = useFetch('https://api.example.com/data');
 */

function useFetch(url){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setData(null);
    setError(false);
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error en la petición");
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);
  return { data, error, loading };
}

export { useFetch }