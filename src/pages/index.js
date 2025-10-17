import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>  
        <section className="max-w-5xl mx auto text-center px-4">
            <Image
            src="/images/deputado.jpg"
            alt="Deputado Amadeu Oliveira"
            width={280}
            height={280}
            className="mx-auto rounded-full shadow-lg mb-6"
            />
            
            <h1 className="text-3xl font-bold mb-4">Radiografia da prisão de um Deputado  </h1>
            <p className="text-lg text-gray-700 mb-6">
                Este relatorio analisa as irregularidades processuais que levaram a condenacao do deputado Amadeu Oliveira - Incluindo a omissao de 24 pontos de facto num acordao judicial, atribuida a um "erro de computador".</p>

            
                <Link href="/documentos">
                <a className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
                    Ler relatorio completo (PDF)
                </a>
                </Link>
            
            </section>
            </Layout>
 );
}

