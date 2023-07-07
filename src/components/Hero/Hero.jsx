import "./index.scss";

export default function Hero() {
  return (
    <section
      id="section"
      className="mt-14 sm:mt-16 w-full pt-4 pl-[12.1rem] pr-[11.2rem] sm:pl-8 sm:pr-8 sm-1:pl-4 sm-1:pr-4 md:pl-[3.8rem] md:pr-[3.8rem] mdOne:pl-[11.5rem] md2nd:pl-44 md-3:pl-40 md-3:pr-40 md-4:pl-36 md-4:pr-36 md-5:pl-32 md-5:pr-32 md-7:pl-52 md-8:pl-56 md-9:pl-60 md-9:pr-60 l:pl-64 l:pr-64 l-1:pl-[18.3rem] l-1:pr-[18.3rem] l-2:pl-[20rem] l-2:pr-[20rem] l-3:pl-[22rem] l-3:pr-[22rem] flex flex-col items-center justify-center relative"
    >
      <div className="flex w-full items-start justify-between">
        <div className="w-1/2 h-full md-4:w-3/5 ">
          <p className="font-medium text-base sm:text-xs text-content w-2/3 mt-10 md2nd:w-3/4 md-3:w-5/6 md-4:w-full md-4:text-sm l:text-xl l-3:text-[1.35rem]">
            Tenho 26 anos, desenvolvedor front-end com um ano de experiência
            trabalhando como freelancer
          </p>
          <h1 className="font-bold text-content text-7xl sm:text-[2.5rem] sm-2:text-[2rem] sm-3:text-[1.8rem] w-full mt-16 md2nd:text-6xl md-3:text-[3.2rem] md-4:mt-14 l:text-8xl l-3:text-9xl">
            DESENVOLVEDOR REACT
          </h1>
          <div className="w-full mt-4">
            <ul className="w-full h-20 flex flex-wrap items-center justify-start gap-8 md-3:gap-6 md-4:gap-4">
              <li className="bg-react bg-cover bg-no-repeat w-8 h-8 md2nd:w-6 md2nd:h-6 l:w-12 l:h-12"></li>
              <li className="bg-js bg-cover bg-no-repeat w-8 h-8 md2nd:w-6 md2nd:h-6 l:w-12 l:h-12"></li>
              <li className="bg-html bg-cover bg-no-repeat w-8 h-8 md2nd:w-6 md2nd:h-6 l:w-12 l:h-12"></li>
              <li className="bg-css bg-cover bg-no-repeat w-8 h-8 md2nd:w-6 md2nd:h-6 l:w-12 l:h-12"></li>
              <li className="bg-sass bg-cover bg-no-repeat w-8 h-8 md2nd:w-6 md2nd:h-6 l:w-12 l:h-12"></li>
              <li className="bg-bootstrap bg-cover bg-no-repeat w-8 h-8 md2nd:w-6 md2nd:h-6 l:w-12 l:h-12"></li>
              <li className="bg-figma bg-cover bg-no-repeat w-8 h-8 md2nd:w-6 md2nd:h-6 l:w-12 l:h-12"></li>
              <li className="bg-tailwind bg-cover bg-no-repeat w-8 h-8 invert opacity-90 md2nd:w-6 md2nd:h-6 l:w-12 l:h-12"></li>
            </ul>
          </div>
        </div>
        <div className="w-[30%] flex flex-col items-center justify-start md-3:w-[40%]">
          <div className="w-full h-[32rem] bg-eagle bg-cover bg-bottom bg-no-repeat opacity-20 md-3:h-[30rem] md-4:h-[29rem] md-6:bg-contain md-6:bg-top md-6:h-[10rem] l-2:h-[50rem]"></div>
        </div>
      </div>
      <div className="w-3/4 flex flex-col items-center justify-center md-6:mt-16 ">
        <div className="flex flex-col items-center justify-center gap-4">
          <h4 className="text-content text-xs font-bold l:text-base l-1:text-lg">
            Rolar para baixo
          </h4>
          <div className="bg-scroll bg-cover bg-no-repeat w-4 h-4 animate-bounce l:w-6 l:h-6 l-1:h-8 l-1:w-8"></div>
        </div>
      </div>
    </section>
  );
}
