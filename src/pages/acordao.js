import Image from "next/image";
import Layout from "../components/Layout";

export default function acordao() {
    return (
        <Layout>
            <div className="max-w5xl mx-auto px-6">
                <h1 className="text-3xl font-bold mb-6">O acordao e o Erro do Computador</h1>
                <p className="text-gray-700 mb-8">O relatorio denuncia a omissao de 24 pontos de facto essenciais na decisao final do STJ. A seguir, as paginas 68 e 69 comparadas, onde a suposta falha ocorreu.</p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <Image
                            src="/images/pagina68.jpg"
                            alt="P]agina 68 do Acordao"
                            width={600}
                            height={800}
                            className="rounded-lg shadow-lg"
                        />
                        <p className="text-center mt-2 text-sm text-gray-600">
                            Pagina 68 - antes da omissao
                        </p>
                        </div>
                        <div>
                            <Image
                                src="/images/pagina69.jpg"
                                alt="Pagina 69 do acordao"
                                width={600}
                                height={800}
                                className="rounded-lg shadow-lg"
                            />
                            <p className="text-center mt-2 text-sm text-gray-600">Pagina 69 apos omissao
                            </p>
                        </div>
                    </div>
                </div>
        </Layout>
    )
}