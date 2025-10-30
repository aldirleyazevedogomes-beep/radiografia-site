 export default function Footer() {
    return (
        <><div className="h-1 w-full bg-gradient-to-r from-blue-700 via-blue-500 to blue-700"></div><footer className="bg-gray-800 text-white py-8 mt-12 shadow-inner border-blue-600">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-90">
            &copy; {new Date().getFullYear()} Radiografia da Prisão de um Deputado.
          </p>
          <p className="text-xs opacity-70 mt-2">
            Projecto Editorial Independente - Todos os Direitos reservados
          </p>
        </div>
      </footer></>
    );

 }
 