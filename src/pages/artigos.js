import Image from "next/image";
import Layout from "../components/Layout";

export default function Artigos () {
    return (
        <div>
           {/* Hero Editorial*/}
         <section className="bg-gray-50 py-16 px-6 md:px-12 border-b">
             <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">
                    {/* Capa do Livro */}
                    <div className="relative w-full md:w-1/3 bg-white rounded shadow-lg flex items-center justify-center p-4">
                        <Image
                            src="/images/livro.jpg.png"
                            alt="Amadeu Oliveira - O Inferno da Não Justiça"
                            width={400}
                            height={600}
                            className="object-contain rounded-md"
                            priority
                        />
                    </div>

                    {/* Texto e detalhes */}

                    <div className="flex-1 text-center md:text-left mt-8 md:mt-0">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            <span className="block italic text-gray-700">
                            "Amadeu Oliveira - O Inferno da Não Justiça"
                            
                            </span>
                        </h1>

                        <p className="text-gray-600 leading-relaxed mb-8">
                            Ao terceiro aniversário da controversa condenação e prisão do <strong>Deputado Amadeu Oliveira</strong>, publica-se, sob o título <strong>Amadeu Oliveira - O Inferno da Não-Justiça</strong>, uma compilação de textos do escritor <strong>Germano Almeida</strong>.
                            A leitura dos mesmos intriga e instiga sobre os meandros obscuros dos processos político e judicial que levaram ao encarceramento daquele advogado, conhecido pelas denúncias e ações cidadãs contra o status quo do sistema político e judiciário em Cabo Verde. 
                        </p>

                        <a
                            href="https://pt.wikipedia.org/wiki/Germano_Almeida"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 underline hover:text-blue-600"
                        >
                            Sobre o autor..
                        </a>
                    </div> 
                </div>
           </section>

           {/* Articles Section */}
           <section className="py-20 text-center">
                <h1 className="text-5xl font-display font-bold mb-8 text-primary">Outros Artigos e Publicações sobre o Caso.</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">Artigos e analises publicadas na Imprensa Nacional</p>

                <div className="max-w-4xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {artigos.map((artigo, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 flex-col justify-between"
                            >
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-primary">
                                        {artigo.titulo}
                                    </h3>
                                    <p className="text-sm text-gray-700 mb-6">{artigo.resumo || ''}</p>
                                    <p className="text-gray-600 mb-2">{artigo.fonte}</p>
                                    <p className="text-sm text-gray-400 mb-4">{artigo.data}</p>
                                </div>
                                <a
                                    href={artigo.Link}
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
    );
}

const artigos = [
        {
            titulo: "A EMERGÊNCIA DE “ATIVISMO JUDICIAL”(?) EM CABO VERDE",
            fonte: "Santiago Magazine - José António dos Reis",
            data: "09 de Março de 2023",
            Link: "https://santiagomagazine.cv/ponto-de-vista/a-emergencia-de-ativismo-judicial-em-cabo-verde",
        },
        {
            titulo: "O Parlamento Cabo-Verdiano Teria “Constituído” Uma Norma Constitucional Costumeira?",
            fonte: "Santiago Magazine - José António dos Reis",
            data: "22 de Março de 2023",
            Link: "https://santiagomagazine.cv/ponto-de-vista/o-parlamento-cabo-verdiano-teria-constituido-uma-norma-constitucional-costumeira",
        },
        {
            titulo: "Cabo Verde se Transformou em uma República de Contradições?",
            fonte: "Santiago Magazine - José António dos Reis",
            data: "14 de Abril de 2023",
            Link: "https://santiagomagazine.cv/ponto-de-vista/cabo-verde-se-transformou-em-uma-republica-de-contradicoes",
        }
    ];

