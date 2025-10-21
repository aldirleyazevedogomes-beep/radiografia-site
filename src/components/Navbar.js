import {useState} from "react";
import Link from "next/link";
import { Menu, X} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "O Caso", href: "/caso" },
    { name: "O Acórdão", href: "/acordao" },
    { name: "Cronologia", href: "/cronologia" },
    { name: "Documentos", href: "/documentos" },
    { name: "Contactos", href: "/contactos" },
  ];

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center h-16 px-6">
        <Link href="/" className="text-primary font-extrabold text-xl">
          AMADEU OLIVEIRA
        </Link>

        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-yellow-500 font-medium transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-inner">
          <nav className="flex flex-col items-center py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-accent text-lg font-medium"
                onClick={() => setIsopen(false)}
                >
                {link.name}
                </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
