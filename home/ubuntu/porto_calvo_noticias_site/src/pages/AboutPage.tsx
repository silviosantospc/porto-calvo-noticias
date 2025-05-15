import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">Sobre o Porto Calvo Notícias</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="text-lg text-gray-800 mb-4">
          O Porto Calvo Notícias é o seu principal canal de informação sobre os acontecimentos de Porto Calvo e de toda a região norte de Alagoas. Nossa missão é levar até você notícias atualizadas, com credibilidade e relevância, cobrindo os mais diversos temas de interesse da comunidade.
        </p>
        <p className="text-lg text-gray-800 mb-4">
          Fundado com o compromisso de oferecer um jornalismo local de qualidade, buscamos dar voz aos cidadãos, destacar as iniciativas positivas e fiscalizar as questões que impactam o dia a dia da nossa gente. Acreditamos na força da informação para transformar e desenvolver nossa região.
        </p>
        <p className="text-lg text-gray-800">
          Nossa equipe é formada por profissionais dedicados e apaixonados por Porto Calvo, sempre em busca da notícia onde ela acontece. Conte conosco para se manter bem informado!
        </p>
        {/* Espaço para imagem da equipe ou da cidade */}
        <div className="my-8 text-center">
          {/* <img src="/path-to-your-image.jpg" alt="Nossa Equipe" className="mx-auto rounded-lg shadow-md" /> */}
          <p className="text-sm text-gray-600 mt-2">Porto Calvo Notícias - Informando Porto Calvo e Região.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
