import React from 'react';

// Exemplo de tipo para uma notícia
interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  imageUrl?: string; // Opcional
  date: string;
  category: string;
  fullContentLink: string; // Link para a notícia completa
}

// Dados mocados para notícias - substituir por dados reais ou de uma API
const mockNews: NewsArticle[] = [
  {
    id: '1',
    title: 'Grande Evento Cultural Acontece em Porto Calvo',
    summary: 'A cidade de Porto Calvo sediou um dos maiores eventos culturais da região, atraindo visitantes de diversas localidades. Confira os destaques.',
    imageUrl: 'https://via.placeholder.com/400x250/FFA500/000000?text=Evento+Cultural',
    date: '14 de Maio de 2025',
    category: 'Cultura',
    fullContentLink: '#',
  },
  {
    id: '2',
    title: 'Novas Medidas para Melhoria da Infraestrutura Urbana Anunciadas',
    summary: 'A prefeitura anunciou um pacote de medidas visando a melhoria da infraestrutura da cidade, com foco em pavimentação e saneamento básico.',
    imageUrl: 'https://via.placeholder.com/400x250/FF0000/FFFFFF?text=Infraestrutura',
    date: '13 de Maio de 2025',
    category: 'Cidade',
    fullContentLink: '#',
  },
  {
    id: '3',
    title: 'Time Local Conquista Vitória Importante no Campeonato Regional',
    summary: 'Em uma partida emocionante, o time de futebol de Porto Calvo garantiu uma vitória crucial, avançando na competição regional.',
    imageUrl: 'https://via.placeholder.com/400x250/000000/FFFFFF?text=Esportes',
    date: '12 de Maio de 2025',
    category: 'Esportes',
    fullContentLink: '#',
  },
  // Adicionar mais notícias mocadas aqui
];

const NewsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">Últimas Notícias</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockNews.map((article) => (
          <div key={article.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            {article.imageUrl && (
              <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
              <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full uppercase mb-2">
                {article.category}
              </span>
              <h2 className="text-xl font-semibold mb-2 text-gray-900">{article.title}</h2>
              <p className="text-sm text-gray-700 mb-1">{article.date}</p>
              <p className="text-gray-700 mb-4">{article.summary}</p>
              <a 
                href={article.fullContentLink} 
                className="text-orange-600 hover:text-orange-700 font-semibold transition duration-300 ease-in-out"
              >
                Leia mais &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Espaço para publicidade/AdSense abaixo da listagem de notícias */}
      <div className="my-8 p-4 bg-gray-100 text-center">
        <p className="text-gray-600">Espaço reservado para publicidade (AdSense)</p>
        {/* Exemplo de bloco de anúncio */}
        <div className="w-full h-24 bg-gray-300 flex items-center justify-center mt-2">
          Anúncio (e.g., 728x90)
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

