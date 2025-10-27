import Layout from "../components/Layout";

export default function Artigos () {
    const artigos = [
        {
            title: "Artigo 1",
            fonte: "Nacao?",
            data: "12 de Janeiro de 2024",
            Link: "https://www.nacao.com/artigo1",
        },
        {
            title: "Artigo 2",
            fonte: "Estadao",
            data: "15 de Fevereiro de 2024",
            Link: "https://www.estadao.com/artigo2"
        },
        {
            title: "Artigo 3",
            fonte: "Folha de S.Paulo",
            data: "20 de Marco de 2024",
            Link: "https://www.folha.uol.com.br/artigo3"
        }
    ];

    return (
        <div>
            <section className="py-20 text-center">
                <h1 className="text-5xl font-display font-bold mb-8 text-primary">Artigos e Publicações sobre o Caso.</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">Artigos e analises publicadas na Imprensa Nacional</p>

                <div clasName="max-w-4xl mx-auto px-6 grid gap-8 sn:grid-col-2 lg:grid-cols-3">
                    {artigos.map((artigo, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 flex-col justify-between"
                            >
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-primary">
                                        {artigo.titulo}
                                    </h3>
                                    <p className="text-gray-600 mb-2">{artigo.fonte}</p>
                                    <p className="text-sm text-gray-400 mb-4">{artigo.data}</p>
                                </div>
                                <a
                                    href={artigo.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent font-medium hover:underline mt-auto"
                                >
                                    Ler Artigo Completo &rarr;
                                </a>
                        </div>
                    ))}
                </div>  
            </section>
        </div>
    )
}