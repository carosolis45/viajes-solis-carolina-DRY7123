import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { consultarViajesGraphQL } from '../services/apiGraphQLViajes';
import { obtenerDestinos } from '../services/apiRestDestinos';

export default function DestinoDetalle() {
  const { id } = useParams();
  const [datos, setDatos] = useState({ vuelos: [], hoteles: [] });
  const [destino, setDestino] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let ignorar = false;
    setCargando(true);
    setError(false);

    const cargar = async () => {
      try {
        const [listaDestinos, viajes] = await Promise.all([
          obtenerDestinos(),
          consultarViajesGraphQL(id)
        ]);
        if (!ignorar) {
          setDestino(listaDestinos.find(d => d.id === id));
          setDatos(viajes);
        }
      } catch (err) {
        if (!ignorar) setError(true);
      } finally {
        if (!ignorar) setCargando(false);
      }
    };

    cargar();
    return () => { ignorar = true; };
  }, [id]);

  if (cargando) return <div className="text-center mt-20 text-xl text-[#4caf50]">Consultando vuelos y hoteles... ✈️</div>;
  
  if (error) return (
    <div className="text-center mt-20">
      <p className="text-red-500 text-xl mb-4">Error al consultar los viajes.</p>
      <Link to="/" className="bg-[#2e7d32] text-white px-6 py-2 rounded">Volver al inicio</Link>
    </div>
  );

  if (!destino) return <div className="text-center mt-20 text-red-500">Destino no encontrado</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-[#1e1e1e] border border-[#333] rounded-xl shadow-lg text-white">
      <header className="border-b border-[#444] pb-4 mb-6">
        <h2 className="text-3xl font-bold text-[#4caf50]">{destino.ciudad}, {destino.pais}</h2>
        <p className="text-gray-400 mt-2">Actividades: {destino.actividades.join(' • ')}</p>
      </header>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-bold mb-3">✈️ Vuelos Disponibles</h3>
          {datos.vuelos.map(vuelo => (
            <div key={vuelo.id} className="bg-[#121212] p-4 rounded-lg border border-[#333] mb-3">
              <p className="font-bold text-[#4caf50]">{vuelo.aerolinea}</p>
              <p className="text-sm text-gray-400">Fecha: {vuelo.fecha}</p>
              <p className="text-sm text-gray-400">Precio: ${vuelo.precio.toLocaleString('es-CL')}</p>
              <p className="text-xs mt-1">Disponibilidad: {vuelo.disponibilidad} asientos</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3"> Hoteles Disponibles</h3>
          {datos.hoteles.map(hotel => (
            <div key={hotel.id} className="bg-[#121212] p-4 rounded-lg border border-[#333] mb-3">
              <p className="font-bold text-[#4caf50]">{hotel.nombre}</p>
              <p className="text-sm text-gray-400">Precio por noche: ${hotel.precio.toLocaleString('es-CL')}</p>
              <p className={`text-xs mt-1 ${hotel.disponibilidad ? 'text-green-500' : 'text-red-500'}`}>
                {hotel.disponibilidad ? '✅ Disponible' : '❌ No disponible'}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link to="/" className="text-[#90caf9] hover:underline">← Volver a destinos</Link>
      </div>
    </div>
  );
}