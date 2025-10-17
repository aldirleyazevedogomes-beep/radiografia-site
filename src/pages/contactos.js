import Layout from "../components/Layout";
export default function Contactos() {
    return (
        <Layout>
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-3xl font-bold mb-6">Contactos e Direitos Humanos</h1>
                <p className="mb-4">Este projecto visa promover transparencia e acesso a informacao</p>
                <ul className="list-disc ml-6 text-gray-700">
                    <li><strong>Assembleia Nacional:</strong>www.parlamento.cv</li>
                    <li><strong>Provedoria de Justica:</strong>www.provedor.cv</li>
                    <li><strong>CEDEAO - Comissao de Direitos Humanos:</strong>ecowas.int</li>
                </ul>
            </div>
        </Layout>
    )
}