import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function SaludPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Sistema de Salud
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Monitoreo y gestión del sistema de salud
          </p>
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            Sistema funcionando correctamente
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

