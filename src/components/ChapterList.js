import { Link } from "lucide-react";

export default function ChapterList({ chapters }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {chapters.map((ch) => (
        <div key={chapters.id} className="card p-6 hover:shadow-xl transition">
          <h3 className="font-semibold text-xl mb-2">{ch.title}</h3>
          <p className="text-gray-600 mb-4">{ch.summary}</p>
          {/* Always render <a> the same way */}
          <a
            href={`/capitulo/${ch.id}`}
            className="text-accent font-medium hover:underline"
          >
            Ler Capítulo.
          </a>
        </div>
      ))}
    </div>
  );
}