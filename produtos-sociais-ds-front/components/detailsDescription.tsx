interface DescriptionProps {
  category: string;
  ong: string;
}

export function DetailsDescription({
  category,
  ong,
}: DescriptionProps) {
  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold text-blue-900 mb-4">Detalhes</h3>
      <div className="grid grid-cols-3 gap-4 mt-2 text-gray-600">
        <div>
          <span className="font-semibold text-blue-900">Categoria</span>
          <p className="text-blue-600">{category}</p>
        </div>
        <div>
          <span className="font-semibold text-blue-900">ONG</span>
          <p className="text-blue-600">{ong}</p>
        </div>
      </div>
    </div>
  );
}
