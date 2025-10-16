import Layout from '../components/Layout'
import PDFViewer from '../components/PDFViewer'

export default function Documents() {
    return (
        <Layout>    
            <div className="max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-2xl font-bold mb-4">Documentos</h1>
                <p className="mb-4">Aqui você pode baixar o relatório completo e outros documentos relacionados.</p>

                <a href="/documents/radiografia.pdf" download className="underline">Baixar relatorio completo (PDF)</a>

                <div className="mt-6">
                    <PDFViewer src="/documents/radiografia.pdf" />
                </div>
            </div>
        </Layout>
    )
}