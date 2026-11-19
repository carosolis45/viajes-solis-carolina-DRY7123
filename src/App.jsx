import { Routes, Route, Link } from 'react-router'
import Home from './pages/Home'
import DestinoDetalle from './pages/DestinoDetalle'

function NotFound() {
  return (
    <div className="text-center mt-20 text-white">
      <h2 className="text-5xl font-bold text-[#4caf50] mb-4">404</h2>
      <p className="text-xl mb-6">Página no encontrada</p>
      <Link to="/" className="bg-[#2e7d32] px-6 py-2 rounded text-white">Volver al inicio</Link>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#121212]">
      <main className="pb-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destino/:id" element={<DestinoDetalle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
