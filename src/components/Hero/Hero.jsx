export default function Hero() {
  return (
    <section className="mt-14 w-full h-[91vh] pt-8 pl-[4.7rem] flex">
      <div className="w-1/2">
        <p className="font-medium text-base text-content w-2/3 mt-10">
          Tenho 26 anos, desenvolvedor front-end com um ano de experiência
          trabalhando como freelancer
        </p>
        <h1 className="font-bold text-content text-7xl w-1/2 mt-16">
          DESENVOLVEDOR REACT
        </h1>
        <div className="w-full mt-4">
          <ul className="w-full h-20 flex items-center justify-start gap-8">
            <li className="bg-react bg-cover bg-no-repeat w-8 h-8"></li>
            <li className="bg-js bg-cover bg-no-repeat w-8 h-8"></li>
            <li className="bg-html bg-cover bg-no-repeat w-8 h-8"></li>
            <li className="bg-css bg-cover bg-no-repeat w-8 h-8"></li>
            <li className="bg-sass bg-cover bg-no-repeat w-8 h-8"></li>
            <li className="bg-bootstrap bg-cover bg-no-repeat w-8 h-8"></li>
            <li className="bg-figma bg-cover bg-no-repeat w-8 h-8"></li>
            <li className="bg-tailwind bg-cover bg-no-repeat w-8 h-8 invert opacity-90"></li>
          </ul>
        </div>
      </div>
      <div className="w-1/2 bg-eagle bg-cover bg-no-repeat h-full opacity-20 bg-bottom"></div>
    </section>
  );
}
