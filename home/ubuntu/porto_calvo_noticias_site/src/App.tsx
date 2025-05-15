import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/noticias" element={<NewsPage />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </main>
        <footer className="bg-black text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} Porto Calvo Notícias. Todos os direitos reservados.</p>
          <p>Informando Porto Calvo e Região Norte de Alagoas.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
