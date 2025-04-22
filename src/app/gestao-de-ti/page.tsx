import { BannerPages } from "../components/bannersPages";
import { Cards } from "../components/cards";
import { FloatingButtons } from "../components/FloatingButtons";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Plans } from "../components/Plans";
import { Testimonial } from "../components/testimonial";
import { NoticesList } from "../noticias/components/noticiasLista";
import { GestaoTI } from "./components/gestaoDeTi";

export default function GestaoDeTI() {
  return (
    <main className="bg-zinc-50">
      <Navbar />
      <BannerPages mobileImage="/banner-gestao-mobile.png" tabletImage="/banner-gestao.png" desktopImage="/banner-gestao.png" />
      <GestaoTI />
      <Cards />
      <Plans />
      <Testimonial />
      <NoticesList numNotices={6} showPagination={false} />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
