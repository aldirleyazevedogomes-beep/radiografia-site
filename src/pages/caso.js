import Layout from "../components/Layout";
import ChapterList from "../components/ChapterList";
import { p } from "framer-motion/client";

const chapters =[
    {id: 1, title: "I - Preambulo", summary: "de uma condenação judicial proferida pelo STJ - Supremo Tribunal de Justiça.", page: 1, pdfUrl: "/documents/radiografia.pdf#page=1" },
    {id: 2, title: "II - Introdução e Contextualização", summary: "Resumo do caso.", page: 2 },
    {id: 3, title: "III - Principais Magistrados Judiciais Intervenientes", summary: "Cronologia dos principais atos processuais.", page: 8},
    {id: 4, title: "IV - O caso Arlindo Teixeira", summary: "Resulta provado que o caso Arlindo Teixeira pode ser reumido nos seguintes factos.", page: 15},
    {id: 5, title: "V - Tenebrosas e inconfessas razões", summary: "para amputar os 24 pontos de facto." , page: 28},
    {id: 6, title: "VI - Inexistência Júridica", summary: "Amputação do Acórdão condenatório nº137/STJ/2023.", page: 32},
    {id: 7, title: "VII - Recusa do STJ", summary: "em corrigir o erro do computador.", page: 42},
    {id: 8, title: "VIII - Violação", summary: "do principio da vinculação temática.", page: 55},
    {id: 9, title: "IX - O forjar de um suposto crime", summary: "de atentado contra o Estado de Direito - violação do principio da livre apreciação da prova pelo tribunal.", page: 57, pdfUrl: "/documents/radiografia.pdf#page=57"},
    {id: 10, title: "X - Força Jurídica Cardinal", summary: "do ponto 32 dado como provado.", page: 77},
    {id: 11, title: "XI - Amputar 24 Pontos de Facto", summary: "Para arbitrariamente recusar considerar provados, 90 Pontos de Facto provados.", page: 78},
    {id: 12, title: "XII - Fraudes, Falsificações e Prevaricações", summary: "Em verdade, em verdade vos digo que muito mais do que mera Inexistência Jurídica o Acórdão ficou prenhe de Crimes de inserção de falsidades.", page: 83},
    {id: 13, title: "XIII - Consciência da InexistÊncia Jurídica do Acórdão", summary: "Por todo o acima exposto, resulta grosseiramente evidente que o Acórdão padece não só da Inexistência Jurídica...", page: 120},
    {id: 14, title: "XIV - Um condenação", summary: "que configura ser um absurdo jurídico.", page: 122},
    {id: 15, title: "XV - Habeas Corpus", summary: "Excesso de Prisão Preventiva.", page: 128},
    {id: 16, title: "XVI - Conclusão", summary: "Os pedidos deste Parecer Jurídico.", page: 131},

];

export default function Caso() {
    return (
        <div>
            <div className="max-w-5xl mx-auto px-6">
                <h1 classHome="text-8xl font-bold mb-6 text-center">O Caso</h1>
                <p className="text-gray-700 mb-6">
                    Esta secção reúne os capitulos que descrevem os factos e análises em ordem cronológica e temática, permitindo uma leitura segmentada e intuitiva das análises e conclusões.
               </p>
                <ChapterList chapters={chapters} />
             </div>
        </div>

    );

}