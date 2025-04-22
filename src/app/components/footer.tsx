import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { MdLocationOn, MdPhone } from 'react-icons/md';

export function Footer() {
  return (
    <footer className="bg-sky-500 text-white text-center lg:text-left">
      <div className='mx-auto max-w-screen-xl'>
        {/* Container para ícones de redes sociais */}
        <div className="flex items-center justify-center border-b-2 border-white p-6 lg:justify-between">
          <div className="me-12 hidden lg:block">
            <span>Conecte-se conosco nas redes sociais:</span>
          </div>
          <div className="flex justify-center">
  {/* Ícones de redes sociais com hover effect */}
  <a href="#!" className="me-6 hover:scale-110 transition-all duration-300">
    <FaFacebook className="size-7 md:size-7 lg:size-6" />
  </a>
  <a href="#!" className="me-6 hover:scale-110 transition-all duration-300">
    <FaInstagram className="size-7 md:size-7 lg:size-6" />
  </a>
  <a href="#!" className="me-6 hover:scale-110 transition-all duration-300">
    <FaLinkedin className="size-7 md:size-7 lg:size-6" />
  </a>
  <a href="#!" className="me-6 hover:scale-110 transition-all duration-300">
    <FaYoutube className="size-7 md:size-7 lg:size-6" />
  </a>
</div>

        </div>

        {/* Container principal do Footer, contendo 4 seções */}
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {/* Seção de TW Elements */}
            <div>
              <Link href='/'>
                <picture className="flex justify-center md:justify-start">
                  <img src="/logonovo.png" alt="" className="w-64 lg:w-full" />
                </picture>
              </Link>
              <p className='mt-6 tracking-wide'>
                Há mais de 30 anos especializada em soluções tecnológicas para o ramo imobiliário.
              </p>
            </div>

            {/* Seção de Produtos */}
            <div>
              <h6 className="mb-4 text-zinc-50 flex justify-center font-semibold uppercase md:justify-start">
                Produtos
              </h6>
              <p className="mb-4">
                <a href="/nidoimovel">Sistema NIDOImóvel</a>
              </p>
              <p className="mb-4">
                <a href="/nidoadm">Sistema NIDOAdm</a>
              </p>
              <p className="mb-4">
                <a href="/sites-para-imobiliaria">Sites para Imobiliárias</a>
              </p>
              <p className="mb-4">
                <a href="/sistema-para-corretores">Sistema para Corretores</a>
              </p>
            </div>

            {/* Seção de Links Úteis */}
            <div>
              <h6 className="mb-4 text-zinc-50 flex justify-center font-semibold uppercase md:justify-start">
                Links Úteis
              </h6>
              <p className="mb-4">
                <a href="/empresa">Empresa</a>
              </p>
              <p className="mb-4">
                <a href="/clientes">Clientes</a>
              </p>
              <p className="mb-4">
                <a href="/parceiros">Parceiros</a>
              </p>
              <p className="mb-4">
                <a href="/noticias">Notícias</a>
              </p>
            </div>

            {/* Seção de Contato */}
            <div>
              <h6 className="mb-4 text-zinc-50 flex justify-center font-semibold uppercase md:justify-start">
                Contato
              </h6>

              {/* Endereço */}
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3">
                  {/* Ícone de Localização */}
                  <MdLocationOn size={20} />
                </span>
                <a href="https://maps.app.goo.gl/1GkP8KeiDfqf2pX86" target="_blank" rel="noopener noreferrer">
                  Vila Clementino - SP
                </a>
              </p>

              {/* E-mail */}
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3">
                  {/* Ícone de E-mail (Escuro) */}
                  <MdEmail size={20} />
                </span>
                <a href="mailto:info@example.com">
                  contato@nido.com.br
                </a>
              </p>

              {/* Telefone */}
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3">
                  {/* Ícone de Telefone */}
                  <MdPhone size={20} />
                </span>
                <a href="tel:1145083724">
                  + 55 (11) 4508-3724
                </a>
              </p>

              {/* WhatsApp */}
              <p className="flex items-center justify-center md:justify-start">
                <span className="me-3">
                  {/* Ícone de WhatsApp */}
                  <FaWhatsapp size={20} />
                </span>
                <a href="https://wa.me/5511953052059" target="_blank" rel="noopener noreferrer">
                  + 55 (11) 95305-2059
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Copyright */}
      <div className=" border-t border-gray-500 text-white p-4 text-center">
        <span>© {new Date().getFullYear()}</span>
        <a className="font-semibold ml-2" href="https://www.nido.com.br/">
          NIDOTEC - Hub Imobiliária
        </a>
        <span>, inc. All rights reserved.</span>
      </div>
    </footer>
  );
}
