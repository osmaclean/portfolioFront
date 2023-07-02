import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Header />
      <Hero />
      <div className="w-full h-screen opacity-50"></div>
      <div className="w-full h-screen opacity-50"></div>
      <div className="w-full h-screen opacity-50"></div>
    </div>
  );
}
