import Layout from '../components/Layout';
import Banner from '../components/Banner';

export default function Home() {
    return (
        <Layout>
            
            <section className="text-center py-20">
                <h1 className="text-5xl md:text-6xl font-display font-bold mb6 text-primary">Radiografia da Prisão de um Deputado</h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Decretada por um Computador e não por Juizes de Carne e Osso</p>
                <div className="mt-10 flex justify-center space-x-4">
                    <a href="/caso" className="bg-accent text-primary font-semibold px-6 py-3 rounded-xl shadow hover:brightness-110 transition">Conheça o Caso</a>
                    <a href="/documents/radiografia.pdf" target="_blank" rel="noopener noreferrer" className="border border-accent yexy-accent font-semibold px-6 py-3 rounded-xl hover:text-primary transition">Leia o Documento Completo</a>
                </div>
            </section>
            <Banner />
        </Layout>
    )
}
