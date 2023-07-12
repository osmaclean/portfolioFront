import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import LanguagesFloater from "../../components/LanguagesFloater/LanguagesFloater";
import WhatsFloater from "../../components/WhatsFloater/WhatsFloater";
import Works from "../../components/Works/Works";

export default function Home({ data }) {
  return (
    <div className="h-screen w-full relative">
      <Header />
      <Hero />
      <Works data={data} />
      <Footer />
      <WhatsFloater />
      <LanguagesFloater />
    </div>
  );
}
