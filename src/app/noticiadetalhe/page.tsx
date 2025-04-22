import { BannerPages } from "../components/bannersPages";
import { Cards } from "../components/cards";
import { FloatingButtons } from "../components/FloatingButtons";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Plans } from "../components/Plans";
import { Testimonial } from "../components/testimonial";
import { NoticesList } from "../noticias/components/noticiasLista";
import { NoticiasDetalhes } from "./components/detalhe";


export default function NoticiaDetalhe() {
  return (
    <main className="bg-zinc-50">
      <Navbar />
      <BannerPages mobileImage="/banner-noticias-mobile.png" tabletImage="/banner-noticias.png" desktopImage="/banner-noticias.png" />
      <NoticiasDetalhes />
      <NoticesList numNotices={6} showPagination={false} title="Demais notícias" />
      <Cards />
      <Plans />
      <Testimonial />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
