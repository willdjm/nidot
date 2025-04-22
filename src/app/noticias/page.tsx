import { BannerPages } from "../components/bannersPages";
import { FloatingButtons } from "../components/FloatingButtons";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { NoticesList } from "./components/noticiasLista";

export default function Noticias() {
  return (
    <main className="bg-zinc-50">
      <Navbar />
      <BannerPages mobileImage="/banner-noticias-mobile.png" tabletImage="/banner-noticias.png" desktopImage="/banner-noticias.png" />

      <NoticesList />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
