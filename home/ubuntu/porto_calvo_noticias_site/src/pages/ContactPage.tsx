import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você integraria o envio do formulário para um backend ou serviço de email
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    // Resetar formulário após envio (opcional)
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">Entre em Contato</h1>
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8">
        {isSubmitted ? (
          <div className="text-center p-4 bg-green-100 text-green-700 rounded-md">
            <p className="font-semibold">Obrigado pelo seu contato!</p>
            <p>Sua mensagem foi enviada com sucesso. Retornaremos em breve.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Assunto</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-300 ease-in-out"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        )}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Outras Formas de Contato</h3>
          <p className="text-gray-700">Você também pode nos encontrar nas redes sociais ou através do nosso email direto:</p>
          <p className="text-gray-700 mt-1"><strong>Email:</strong> contato@portocalvonoticias.com.br (exemplo)</p>
          {/* Adicionar links para redes sociais aqui */}
        </div>
      </div>
       {/* Espaço para publicidade/AdSense abaixo do formulário de contato */}
      <div className="my-8 p-4 bg-gray-100 text-center">
        <p className="text-gray-600">Espaço reservado para publicidade (AdSense)</p>
        <div className="w-full h-24 bg-gray-300 flex items-center justify-center mt-2">
          Anúncio (e.g., 300x250)
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

