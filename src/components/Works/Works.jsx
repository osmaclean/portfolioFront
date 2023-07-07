import "./index.scss";
import Blank from "/light/blank.svg";

export default function Works({ data }) {
  return (
    <div
      id="sectionWorks"
      className="w-full pt-8 pl-[11.25rem] pr-[11.25rem] mt-20 sm-1:pl-4 sm-1:pr-4 sm:pl-8 sm:pr-8 md:pl-[3.8rem] md:pr-[3.8rem] md-7:pl-52 md-7:pr-52 md-8:pl-56 md-8:pr-56 md-9:pl-60 md-9:pr-60 l:pl-64 l:pr-64 l-1:pl-[18.3rem] l-1:pr-[18.3rem] l-2:pl-[20rem] l-2:pr-[20rem] l-3:pl-[22rem] l-3:pr-[22rem] mdOne:pl-[11.5rem] mdOne:pr-[11.5rem] md2nd:pl-[11rem] md2nd:pr-[11rem] md-3:pl-[10rem] md-3:pr-[10rem] md-4:pl-[9rem] md-4:pr-[9rem] md-5:pl-[8rem] md-5:pr-[8rem] "
    >
      <h1 className="text-content text-3xl mt-8 font-extrabold uppercase md-3:text-2xl sm:text-xl l:text-4xl l-3:text-5xl">
        Portfólio
      </h1>
      <div className="pt-12 pb-12 md-3:pt-6 flex flex-wrap items-center justify-between gap-12 md-3:gap-4 l:flex-nowrap">
        {data.map((obj) => (
          <div
            key={obj.id}
            className="w-96 md-3:w-72 md-5:w-64 sm-1:w-56 l:w-[30rem] flex flex-col items-center justify-center"
          >
            <figure>
              <img
                className="w-80 h-80 md-3:h-72 md-5:h-64 sm-1:h-56"
                src={obj.imgPathDetail}
                alt={obj.title}
              />
            </figure>
            <h2 className="text-center text-content font-bold mt-4 mb-4 text-xl sm:text-base l:text-2xl l-3:text-3xl">
              {obj.title}
            </h2>
            <span className="text-center text-content text-base mb-4 sm:text-sm l:text-xl l-3:text-[1.35rem] l-3:mb-6">
              {obj.description}
            </span>
            <button
              onClick={() => {
                open(obj.link);
              }}
              className="flex items-center justify-center hover:animate-pulse font-bold gap-2 p-4 uppercase shadow-button text-white bg-content rounded-md w-28 h-6 l:w-36 l:h-10 l:gap-3 l:p-5 l:text-lg l-3:text-[1.35rem] l-3:w-44 l-3:p-6"
            >
              Projeto{" "}
              <img
                className="w-4 h-4 l:w-6 l:h-6 l-3:w-8 l-3:h-8"
                src={Blank}
                alt="Ver em outra página"
                aria-label="Botão para ver o projeto"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
