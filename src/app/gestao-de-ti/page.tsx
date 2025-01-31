import { BannerPages } from "../components/bannersPages";
import { Cards } from "../components/cards";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { NoticesList } from "../noticias/components/noticiasLista";
import { GestaoTI } from "./components/gestaoDeTi";

export default function GestaoDeTI() {
  return (
<main>
  <Navbar/>
      <BannerPages mobileImage="/banner-gestao-mobile.png" tabletImage="/banner-gestao.png" desktopImage="/banner-gestao.png"/>
  <GestaoTI/>
<Cards/>
  <NoticesList numNotices={6} showPagination={false}  />
  <Footer/>
</main>
  );
}
