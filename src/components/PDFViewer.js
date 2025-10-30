"use client";
import React from "react";

export default function PDFViewer({ file, page =1, height = "80vh" }) {
    const pdfUrl = `${file}#page=${page}`;

    return (
        <div 
        className="w-full rounded-xl overflow-hidden border"
        style={{ height }}
        role="region"
        aria-label="Visualizador de PDF"
        >
            <object
                    
              data={pdfUrl}
              type="application/pdf"
              width="100%"
              height="100%"
              aria-label="PDF Embutido"
              
            >

              {/*Fallback para browsers antigos */}
              <iframe
                src={pdfUrl}
                width="100%"
                height="100%"
                title="Visualizador de PDF"
                style={{ border: "none"}}

              >
                <div className="p-6 text-center">
                  <p>Esta navegador nao suporta visualização embutida de PDF.</p>
                <a 
                  href={file} 
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    Clique aqui para abrir o relatório.
                </a>
                </div>
              </iframe>
            </object>
        </div>
    )
}