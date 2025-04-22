'use client'; // Adicione esta linha para garantir que o componente seja renderizado no lado do cliente

import React from 'react';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';

export const FloatingButtons: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-center space-y-4">
      {/* WhatsApp */}
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors">
          <FaWhatsapp size={24} />
        </button>
      </a>

      {/* Instagram */}
      {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-colors">
          <FaInstagram size={24} />
        </button>
      </a> */}

      {/* Facebook */}
      {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
          <FaFacebookF size={24} />
        </button>
      </a> */}

      {/* YouTube */}
      {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <button className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors">
          <FaYoutube size={24} />
        </button>
      </a> */}

      {/* LinkedIn */}
      {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <button className="bg-blue-700 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-colors">
          <FaLinkedinIn size={24} />
        </button>
      </a> */}

      {/* Botão de Voltar ao Topo */}
      <button
        onClick={scrollToTop}
        className="bg-zinc-400 text-white p-4 rounded-full shadow-lg hover:bg-gray-500 transition-colors"
      >
        <FaArrowUp size={24} />
      </button>
    </div>
  );
};

