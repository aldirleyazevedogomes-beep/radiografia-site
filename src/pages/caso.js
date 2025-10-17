import Layout from "../components/Layout";
import ChapterList from "../components/ChapterList";
import { p } from "framer-motion/client";

const chapters =[
    {id: 1, title: "I - Contexto politico e juridico", summary: "O ambiente nacional e as tensoes institucionais."},
    {id: 2, title: "II - O caso Arlindo Teixeirsa", summary: "A orgigem da actuacao do deputado como defensor oficioso."},
    {id: 3, title: "III - A prisao e a reacao publica", summary: "Prisao preventiva prolongada e debate sobre a legalidade."},
    {id: 4, title: "IV - O acordao e a omissao informatica", summary: "Analise dos 24 pontos de facto desaparecidos."},
    {id: 5, title: "V - Repercussoes juridicas e politicas", summary: "consequencias institucionais e dmocraticas."},

];

export default function Caso() {
    return (
        <Layout>
            <div className="max-w-5xl mx-auto px-6">
                <h1 classHome="text-3xl font-bold mb-6">O Caso</h1>
                <p className="text-gray-700 mb-6">
                    O relatorio e dividido em capitulos que descrevem os factos e analises em ordem cronologica e tematica.
               </p>
                <ChapterList chapters={chapters} />
             </div>
        </Layout>

    );

}