export default function Timeline ({events}) {
    return (
        <ol classname="border-1-2 border-gray-200 ml-4 pl-6">
            {events.map(evt => (
                <li key={evt.date} className="mb-6">
                    <div className="text-sm text-gray-500">{evt.date}</div>
                    <div className="mt-1"><strong>{evt.title}</strong></div>
                    <div className="text-gray-700 mt-1">{evt.description}</div>
                    
                </li>
            ))}
        </ol>
    )
}