import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function UsuariosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Gestión de Usuarios
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Aquí puedes gestionar los usuarios del sistema
          </p>
          <div className="space-y-4">
            <a 
              href="/usuarios/list" 
              className="block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ver Lista de Usuarios
            </a>
            <a 
              href="/usuarios/register" 
              className="block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Registrar Nuevo Usuario
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

