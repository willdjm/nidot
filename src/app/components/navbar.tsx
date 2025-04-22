"use client"

import Link from "next/link";
import { useState } from "react";
import { MdPhone } from "react-icons/md";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Navbar */}
      <nav className="bg-whreite lg:shadow-none shadow-md border-b border-sky-500/10 lg:border-none mx-auto max-w-screen-xl">
        {/* Top Section - Logo, Contact and SAC */}
        <div className="flex items-center justify-between p-4 gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href='/'>
              <picture>
                <img src="/logo-novo2.png" alt="Logo" className="h-full sm:h-24" />
              </picture>
            </Link>
          </div>

          {/* Desktop Phone and SAC */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="tel:+551145083724">
              <p className="text-gray-800 hover:text-sky-500 ">
                <MdPhone className="inline-block mr-2" size={18} />
                (11) 4508-3724
              </p>
            </Link>
            <Link href="https://wa.me/5511953052059" target="_blank">
              <p className="text-gray-800 hover:text-sky-500">
                <FaWhatsapp className="inline-block mr-2" size={20} />
                (11) 95305-2059
              </p>
            </Link>
            <a href="http://portal.nido.com.br/index.php/site/login" target="_blank" className="bg-sky-500 text-white px-4 py-2 rounded-md text-sm hover:bg-sky-500/90">
              Portal do Cliente
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-sky-500/90 hover:bg-zinc-300/60 border border-zinc-300 hover:border-sky-500/50 rounded-md p-1 text-2xl md:text-3xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-50 absolute top-0 left-0 w-full h-screen flex flex-col p-6 space-y-6 shadow-lg z-50">
            {/* Close Button and Logo */}
            <div className="flex justify-between items-center mb-6 gap-4">
              {/* Logo on the left */}
              <picture>
                <img src="/logo-novo2.png" alt="Logo" className="h-full sm:h-24" />
              </picture>

              {/* Close Button on the right */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="lg:hidden text-sky-500/90 hover:bg-zinc-300/60 border border-zinc-300 hover:border-sky-500/50 rounded-md p-1 text-2xl md:text-3xl"
              >
                <FaTimes />
              </button>
            </div>

            {/* Menu Items */}
            <div className="space-y-6">
              <Link href="/">
                <p className="text-sky-500 hover:text-sky-500/80 hover:bg-zinc-300 rounded-md p-1 mt-2">Início</p>
              </Link>
              <Link href="/empresa">
                <p className="text-sky-500 hover:text-sky-500/80 hover:bg-zinc-300 rounded-md p-1 mt-2">Sobre nós</p>
              </Link>
              <Link href="/nidoimovel">
                <p className="text-sky-500 hover:text-sky-500/80 hover:bg-zinc-300 rounded-md p-1 mt-2">NIDOImóvel</p>
              </Link>
              <Link href="/nidoadm">
                <p className="text-sky-500 hover:text-sky-500/80 hover:bg-zinc-300 rounded-md p-1 mt-2">NIDOAdm</p>
              </Link>
              <Link href="/sites-para-imobiliaria">
                <p className="text-sky-500 hover:text-sky-500/80 hover:bg-zinc-300 rounded-md p-1 mt-2">Sites para Imobiliárias</p>
              </Link>
              <Link href="/sistema-para-corretores">
                <p className="text-sky-500 hover:text-sky-500/80 hover:bg-zinc-300 rounded-md p-1 mt-2">Sistemas para Corretores</p>
              </Link>
              <Link href="/#planos">
                <p className="text-sky-500 hover:text-sky-500/80 hover:bg-zinc-300 rounded-md p-1 mt-2">Nossos Planos</p>
              </Link>
              <Link href="/clientes">
                <p className="text-sky-500 hover:text-sky-500/80 hover:bg-zinc-300 rounded-md p-1 mt-2">Clientes</p>
              </Link>
              <Link href="/parceiros">
                <p className="text-sky-500 hover:text-sky-500/80 hover:bg-zinc-300 rounded-md p-1 mt-2">Parceiros</p>
              </Link>
              <Link href="/contato">
                <p className="text-sky-500 hover:text-sky-500/80 hover:bg-zinc-300 rounded-md p-1 mt-2">Contato</p>
              </Link>

              <Link href="tel:+551145083724">
                <p className="text-sky-500 hover:text-sky-500/80 hover:bg-zinc-300 rounded-md p-1 mt-2">
                  <MdPhone className="inline-block mr-2" size={18} />
                  (11) 4508-3724
                </p>
              </Link>
              <Link href="https://wa.me/5511953052059" target="_blank">
                <p className="text-sky-500 hover:text-sky-500/80 hover:bg-zinc-300 rounded-md p-1 mt-2 mb-6">
                  <FaWhatsapp className="inline-block mr-2" size={20} />
                  (11) 95305-2059
                </p>
              </Link>

              <Link href="http://portal.nido.com.br/index.php/site/login" className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-500/90">
                Portal do Cliente
              </Link>
            </div>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-center space-x-8 py-4 border-t  border-gray-200 text-center w-full">
          <Link href="/">
            <p className="text-gray-800 hover:text-sky-500">Início</p>
          </Link>
          <Link href="/empresa">
            <p className="text-gray-800 hover:text-sky-500">Sobre nós</p>
          </Link>
          <Link href="/nidoimovel">
            <p className="text-gray-800 hover:text-sky-500">NIDOImóvel</p>
          </Link>
          <Link href="/nidoadm">
            <p className="text-gray-800 hover:text-sky-500">NIDOAdm</p>
          </Link>
          <Link href="/sites-para-imobiliaria">
            <p className="text-gray-800 hover:text-sky-500">Sites para Imobiliárias</p>
          </Link>
          <Link href="/sistema-para-corretores">
            <p className="text-gray-800 hover:text-sky-500">Sistemas para Corretores</p>
          </Link>
          <Link href="/#planos">
                <p className="text-gray-800 hover:text-sky-500">Nossos Planos</p>
              </Link>
          <Link href="/clientes">
            <p className="text-gray-800 hover:text-sky-500">Clientes</p>
          </Link>
          <Link href="/parceiros">
            <p className="text-gray-800 hover:text-sky-500">Parceiros</p>
          </Link>
          <Link href="/contato">
            <p className="text-gray-800 hover:text-sky-500">Contato</p>
          </Link>
        </div>
      </nav>
    </div>
  );
}
