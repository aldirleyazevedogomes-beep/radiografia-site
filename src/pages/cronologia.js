import Layout from "@/components/Layout";
export default function cronologia() {
    const events = [
        {date: '02/08/2015' , title: 'Nomeacao como defensor oficioso', description: 'Tribunal de Ribeira Grande.' },
        {date: '18/05/2021' , title: 'Posse como deputado', description: 'Tomou posse como deputado nacional.' },
        {date: '27/06/2021' , title: 'Saida temporaria de Arlindo Teixeira', description: 'viagem para Franca' },
        {date: '18/07/2021' , title: 'Detencao e prisao preventiva', description: 'Inicio da Prisao Preventiva de Amadeu Oliveira.' },
        {date: '20/06/2023' , title: '137/STJ/2023', description: 'STJ confirma condenacao (conteudo co omissoes).' },
        {date: '15/11/2023' , title: 'Esclarecimento do STJ', description: 'STJ admite omissao por erro de formatacao.' },
    ];

    return (
        <div>
            <section className="py-20 text-center">
                <h1 className="text-5-xl1 font-dispaly font-bold mb-8 text-primary">Cronologia dos Factos</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">Linha temporal dos principais acontecimentos que marcaram o caso</p>

                <div className="max-w-3xl mx-auto px-6">
                    <ul className="relative border-l border-acent">
                        {events.map((events, index) => (
                            <li key={index} className="mb-12 ml-6">
                                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-accent rounded-full"></span>
                                <h3 className="text-xl font-semibold text-primary mb-1">{events.date} - {events.title}</h3>
                                <p className="text-gray-600">{events.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    )
}