import { BannerPages } from "../components/bannersPages";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { NoticesList } from "../noticias/components/noticiasLista";
import { Clientes } from "./components/clientes";

export default function PageClientes() {
  return (
<main>
  <Navbar/>
      <BannerPages mobileImage="/banner-clientes.png" tabletImage="/banner-clientes.png" desktopImage="/banner-clientes.png"/>
  <Clientes/>

  <NoticesList numNotices={6} showPagination={false}  />
  <Footer/>
</main>
  );
}
