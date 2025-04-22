'use client';

import React from 'react';

// Defina um array de notícias localmente
const news = [
  {
    id: '1',
    title: 'Você sabia que a NIDO faz parte do Grupo Porto Seguro?',
    date: '8 de janeiro de 2025',
    image: '/img-noticias-1.png', // Teste com imagem
    text: `A NIDOTEC Hub Imobiliária, que ao longo dos anos se consolidou como uma referência em soluções no mercado imobiliário, passou a integrar um dos maiores grupos do Brasil: O Grupo Porto. Essa parceria se iniciou a mais de 2 anos e está fortalecendo as nossas capacidades, ampliando a oferta de soluções inovadoras e proporcionando aos nossos clientes uma experiência ainda mais completa e segura. 
    O Grupo Porto Seguro é amplamente reconhecido por sua história de confiança e credibilidade, oferecendo uma gama de produtos e serviços que atendem às necessidades dos brasileiros em diversas áreas, como bancária, seguros, saúde, assistência e tecnologia. 
    Ao unir a experiência da NIDO com à robustez e à estrutura do Grupo Porto, criamos um ambiente fértil para o desenvolvimento de novas ideias, produtos e serviços, sempre com o foco em atender às necessidades de um mundo cada vez mais digital. 
    Contamos com todos vocês para seguir transformando o mercado imobiliário e criando soluções que fazem a diferença na vida das pessoas. 
    Obrigado por fazer parte dessa jornada!`
  },
];

export function NoticiasDetalhes() {
  const noticia = news[0]; // Pegando a primeira notícia

  const hasText = noticia.text.trim() !== ''; // Verifica se o texto não está vazio
  const hasImage = noticia.image.trim() !== ''; // Verifica se a imagem está definida

  return (
    <div className="mx-auto max-w-screen-xl lg:p-10 p-4">
      <h1 className="text-2xl font-semibold text-sky-500 mb-5 lg:mb-10 lg:text-2xl border-b-2 border-sky-500 w-full">
        {noticia.title}
      </h1>

      {/* Flex container para a imagem e texto */}
      <div className={`flex ${hasImage && hasText ? 'gap-6' : ''} flex-col lg:flex-row`}>
        {/* Condicional para imagem */}
        {hasImage && (
          <picture className={`flex-shrink-0 ${hasText ? 'w-full lg:w-1/2' : 'w-full'}`}>
            <img
              className="w-full h-auto object-cover"
              src={noticia.image}
              alt="Imagem da notícia"
            />
          </picture>
        )}

        {/* Condicional para texto, ocupa 100% se não houver imagem */}
        {hasText && (
          <div className={`mt-2 text-gray-700 text-base text-justify ${hasImage ? 'w-full lg:w-1/2' : 'w-full'}`}>
            {noticia.text.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Data sempre embaixo, fora do bloco de texto */}
      <span className="text-sm text-gray-500 mt-4 block">
        {noticia.date}
      </span>
    </div>
  );
}
