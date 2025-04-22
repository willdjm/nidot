import { BannerPages } from "../components/bannersPages";
import { Cards } from "../components/cards";
import { FloatingButtons } from "../components/FloatingButtons";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Plans } from "../components/Plans";
import { Testimonial } from "../components/testimonial";
import { NoticesList } from "../noticias/components/noticiasLista";
import { SuporteTreinamento } from "./components/suporteTecnicoETreinamento";

export default function SuporteTecnicoETreinamento() {
  return (
    <main className="bg-zinc-50">
      <Navbar />
      <BannerPages mobileImage="/banner-treinamento.png" tabletImage="/banner-treinamento.png" desktopImage="/banner-treinamento.png" />
      <SuporteTreinamento />
      <Cards />
      <Plans />
      <Testimonial />
      <NoticesList numNotices={6} showPagination={false} />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
