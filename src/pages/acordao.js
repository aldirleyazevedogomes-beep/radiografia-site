import {useState} from "react";
import Layout from "../components/Layout";
import ImageModal from "../components/ImageModal";



export default function acordao() {
    const [open, setOpen] = useState({isOpen: false, src: "", alt:""});

    const openImage = (src, alt) => setOpen({ isOpen: true, src, alt});
    const closeImage = () => setOpen({isOpen: false, src: "", alt: ""});

    return (
        <Layout>
            <section className="text-center py-20">
                <h1 className="text-5xl font-display font-bold mb-8 text-primary">O acordao e o Erro do Computador</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">O relatorio denuncia a omissao de 24 pontos de facto essenciais na decisao final do STJ. A seguir, as paginas 68 e 69 comparadas, onde a suposta falha ocorreu.</p>
                
                <div className="max-w-4xl mx-auto grid gap-8 px-6 sm:grid-cols-2">
                    <figure className="bg-white p-4 rounded-lg shadow cursor-pointer" onClick={() => openImage("/images/pagina68.jpg", "Pagina 68 - acordao")}>
                        <img 
                            src="/images/pagina68.jpg" 
                            alt="Página 68" 
                            className="w-full h-auto rounded"
                            style={{ display: "block", objectFit: "cover" }}
                        />              
                        <figcaption className="mt-3 text-sm text-gra-600">Pagina 68 - antes da omissao</figcaption>
                    </figure>

                    <figure className="bg-white p-4 rounded-lg shadow cursor-pointer" onClick={() => openImage("/images/pagina69.jpg", "Pagina 69 -Acordao")}>
                        <img 
                            src="/images/pagina69.jpg"
                            alt="Pagina 69 do Acordao"
                            className="w-full h-auto rounded"
                            style={{ display: "block", objectFit: "cover"}}
                        />
                        <figcaption className="mt-3 text-sm text-gray-600">Pagina 69 - Apos a Omissao</figcaption>
                    </figure>
                </div>

                <div className="text-center mt-10">
                    <a
                        href="/documents/radiografia.pdf#page=33"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hvoer:underline font-medium"
                        >Ver no relatorio original
                        </a>
                </div>
            </section>

            {/* Modal (instanciado um vez) */}
            <ImageModal
                isOpen={open.isOpen}
                src={open.src}
                alt={open.alt}
                onClose={closeImage}
            />
            </Layout>
    );
}


                          