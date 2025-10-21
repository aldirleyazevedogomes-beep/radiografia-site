import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">

      <Navbar />

      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-6 py-12">
          {children}
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-200 text-center py-6 mt-12">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm opacity-80">
            &copy; {new Date().getFullYear()} Radiografia da Prisão de um Deputado. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
