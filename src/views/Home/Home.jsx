import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import LanguagesFloater from "../../components/LanguagesFloater/LanguagesFloater";
import WhatsFloater from "../../components/WhatsFloater/WhatsFloater";
import Works from "../../components/Works/Works";
import USA from "/light/usa.png";
import BR from "/light/br.png";
import { useState } from "react";

export default function Home({ data }) {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    let newLanguage = currentLanguage === "pt" ? "en" : "pt";
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
    if (newLanguage == "en") {
      window.document.getElementById("flag-language").src = BR;
    } else {
      window.document.getElementById("flag-language").src = USA;
    }
  };

  return (
    <div className="h-screen w-full relative">
      <Header t={t} />
      <Hero t={t} />
      <Works data={data} t={t} />
      <Footer t={t} />
      <WhatsFloater t={t} />
      <LanguagesFloater handleChangeLanguage={handleChangeLanguage} />
    </div>
  );
}
