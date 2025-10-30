import dynamic from "next/dynamic";
import {useState } from "react";
import {motion} from "framer-motion";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import chapters from "@/data/chapters";
import Link from "next/link";

const PDFViewer = dynamic(() => import("@/components/PDFViewer"), {ssr: false});


export default function Capitulo({ chapter }) {

    const [showPDF, setShowPDF] = useState(false);
    const router = useRouter();
    const { id } = router.query;
    

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

    const handleTogglePDF = () => setShowPDF ((prev) => !prev);

    const next = chapters.find((ch) => ch.id === chapter.id + 1);
    const prev = chapters.find((ch) => ch.id === chapter.id - 1);

    return (
        <div>
            {/* Conteudo centralizado e limitado*/}
            <section className="py-20 px-4 flex justify-center bg-gradient-to-b from-gray-50 to-white">
                <motion.div
                    initial={{ opacity:0, y: 30}}
                    animate={{ opacity:1, y:0}}
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    whileHover={{ scale: 1.01, boxShadow: "0 12px 24 px rgba (0,0,0,0.08)"}}
                    className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8 md:p-12 transition-all duration-300"
                    >
                      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                      {chapter.title}
                </h1>

                <article className="text-gray-700 leading-relaxed whitespace-pre-line text-justify max-w-prose mx-auto">
                    {chapter.summary}
                </article>

                <article className="text-gray-700 leading-relaxed whitespace-pre-line text-justify max-w-prose mx-auto">
                    {chapter.content}
                </article>
                   
                <div className="mt-10 text-right border-t pt-6">
                    <button
                        onClick={handleTogglePDF}
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                        >
                            {showPDF
                            ?"Fechar relatorio original"
                            :`Ver no relatorio original (pág. ${chapter.page})`}
                        </button>
                    </div> 

                    {showPDF && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.6 }}
                          className="mt-8 overflow-hidden rounded-xl border"
                        >
                          <PDFViewer file="/pdfs/radiografia.pdf" page={chapter.page} />
                        </motion.div>
                    )}                    

                    {/* Navegacao */}
                    <div className="flex justify-between mt-12 text-accent font-medium items-center max-w-none">
                        {prev ? (
                            <Link href={`/capitulo/${prev.id}`}>&larr; {prev.title}</Link>
                        ) : (
                            <span></span>
                        )}
                        {next ? (
                            <Link href={`/capitulo/${next.id}`}>{next.title} &rarr;</Link>
                        ) : (
                            <span></span>
                        
                        )}
                    </div>

                   
            </motion.div>
        </section>
    </div>
    );
}

export async function getStaticPaths() {
    const paths = chapters.map((chapter) => ({
        params: {id: chapter.id.toString()},
    }));

    return { paths, fallback:false};
}

export async function getStaticProps ({ params }) {
    const chapter = chapters.find((c) => c.id.toString() === params.id);
    return { props: {chapter}};
}