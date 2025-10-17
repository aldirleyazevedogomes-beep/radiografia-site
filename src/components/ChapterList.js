export default function ChapterList({ chapters }) {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {chapters.map((chapter) => (
                <div
                    key={chapter.id}
                    className="bg-white shadow p-6 rounded-lg border hover:shadow-xl transition"
                >
                    <h3 className="font-semibold text-xl mb-2">{chapter.title}</h3>
                    <p className="text-gray-600 mb-3">{chapter.summary}</p>
                    <a href={`/documentos#cap${chapter.id}`} className="text-yellow-600 hover:underline">
                        Ler Capitulo.
                    </a>
                </div>
            ))}
        </div>
    );
}