'use client';

import Link from 'next/link';
import React from 'react';
import { FaCheck } from 'react-icons/fa'; // Importando o ícone de check (marca de verificação)

export const Plans = () => {
  return (
    <section id='planos' className="mx-auto max-w-screen-xl lg:p-10 p-4">
      <h1 className="text-2xl font-semibold text-sky-500 mb-5 lg:mb-10 lg:text-2xl border-b-2 border-sky-500 w-full">
        Nossos Planos
      </h1>

      {/* Seção de Preços */}
      <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
        
        {/* Plano 1 */}
        <div className="h-full transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
          <div className="relative flex flex-col h-full p-6 rounded-lg bg-white border border-slate-200 shadow-md overflow-hidden">
            <div className="mb-5">
              <div className="text-sky-500 font-semibold mb-1">NIDOAdm</div>
              <div className="inline-flex items-baseline mb-2">
                <span className="text-slate-900 font-bold text-3xl">R$</span>
                <span className="text-slate-900 font-bold text-4xl">35</span>
                <span className="text-slate-500 font-medium">/mês</span>
              </div>
              <div className="text-sm text-slate-500 mb-5">Existem várias variações disponíveis, mas a maioria sofreu.</div>
              <a
                className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-sky-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-sky-950/10 hover:bg-sky-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-sky-300 transition-colors duration-150"
                href="#0"
              >
                Comprar Plano
              </a>
            </div>
            <div className="text-slate-900 font-medium mb-3">Inclui:</div>
            <ul className="text-slate-600 text-sm space-y-3 grow">
              <li className="flex items-center">
                <FaCheck className="w-3 h-3 fill-sky-500 mr-3 shrink-0" />
                <span>Textos de espaço reservado ilimitados</span>
              </li>
              <li className="flex items-center">
                <FaCheck className="w-3 h-3 fill-sky-500 mr-3 shrink-0" />
                <span>Consectetur adipiscing elit</span>
              </li>
              <li className="flex items-center">
                <FaCheck className="w-3 h-3 fill-sky-500 mr-3 shrink-0" />
                <span>Excepteur sint occaecat cupidatat</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Plano 2 */}
        <div className="h-full transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
          <div className="relative flex flex-col h-full p-6 rounded-lg bg-white border border-slate-200 shadow-md overflow-hidden">
            <div className="mb-5">
              <div className="text-sky-500 font-semibold mb-1">NIDOImóvel</div>
              <div className="inline-flex items-baseline mb-2">
                <span className="text-slate-900 font-bold text-3xl">R$</span>
                <span className="text-slate-900 font-bold text-4xl">55</span>
                <span className="text-slate-500 font-medium">/mês</span>
              </div>
              <div className="text-sm text-slate-500 mb-5">Existem várias variações disponíveis, mas a maioria sofreu.</div>
              <a
                className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-sky-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-sky-950/10 hover:bg-sky-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-sky-300 transition-colors duration-150"
                href="#0"
              >
                Comprar Plano
              </a>
            </div>
            <div className="text-slate-900 font-medium mb-3">Inclui:</div>
            <ul className="text-slate-600 text-sm space-y-3 grow">
              <li className="flex items-center">
                <FaCheck className="w-3 h-3 fill-sky-500 mr-3 shrink-0" />
                <span>Textos de espaço reservado ilimitados</span>
              </li>
              <li className="flex items-center">
                <FaCheck className="w-3 h-3 fill-sky-500 mr-3 shrink-0" />
                <span>Consectetur adipiscing elit</span>
              </li>
              <li className="flex items-center">
                <FaCheck className="w-3 h-3 fill-sky-500 mr-3 shrink-0" />
                <span>Excepteur sint occaecat cupidatat</span>
              </li>
              <li className="flex items-center">
                <FaCheck className="w-3 h-3 fill-sky-500 mr-3 shrink-0" />
                <span>Blocos pré-definidos conforme necessário</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Plano 3 */}
        <div className="h-full transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
          <div className="relative flex flex-col h-full p-6 rounded-lg bg-white border border-slate-200 shadow-md overflow-hidden">
            <div className="mb-5">
              <div className="text-sky-500 font-semibold mb-1">Site NIDO</div>
              <div className="inline-flex items-baseline mb-2">
                <span className="text-slate-900 font-bold text-3xl">R$</span>
                <span className="text-slate-900 font-bold text-4xl">85</span>
                <span className="text-slate-500 font-medium">/mês</span>
              </div>
              <div className="text-sm text-slate-500 mb-5">Existem várias variações disponíveis, mas a maioria sofreu.</div>
              <a
                className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-sky-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-sky-950/10 hover:bg-sky-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-sky-300 transition-colors duration-150"
                href="#0"
              >
                Comprar Plano
              </a>
            </div>
            <div className="text-slate-900 font-medium mb-3">Inclui:</div>
            <ul className="text-slate-600 text-sm space-y-3 grow">
              <li className="flex items-center">
                <FaCheck className="w-3 h-3 fill-sky-500 mr-3 shrink-0" />
                <span>Textos de espaço reservado ilimitados</span>
              </li>
              <li className="flex items-center">
                <FaCheck className="w-3 h-3 fill-sky-500 mr-3 shrink-0" />
                <span>Consectetur adipiscing elit</span>
              </li>
              <li className="flex items-center">
                <FaCheck className="w-3 h-3 fill-sky-500 mr-3 shrink-0" />
                <span>Excepteur sint occaecat cupidatat</span>
              </li>
              <li className="flex items-center">
                <FaCheck className="w-3 h-3 fill-sky-500 mr-3 shrink-0" />
                <span>Blocos pré-definidos conforme necessário</span>
              </li>
              <li className="flex items-center">
                <FaCheck className="w-3 h-3 fill-sky-500 mr-3 shrink-0" />
                <span>Sem repetições</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Botão Fale com um especialista */}
      <div className="flex justify-center mt-8">
            <Link href="https://wa.me/5511953052059" target="_blank">
              <button className="px-6 py-2 text-white bg-sky-500 rounded-md hover:bg-sky-600 hover:scale-102 transform transition-all duration-300">
                Fale com um especialista
              </button>
            </Link>
      </div>
    </section>
  );
};
