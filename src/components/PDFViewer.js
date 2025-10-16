export default function PDFViewer({src, height = 800}) {
    return (
        <div className="w-full border rounded overflow-hidden">
            <iframe
                src={src}
                width="100%"
                height={height}
                title="Relatorio Completo"
                frameBorder="0"
        />
      </div>
    )
}