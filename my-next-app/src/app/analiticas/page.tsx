import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function AnaliticasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Análisis y Reportes
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Visualización de datos y métricas del sistema
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Usuarios Activos</h3>
              <p className="text-3xl font-bold text-blue-600">1,234</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Sesiones Hoy</h3>
              <p className="text-3xl font-bold text-green-600">567</p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Tiempo Promedio</h3>
              <p className="text-3xl font-bold text-purple-600">12m</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

