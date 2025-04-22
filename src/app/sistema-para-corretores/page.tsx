import { BannerPages } from "../components/bannersPages";
import { CardsPage } from "../components/cardsPage";
import { FloatingButtons } from "../components/FloatingButtons";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Plans } from "../components/Plans";
import { Testimonial } from "../components/testimonial";
import { NoticesList } from "../noticias/components/noticiasLista";
import { SistemaParaCorretores } from "./components/sistemaParaCorretores";

export default function SistemaCorretores() {
  return (
    <main className="bg-zinc-50">
      <Navbar />
      <BannerPages mobileImage="/banner-sistema-mobile.png" tabletImage="/banner-sistema.png" desktopImage="/banner-sistema.png" />
      <SistemaParaCorretores />
      <CardsPage hideCards={[4]} />
      <Plans />
      <Testimonial />
      <NoticesList numNotices={6} showPagination={false} />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
