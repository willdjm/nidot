import { Banner } from "./components/banners";
import { Cards } from "./components/cards";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { SectionNIDOAdm } from "./components/SectionNIDOAdm";
import { SectionNIDOImovel } from "./components/SectionNIDOImovel";
import { Testimonial } from "./components/testimonial";
import { NoticesList } from "./noticias/components/noticiasLista";

export default function Home() {
  return (
<main className="bg-zinc-50">
  <Navbar/>
  <Banner/>
      <Cards showTitle={false}/>
      <SectionNIDOImovel/>
      <SectionNIDOAdm/>
      <Testimonial/>
  <NoticesList numNotices={6} showPagination={false}  />
  <Footer/>
</main>
  );
}
