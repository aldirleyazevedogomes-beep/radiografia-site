import { useEffect } from "react";

export default function ImageModal({ src, alt, isOpen, onClose}) {
    useEffect(() => {
        if (!isOpen) return;

        function onKey(e) {
            if (e.key === "Escape") onClose();
        }
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        // overlay
        <div
           aria-modal="true"
           role="dialog"
           className="fixed inset-0 z-50 flex items-center justify-center gb-black/70 p-4"
           onClick={onClose} //clicar fora fecha o modal
        >
            {/* container da imagem - evita propagacao do clique */}
            
            <div 
                className="max-w-[95vw] max-h-[95vh] overflow-auto rounded-lg"
                onClick={(e) => e.stopPropagation()}
            >

                {/*Controlos (fechar) */}
                <div className="flex justify-end mb-2">
                    <button
                        onclick={onClose}
                        className="bg-white/90 text-gray-900 rounded px-3 py-1 text-sm shadow"
                        aria-label="Fechar Imagem"
                    >Fechar
                    </button>
                </div>

                {/* Imagem grande - usa <img> para compatibilidade</img> */}
                <div className="flex items-center justify-center">
                    <img
                        src={src}
                        alt={alt || ""}
                        className="max-w-full max-h-[80vh] rounded-md shadow-lg"
                        style={{ touchAction: "pan-y pinch-zoom"}}
                    />
                </div>

                {/* Legenda Opcional */}
                
                <div className="mt-3 text-center text-sm text-gray-200">
                    <span className="bg-black/40 px-3 py-1 rounded"> {alt}</span>
                </div>
            </div>
        </div>
    );
}
        
    
