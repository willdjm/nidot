import { BannerPages } from "../components/bannersPages";
import { CardsPage } from "../components/cardsPage";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { NoticesList } from "../noticias/components/noticiasLista";
import { Imovel } from "./components/nidoimovel";

export default function NIDOImovel() {
  return (
<main>
  <Navbar/>
    <BannerPages mobileImage="/1.jpg" tabletImage="/2.jpg" desktopImage="/3.jpg"/>
  <Imovel/>
  <CardsPage hideCards={[1]} />
  <NoticesList numNotices={6} showPagination={false}  />
  <Footer/>
</main>
  );
}
