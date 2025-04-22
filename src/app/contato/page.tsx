import { BannerPages } from "../components/bannersPages";
import { Cards } from "../components/cards";
import { FloatingButtons } from "../components/FloatingButtons";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Plans } from "../components/Plans";
import { Testimonial } from "../components/testimonial";
import { NoticesList } from "../noticias/components/noticiasLista";
import { ContactSection } from "./components/contato";
import { ContactForm } from "./components/formulario";

export default function Contato() {
  return (
    <main className="bg-zinc-50">
      <Navbar />
      <BannerPages mobileImage="/banner-contact-mobile.png" tabletImage="/banner-contact.png" desktopImage="/banner-contact.png" />
      <ContactSection />
      <ContactForm />
      <Cards titleText="Nossos Produtos Imobiliários" />
      <Plans />
      <Testimonial />
      <NoticesList numNotices={6} showPagination={false} />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
