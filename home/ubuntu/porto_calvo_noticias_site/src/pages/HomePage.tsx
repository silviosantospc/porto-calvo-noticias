import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">Bem-vindo ao Porto Calvo Notícias</h1>
      <p className="text-lg text-center">
        Seu portal de notícias da região norte de Alagoas. Fique por dentro dos últimos acontecimentos.
      </p>
      {/* Espaço para destaques de notícias */}
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Exemplo de card de notícia - repetir conforme necessário */}
        <div className="border rounded-lg p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Título da Notícia Principal</h2>
          <p className="text-gray-700 mb-4">Um breve resumo da notícia para atrair o leitor...</p>
          <a href="#" className="text-orange-600 hover:text-orange-700 font-semibold">Leia mais &rarr;</a>
        </div>
        <div className="border rounded-lg p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Outra Notícia Importante</h2>
          <p className="text-gray-700 mb-4">Um breve resumo da notícia para atrair o leitor...</p>
          <a href="#" className="text-orange-600 hover:text-orange-700 font-semibold">Leia mais &rarr;</a>
        </div>
        <div className="border rounded-lg p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Mais um Destaque</h2>
          <p className="text-gray-700 mb-4">Um breve resumo da notícia para atrair o leitor...</p>
          <a href="#" className="text-orange-600 hover:text-orange-700 font-semibold">Leia mais &rarr;</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
