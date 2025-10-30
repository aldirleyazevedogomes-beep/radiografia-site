import Layout from '../components/Layout';
import Banner from '../components/Banner';

export default function Home() {
    return (
        <div>
            <section className="text-center py-12 md:py-16">
                <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-primary">Radiografia da Prisão de um Deputado</h1>
                <p className="text-lg md:tex                npm run devt-3xl text-gray-600 max-w-3xl mx-auto">Decretada por um Computador e não por Juizes de Carne e Osso</p>
                <div className="mt-6 flex justify-center space-x-4">
                    <a href="/caso" className="bg-accent text-primary font-semibold px-6 py-3 rounded-xl shadow hover:brightness-110 transition">Conheça o Caso</a>
                    <a href="/documents/radiografia.pdf" target="_blank" rel="noopener noreferrer" className="border border-accent text-accent font-semibold px-6 py-3 rounded-xl hover:text-primary transition">Leia o Documento Completo</a>
                </div>
            </section>

            <Banner />

            <div className="text-center mt-4">
                <p className="text-gray-600 text-sm tracking-wide uppercase">Projecto editorial de {" "}
                    <a
                        href="https://aldirleygomes.cv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-gray-800 hover:text-blue-700 transition-color duration-300"
                    >
                        ALDIRLEY GOMES
                    </a>
                </p>
            </div>
        </div>
    )
}
