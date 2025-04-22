import { BannerPages } from "../components/bannersPages";
import { Cards } from "../components/cards";
import { FloatingButtons } from "../components/FloatingButtons";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Plans } from "../components/Plans";
import { Testimonial } from "../components/testimonial";
import { NoticesList } from "../noticias/components/noticiasLista";
import { Clientes } from "./components/clientes";

export default function PageClientes() {
  return (
    <main className="bg-zinc-50">
      <Navbar />
      <BannerPages mobileImage="/banner-clientes-mobile.png" tabletImage="/banner-clientes.png" desktopImage="/banner-clientes.png" />
      <Clientes />
      <Cards titleText="Faça parte você também" />
      <Plans />
      <Testimonial />
      <NoticesList numNotices={6} showPagination={false} />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
