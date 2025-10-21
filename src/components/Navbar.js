import Link from "next/link";

export default function Navbar() {
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
    </header>
  );
}
