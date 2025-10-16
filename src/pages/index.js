import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>    
        <main className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-4">Radiografia da prisão de um Deputado  </h1>
            <p className="mb-6 text-lg">Resumo Executivo: O Acórdão Nº137/STJ/2023 omitiu 24 pontos de facto essenciais - omissão que o STJ reconheceu publicamente em 15/11/2023. (versão integral disponível para download).</p>

            <div className="mb-6">
                <Link href="/documentos">
                    <a className="inline-block bg-gray-900 text-white px-4 py-2 rounded">Download</a>
                </Link>
            </div>

            <h2 className="text-2xl font-semibold mt-8">Pontos-Chave</h2>
            <ul className="list-disc ml-6 mt-3">
                <li>24 pontos de facto foram amputados do acordao; o STJ admitiu erro de formatacao.</li>
                <li>Detencao e prisao preventiva desde 18/07/2021; alegado excesso face ao prazo maximo</li>
                <li>Recomendacoes: correccao formal, resumo executivo publico e dossier de evidencias</li>
            </ul>
        </main>
    </Layout>
  )
}
