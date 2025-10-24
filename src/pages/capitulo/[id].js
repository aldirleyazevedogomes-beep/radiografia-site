import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import chapters from "@/data/chapters";

export default function Capitulo() {
    const router = useRouter();
    const { id } = router.query;
    const chapter = chapters.find((ch) => ch.id === parseInt(id));

    if (!chapter) {
        return (
            <Layout>
                <div className="py-20 text-center">
                    <h1 className="text-3xl font-bold text-primary">
                        Capitulo nao encontrado!
                    </h1>
                </div>
            </Layout>
        );
    }

    const next = chapters.find((ch) => ch.id === chapter.id + 1);
    const prev = chapters.find((ch) => ch.id === chapter.id - 1);

    return (
        <layout>
            {/* Conteudo centralizado e limitado*/}
            <div className="flex justify-center bg-gray-50 py-16 px-4 mt-20">
                 <article classname="max-w-3xl w-full bg-white shadow -lg rounded-2xl p-8 prose prose-lg">
                     <h1 className="text-4xl font-display font-bold text-primary mb-8">
                      {chapter.title}
                </h1>

                <div
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{__html:chapter.content}}
                    />

                    {/* Navegacao */}
                    <div className="flex justify-between mt-12 text-accent font-medium">
                        {prev ? (
                            <a href={`/capitulo/${prev.id}`}>&larr; {prev.title}</a>
                        ) : (
                            <span></span>
                        )}
                        {next ? (
                            <a href={`/capitulo/${next.id}`}>{next.title} &rarr;</a>
                        ) : (
                            <span></span>
                        
                        )}
                    </div>

                    {/* Link para o PDF original*/}
                    <div className="text-center mt-10">
                        <a 
                        href={`/documents/radiografia.pdf#page=${chapter.page}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-acent hover:underline"
                    >
                        Ver no Relatorio Original
                    </a>
                    </div>
            </article>
            </div>
        </layout>
    );
}