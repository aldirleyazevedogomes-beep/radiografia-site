"use client";

export default function PDFViewer({ file, page =1 }) {
    const pdfUrl = `${file}#page=${page}`;

    return (
        <div className="w-full h-[80vh] bg-gray-100 rounded-xl overflow-hidden flex justify-center items-center shadow-inner">
            <object
              data={pdfUrl}
              type="application/pdf"
              width="100%"
              height="100%"
              className="rounded-xl"
            >

              {/*Fallback para browsers antigos */}
              <iframe
                src={pdfUrl}
                width="100%"
                height="100%"
                className="rounded-xl"
                title="PDF Viewer"

              >
                Esta navegador nao suporta visualizacao de PDF.
                <a href={file} className="text-blue-600 underline">
                    Clique aqui para abrir o relatorio.
                </a>
              </iframe>
            </object>
        </div>
    )
}