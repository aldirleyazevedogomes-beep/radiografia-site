import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="bg-red-500 text-white text-center p-8"></div>
        <div className="container mx-auto px-4 py-12">
          {children}
        </div>
      </main>

      <footer className="bg-primary text-gray-300 text-center py-6 mt-12">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Radiografia da Prisão de um Deputado</p>
          <p className="text-sm mt-1">
            Conteúdo de análise jurídica. Não constitui acusação formal.
          </p>
        </div>
      </footer>
    </div>
  );
}
