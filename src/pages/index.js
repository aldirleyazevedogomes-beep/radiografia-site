import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

console.log("Tailwind test loaded");

export default function Home() {
  return (
        <Layout>  
        <section className="text-center">
            <div className="max-w-3xl mx-auto">
                <div className="inline-block bg-white p-4 rounded-lg shadow-lg -mt-16"></div>
            <Image
            src="/images/deputado.jpg"
            alt="Deputado Amadeu Oliveira"
            width={220}
            height={220}
            className="rounded-full"
            />
            
            <h1 className="text-3xl font-bold mb-4">Radiografia da prisão de um Deputado  </h1>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                Este relatório analisa as irregularidades processuais que levaram a condenação do deputado Amadeu Oliveira - Incluindo a omissão de 24 pontos de facto num acordao judicial, atribuída a um "erro de computador".</p>

            <div className="mt-8 flex items-center justify-center gap-4">
                <Link href="/documentos">
                    <Link href="/documentos" className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-95 transition">
                        Ler relatório completo (PDF)
                    </Link>
                </Link>
                <Link href="/caso">
                    <Link href="/caso" className="inline-block border border-gray-200 px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition"> Ver Resumo</Link>
                </Link>
            </div>
        </div>
    </section>
</Layout>
);
}

