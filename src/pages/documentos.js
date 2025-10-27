
import Layout from '../components/Layout';
import PDFViewer from '../components/PDFViewer';
import Link from 'next/link';

export default function Documents() {
    return (
        <div>    
            <div className="max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-2xl font-bold mb-4">Documentos</h1>
                <p className="mb-4">Aqui você pode baixar o relatório completo e outros documentos relacionados.</p>

                <Link href="/pdfs/radiografia.pdf" className="underline" download>
                    Baixar relatorio completo (PDF)
                </Link>

                <div className="mt-6">
                    <PDFViewer src="/pdfs/radiografia.pdf" />
                </div>
            </div>
        </div>
    )
}