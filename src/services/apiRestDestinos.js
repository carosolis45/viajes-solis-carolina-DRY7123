const destinos = [
  { id: '1', ciudad: 'París', pais: 'Francia', actividades: ['Torre Eiffel', 'Louvre', 'Crucero por el Sena'], imagen: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400' },
  { id: '2', ciudad: 'Tokio', pais: 'Japón', actividades: ['Shibuya', 'Templo Sensoji', 'Monte Fuji'], imagen: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400' },
  { id: '3', ciudad: 'Río de Janeiro', pais: 'Brasil', actividades: ['Cristo Redentor', 'Copacabana', 'Pan de Azúcar'], imagen: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400' },
  { id: '4', ciudad: 'Nueva York', pais: 'EE.UU.', actividades: ['Times Square', 'Central Park', 'Estatua de la Libertad'], imagen: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400' },
];

let cacheDestinos = null;

export const obtenerDestinos = () => {
  return new Promise((resolve) => {
    if (cacheDestinos) {
      resolve(cacheDestinos);
      return;
    }
    setTimeout(() => {
      cacheDestinos = destinos;
      resolve(destinos);
    }, 800);
  });
};