import "./index.scss";

export default function Hero() {
  return (
    <section
      id="section"
      className="mt-14 w-full pt-4 pl-[12.1rem] pr-[11.2rem] mdOne:pl-[11.5rem] md2nd:pl-[11rem] md-3:pl-[10rem] md-3:pr-[10rem]  flex flex-col items-center justify-center relative"
    >
      <div className="flex w-full items-start justify-between">
        <div className="w-1/2 h-full">
          <p className="font-medium text-base text-content w-2/3 mt-10 md2nd:w-3/4 md-3:w-5/6">
            Tenho 26 anos, desenvolvedor front-end com um ano de experiência
            trabalhando como freelancer
          </p>
          <h1 className="font-bold text-content text-7xl w-full mt-16 md2nd:text-6xl md-3:text-[3.2rem]">
            DESENVOLVEDOR REACT
          </h1>
          <div className="w-full mt-4">
            <ul className="w-full h-20 flex flex-wrap items-center justify-start gap-8 md-3:gap-6">
              <li className="bg-react bg-cover bg-no-repeat w-8 h-8 md2nd:w-6 md2nd:h-6"></li>
              <li className="bg-js bg-cover bg-no-repeat w-8 h-8 md2nd:w-6 md2nd:h-6"></li>
              <li className="bg-html bg-cover bg-no-repeat w-8 h-8 md2nd:w-6 md2nd:h-6"></li>
              <li className="bg-css bg-cover bg-no-repeat w-8 h-8 md2nd:w-6 md2nd:h-6"></li>
              <li className="bg-sass bg-cover bg-no-repeat w-8 h-8 md2nd:w-6 md2nd:h-6"></li>
              <li className="bg-bootstrap bg-cover bg-no-repeat w-8 h-8 md2nd:w-6 md2nd:h-6"></li>
              <li className="bg-figma bg-cover bg-no-repeat w-8 h-8 md2nd:w-6 md2nd:h-6"></li>
              <li className="bg-tailwind bg-cover bg-no-repeat w-8 h-8 invert opacity-90 md2nd:w-6 md2nd:h-6"></li>
            </ul>
          </div>
        </div>
        <div className="w-[30%] flex flex-col items-center justify-start md-3:w-[40%]">
          <div className="w-full h-[32rem] bg-eagle bg-cover bg-bottom bg-no-repeat opacity-20 md-3:h-[30rem]"></div>
        </div>
      </div>
      <div className="w-3/4 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <h4 className="text-content text-xs font-bold">Rolar para baixo</h4>
          <div className="bg-scroll bg-cover bg-no-repeat w-4 h-4 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
