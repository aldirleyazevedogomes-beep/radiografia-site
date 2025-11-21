import { useRouter } from "next/router";
import PDFViewer from "@/components/PDFViewer";
import Layout from "@/components/Layout";

const capitulosCpi = [
  { id: 1, titulo: "Iniciativa da Comissão Parlamentar de Inquérito", pagina: 2 },
  { id: 2, titulo: "Delimitação do objecto do inquérito Parlamentar", pagina: 3 },
  { id: 3, titulo: "Necessidade de suspender o Mandato do Deputado", pagina: 3 },
  { id: 4, titulo: "Elogio à Assembleia Nacional", pagina: 4 },
  { id: 5, titulo: "Força Jurídica Primordial da Imunidade Parlamentar", pagina: 5 },
  { id: 6, titulo: "Falta de Respeito Institucional para com a Assembleia Nacional", pagina: 6 },
  { id: 7, titulo: "Suspensão do MAndato de Deputado para julgamento em Porto Novo", pagina: 7},
  { id: 8, titulo: "Denegação da Justiça", pagina: 8 },
  { id: 9, titulo: "Responsabilidade da Assembleia Nacional", pagina: 10 },
  { id: 10, titulo: "Timing certo para avaliação da ACP", pagina: 11 },
  { id: 11, titulo: "Da Comissão de Ética e Transparência", pagina: 12 },
  { id: 12, titulo: "Do crime de Atentado Contra o Estado de Direito", pagina: 13 },
  { id: 13, titulo: "Inversão de funções e violação do principio de igualdade", pagina: 16 },
  { id: 14, titulo: "Não reapreciação da decisão judicial condenatória - Preservação da decisão condenatória", pagina: 17 },
  { id: 15, titulo: "Contradição insanável", pagina: 17 },
  { id: 16, titulo: "Gato Escondido com rabo de fora", pagina: 18 },
  { id: 17, titulo: "Cronologia dos principais actos processuais", pagina: 19 },
  { id: 18, titulo: "Conclusões e Pedidos", pagina: 21 },
];

export default function CapituloCpi() {
  const router = useRouter();
  const { id } = router.query;

  const cap = capitulosCpi.find((c) => c.id === Number(id));

  if (!cap) return null;

  return (
    <div>
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white shadow-xl rounded-xl p-8">
          <h1 className="text-3xl font-bold mb-4">{cap.titulo}</h1>

          <p className="text-gray-700 mb-6">
            A abrir o documento na página <strong>{cap.pagina}</strong>…
          </p>

          {/* PDF embutido */}
          <PDFViewer file="/documents/cpi.pdf" page={cap.pagina} height="800px" />

          {/* Navegação entre capítulos */}
          <div className="flex justify-between mt-8 text-blue-600 underline">
            {cap.id > 1 ? (
              <a href={`/cpi/${cap.id - 1}`}>← Capítulo anterior</a>
            ) : (
              <span></span>
            )}

            {cap.id < capitulosCpi.length && (
              <a href={`/cpi/${cap.id + 1}`}>Próximo capítulo →</a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
