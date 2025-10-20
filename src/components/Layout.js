import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <Navbar />
      <main className="main-container py-12">
        {children}
      </main>
      <footer className="bg-primary text-gray-300 text-center py-6 mt-8">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Radiografia da prisão de um Deputado</p>
          <p className="text-sm mt-1">Conteúdo de análise jurídica. Nao constitui acusação formal</p>
        </div>
      </footer>
    </div>
  );
}