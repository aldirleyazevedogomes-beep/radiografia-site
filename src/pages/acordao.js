import Image from "next/image";
import Layout from "../components/Layout";

export default function acordao() {
    return (
        <Layout>
            <div className="max-w5xl mx-auto px-6">
                <h1 className="text-3xl font-bold mb-6">O acordao e o Erro do Computador</h1>
                <p className="text-gray-700 mb-8">O relatorio denuncia a omissao de 24 pontos de facto essenciais na decisao final do STJ. A seguir, as paginas 68 e 69 comparadas, onde a suposta falha ocorreu.</p>
                
                <div className="grid md:grid-cols-2 gap-8 items-strat">
                    <figure className="bg-white p-4 rounded-lg shadow">
                        <Image src="/images/pagina68.jpg" alt="Página 68" width={700}  height={900}  className="rounded" />              
                        <figcaption className="text-sm text-gray-500 text-center mt-2">Pagina 68 - antes da omissao</figcaption>
                    </figure>
                        
                    <figure className="bg-white p-4 rounded-lg shadow">
                            <Image src="/images/pagina69.jpg" alt="Pagina 69" width={700}  height={900}  className="rounded" />
                            <figcaption className="text-sm text-gray-500 text-center mt-2">Pagina 69 apos omissao</figcaption>
                    </figure>                
                </div>
                    </div>
                
        </Layout>
    )
}