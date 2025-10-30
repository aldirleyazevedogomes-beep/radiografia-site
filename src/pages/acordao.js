import {useState} from "react";
import Layout from "../components/Layout";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

export default function acordao() {
    
    return (
        <div>
            <section className="max-w-5xl mx-auto px-4 py-16">
                <h1 className="text-3xl font-display font-bold mb-8 text-center">O Acórdão e o Erro do Computador</h1>
                <p className="text-center font-bold text-gray-700 max-w-3xl mx-auto mb-8">O relatório denuncia a omissão de 24 PONTOS DE FACTO essenciais na decisão final do STJ. A seguir, as páginas 68 e 69 comparadas, onde a suposta falha ocorreu.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {/* Página 68 */}
        <PhotoProvider
            speed={() => 800}
            easing={(type) => (type === 2 ? "cubic-bezier(.36,.66,.04,1)" : "linear")}
        
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                <PhotoView src="/images/pagina68.jpg">
                  <img
                    src="/images/pagina68.jpg"
                    alt="Página 68 do Acórdão"
                    className="rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 cursor-zoom-in max-w-full h-auto"
                    style={{ maxHeight: "60vh", objectFit: "contain" }} //tumbnail appearance
                  />
                </PhotoView>

                <PhotoView src="/images/pagina69.jpg">
                  <img
                    src="/images/pagina69.jpg"
                    alt="Página 69 do Acórdão"
                    className="rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 cursos-zoom-in max-w-full h-auto"
                    style={{ maxHeight: "60vh", objectFit: "contain" }}
                    />
                </PhotoView>
            </div>
        </PhotoProvider>
                </div>
            </section>
        </div>
    );
}
         

          