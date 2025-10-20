
import Layout from '../components/Layout';
import PDFViewer from '../components/PDFViewer';
import Link from 'next/link';

export default function Documents() {
    return (
        <Layout>    
            <div className="max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-2xl font-bold mb-4">Documentos</h1>
                <p className="mb-4">Aqui você pode baixar o relatório completo e outros documentos relacionados.</p>

                <Link href="/documents/radiografia.pdf" className="underline" download>
                    Baixar relatorio completo (PDF)
                </Link>

                <div className="mt-6">
                    <PDFViewer src="/documents/radiografia.pdf" />
                </div>
            </div>
        </Layout>
    )
}