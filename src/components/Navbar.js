import Link from "next/link";
export default function Navbar() {
    const links = [
        {name: "Home", href: "/"},
        {name: "O caso", href: "/caso"},
        {name: "O Acordao", href: "/acordao"},
        {name: "cronologia", href: "/cronologia"},
        {name: "Documentos", href: "/documentos"},
        {name: "Contactos", href: "/contactos"},
    ];

    return (
        <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
                <Link href="/" className="font-semibold text-lg">
                    Radiografia
                </Link>
                <div className="flex space-x-4">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover:text-yellow-400 transition"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}