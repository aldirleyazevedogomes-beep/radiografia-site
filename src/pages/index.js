import Layout from '../components/Layout';
import Banner from '../components/Banner';

export default function Home() {
    return (
        <Layout>
            <Banner />

            <section className="text-center py-20">
                <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-primary">Radiografia da Prisão de um Deputado</h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Uma análise detalhada do caso político-judicial envolvendo o deputado Amadeu Oliveira</p>
                 <div className="mt-10 flex justify-center space-x-4">
                    <a href="/caso" className="border border-acent text-accent font-semibold px-6 py-3 rounded-xl hover:bg-accent hover:text-primary transition">Sobre o Caso</a>
                    <a href="/documentos" className="border border-acent text-accent font-semibold px-6 py-3 rounded-xl hover:bg-accent hover:text-primary transition">Ler Documento</a>
                </div>
            </section>
        </Layout>
    )
}
