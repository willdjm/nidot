import { BannerPages } from "../components/bannersPages";
import { CardsPage } from "../components/cardsPage";
import { FloatingButtons } from "../components/FloatingButtons";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Plans } from "../components/Plans";
import { Testimonial } from "../components/testimonial";
import { NoticesList } from "../noticias/components/noticiasLista";
import { Administrativo } from "./components/nidoadm";

export default function NIDOAdm() {
  return (
    <main className="bg-zinc-50">
      <Navbar />
      <BannerPages mobileImage="/banner-nidoadm.png" tabletImage="/banner-nidoadm.png" desktopImage="/banner-nidoadm.png" />
      <Administrativo />
      <CardsPage hideCards={[2]} />
      <Plans />
      <Testimonial />
      <NoticesList numNotices={6} showPagination={false} />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
