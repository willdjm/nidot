import { BannerPages } from "../components/bannersPages";
import { CardsPage } from "../components/cardsPage";
import { FloatingButtons } from "../components/FloatingButtons";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Plans } from "../components/Plans";
import { Testimonial } from "../components/testimonial";
import { NoticesList } from "../noticias/components/noticiasLista";
import { SitesParaImob } from "./components/sites";

export default function Sites() {
  return (
    <main className="bg-zinc-50">
      <Navbar />
      <BannerPages mobileImage="/banner-site.png" tabletImage="/banner-site.png" desktopImage="/banner-site.png" />
      <SitesParaImob />
      <CardsPage hideCards={[3]} />
      <Plans />
      <Testimonial />
      <NoticesList numNotices={6} showPagination={false} />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
