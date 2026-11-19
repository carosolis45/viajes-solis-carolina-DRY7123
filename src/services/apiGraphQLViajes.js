const datosViajes = {
  '1': {
    vuelos: [{ id: 'v1', aerolinea: 'Air France', precio: 850000, fecha: '2026-03-15', disponibilidad: 12 }],
    hoteles: [{ id: 'h1', nombre: 'Hotel Lumiere', precio: 120000, disponibilidad: true }]
  },
  '2': {
    vuelos: [{ id: 'v2', aerolinea: 'Japan Airlines', precio: 1200000, fecha: '2026-04-10', disponibilidad: 5 }],
    hoteles: [{ id: 'h2', nombre: 'Shinjuku Granbell', precio: 95000, disponibilidad: true }]
  },
  '3': {
    vuelos: [{ id: 'v3', aerolinea: 'LATAM', precio: 450000, fecha: '2026-02-20', disponibilidad: 20 }],
    hoteles: [{ id: 'h3', nombre: 'Copacabana Palace', precio: 150000, disponibilidad: false }]
  },
  '4': {
    vuelos: [{ id: 'v4', aerolinea: 'American Airlines', precio: 780000, fecha: '2026-05-01', disponibilidad: 8 }],
    hoteles: [{ id: 'h4', nombre: 'The Manhattan', precio: 180000, disponibilidad: true }]
  }
};

export const consultarViajesGraphQL = (destinoId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(datosViajes[destinoId] || { vuelos: [], hoteles: [] });
    }, 800);
  });
};