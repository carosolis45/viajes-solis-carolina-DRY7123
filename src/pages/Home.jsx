import { useState, useEffect } from 'react';
import { obtenerDestinos } from '../services/apiRestDestinos';
import DestinoCard from '../components/DestinoCard';

export default function Home() {
  const [destinos, setDestinos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  const cargarDatos = () => {
    setCargando(true);
    setError(false);
    obtenerDestinos()
      .then(data => setDestinos(data))
      .catch(() => setError(true))
      .finally(() => setCargando(false));
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  if (cargando) return <div className="text-center mt-20 text-xl text-[#4caf50]">Cargando destinos... ✈️</div>;
  
  if (error) return (
    <div className="text-center mt-20">
      <p className="text-red-500 text-xl mb-4">Ocurrió un error al cargar los destinos.</p>
      <button onClick={cargarDatos} className="bg-[#2e7d32] text-white px-6 py-2 rounded">Reintentar</button>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-5 pb-24">
      <header className="bg-gradient-to-br from-[#0d47a1] to-[#1976d2] text-white p-8 rounded-xl mb-8 text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-2">✈️ Agencia de Viajes</h1>
        <p className="text-[#90caf9] text-lg">Explora nuestros destinos soñados</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {destinos.map(destino => (
          <DestinoCard key={destino.id} destino={destino} />
        ))}
      </div>
    </div>
  );
}