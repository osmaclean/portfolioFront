import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Works from "../../components/Works/Works";

export default function Home({ data }) {
  return (
    <div className="h-screen w-full">
      <Header />
      <Hero />
      <Works data={data} />
    </div>
  );
}
