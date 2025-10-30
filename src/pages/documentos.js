
import {useState} from "react";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";

const PDFViewer = dynamic(() => import("../components/PDFViewer"), { ssr: false });

const DOCUMENTS = [
    {
        id:"relatório",
        title:"Relatório Completo",
        filename:"/pdfs/radiografia.pdf",
        description:"Baixe o relatório completo em formato PDF.",
        defaultPage:1,
    },
    {
        id:"Petição CPI",
        title:"Petição para a Criação de uma Comissão Parlamentar de Inquérito (CPI)",
        filename:"/documents/cpi.pdf",
        defaultPage:1,

    }
];

export default function Documents() {
    const [active, setActive] = useState(null);
    const [page, setPage] = useState(null);
    const [viewerOpen, setViewerOpen] = useState(false);

    const openViewer = (doc, pageNumber = null) => {
        setActive(doc.id);
        setPage(pageNumber ?? doc.defaultPage ??1);
        setViewerOpen(true);

        setTimeout(()=> {
            const el = document.getElementById("document-viewer");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start"});
        }, 120);
        };

    const closeViewer = () => {
        setViewerOpen (false);
        setActive (null);
        setPage (null);
        };

    
    return (
        <div>    
            <div className="max-w-5xl mx-auto px-4 py-16">
                <h1 className="text-3xl font-bold mb-6">Documentos</h1>
                <p className="mb-4">Aqui você pode baixar o relatório completo e outros documentos relacionados.</p>

                <div className="grid gap-6">
                    {DOCUMENTS.map((doc) => (
                        <article key={doc.id} className="bg-white rounded-2xl shadow p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div>
                                    <h2 className="text-xl font-semibold">{doc.title}</h2>
                                    <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => openViewer(doc, doc.defaultPage)}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                                        >
                                            Ver (pág.{doc.defaultPage ?? 1})
                                    </button>

                                    <a
                                        href={doc.filename}
                                        download
                                        className="px-4 py-2 border rounded-md text-gray-800 hover:bg-gray-100 transition"

                                    > Descarregar
                                    </a>

                                    <button
                                        onClick={() => {
                                            setActive(doc.id);
                                            setViewerOpen(true);
                                            setPage(doc.defaultPage ?? 1);
                                        }}
                                        className="px-3 py-2 text-sm text-gray-600 hover:text-gray-800"
                                        title="Abrir e escolher página"
                                        >
                                            Abrir 
                                    </button>
                                </div>
                            </div>

                            {/* Se este doc for ativo, podemos mosytrar um resumo / mini-preview*/}
                            {active === doc.id && viewerOpen && (
                                <div className="mt-4 text-sm text-gray-600">
                                    A abrir: <strong>{doc.title}</strong> - página <strong>{page}</strong>
                                </div>
                            )}
                        </article>
                    ))}
                </div>

                {/* Visualizador de Documentos */}
                <div id="document-viewer" className="mt-8">
                    {viewerOpen && active && (
                        <div className="bg-white rounded-2xl shadow p-4">
                            <div className="flex items-start justify-between gap-4 mb-4">
                            <div>
                                <h3 className="text-lg font-medium">
                                    {DOCUMENTS.find((d) => d.id === active)?.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Página {page}
                                </p>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={() => {
                                        const idx = DOCUMENTS.findIndex((d) => d.id === active);
                                        if(page > 1) setPage((p) => p - 1);
                                    }}
                                    className="px-3 py-2 border rounded text-sm"
                                    >
                                         Página Anterior
                                </button>

                                <button
                                    onClick={() => {
                                        setPage((p) => (p ? p + 1 : 1));
                                    }}
                                    className="px-3 py-2 border rounded text-sm"
                                    >
                                         Próxima Página
                                </button>

                                <button
                                    onClick={() => {
                                        const doc = DOCUMENTS.find((d) => d.id === active);
                                        if (doc) window.open(`${doc.filename}#page=${page}`, "_blank");
                                    }}
                                    className="px-3 py-2 bg-gray-100 rounded text-sm"
                                    >
                                         Abrir em nova aba
                                </button>

                                <button
                                    onClick={closeViewer}
                                    className="px-3 py-2 text-sm text-red-600"
                                    >
                                         Fechar
                                </button>
                            </div>
                        </div>

                        <PDFViewer
                            file={DOCUMENTS.find((d) => d.id === active)?.filename} 
                            page={page}
                            height="80vh"
                        />  
                    </div>                   
                    )}
            </div>
        </div>
    </div>
    );
}