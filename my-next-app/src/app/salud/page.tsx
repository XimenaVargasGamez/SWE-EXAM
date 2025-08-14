import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function SaludPage() {
  return (
    <div className="min-h-[1100px] flex flex-col">
      <NavBar />
      <main className="flex-1 relative">
        <Image
          src="/backdrop.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="text-center relative z-10 p-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Sistema de Salud
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Monitoreo y gestión del sistema de salud
          </p>
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded inline-block">
            Sistema funcionando correctamente
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
