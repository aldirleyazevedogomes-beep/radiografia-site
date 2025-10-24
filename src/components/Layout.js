import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">

      <Navbar />
     
      <main className="flex-grow mt-20">{children}</main>
            

      <footer className="text-center py-6 text-gray-500 text-sm bprder-t mt-10">
        &copy; {new Date().getFullYear()} Radiografia da Prisão de um Deputado. Todos os direitos reservados.
       </footer>
    </div>
  );
}
