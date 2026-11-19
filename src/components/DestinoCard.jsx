import { Link } from 'react-router';

export default function DestinoCard({ destino }) {
  return (
    <div className="bg-[#1e1e1e] rounded-xl border border-[#333] overflow-hidden shadow-lg hover:-translate-y-1 transition-all">
      <img src={destino.imagen} alt={destino.ciudad} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{destino.ciudad}</h3>
        <p className="text-[#4caf50] font-semibold mb-2">{destino.pais}</p>
        <p className="text-gray-400 text-sm mb-4">Actividades: {destino.actividades.join(', ')}</p>
        <Link 
          to={`/destino/${destino.id}`} 
          className="block text-center bg-[#2e7d32] hover:bg-[#4caf50] text-white py-2 rounded transition-colors"
        >
          Ver Vuelos y Hoteles
        </Link>
      </div>
    </div>
  );
}