import { BannerPages } from "../components/bannersPages";
import { CardsPage } from "../components/cardsPage";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { NoticesList } from "../noticias/components/noticiasLista";
import { SitesParaImob } from "./components/sites";

export default function Sites() {
  return (
<main>
  <Navbar/>
      <BannerPages mobileImage="/banner-site.png" tabletImage="/banner-site.png" desktopImage="/banner-site.png"/>
  <SitesParaImob/>
  <CardsPage hideCards={[3]} />
    <NoticesList numNotices={6} showPagination={false}  />
  <Footer/>
</main>
  );
}
