interface ArtisanInfoProps {
    artisanName: string;
    artisanPlace: string;
    artisanStory: string;
  }
  
  export function ArtisanInfo({ artisanName, artisanPlace, artisanStory }: ArtisanInfoProps) {
    return (
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Sobre a artesã</h3>
        <p className="text-gray-600 mt-2">
          O conjunto foi criado por <strong>{artisanName}</strong>, uma talentosa artesã de {artisanPlace}. {artisanStory}
        </p>
      </div>
    );
  }
  