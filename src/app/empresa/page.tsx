import { BannerPages } from "../components/bannersPages";
import { Cards } from "../components/cards";
import { FloatingButtons } from "../components/FloatingButtons";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Plans } from "../components/Plans";
import { Testimonial } from "../components/testimonial";
import { NoticesList } from "../noticias/components/noticiasLista";
import { About } from "./components/empresa";

export default function Empresa() {
  return (
    <main className="bg-zinc-50">
      <Navbar />
      <BannerPages mobileImage="/banner-empresa.png" tabletImage="/banner-empresa.png" desktopImage="/banner-empresa.png" />
      <About />
      <Cards />
      <Plans />
      <Testimonial />
      <NoticesList numNotices={6} showPagination={false} />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
