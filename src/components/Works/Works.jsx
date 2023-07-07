import "./index.scss";
import Blank from "/light/blank.svg";

export default function Works({ data }) {
  return (
    <div
      id="sectionWorks"
      className="w-full pt-8 pl-[11.25rem] pr-[11.25rem] mt-20 sm-1:pl-4 sm-1:pr-4 sm:pl-8 sm:pr-8 md:pl-[3.8rem] md:pr-[3.8rem] md-7:pl-52 md-8:pl-56 md-9:pl-60 l:pl-64 mdOne:pl-[11.5rem] md2nd:pl-[11rem] md-3:pl-[10rem] md-3:pr-[10rem] md-4:pl-[9rem] md-4:pr-[9rem] md-5:pl-[8rem] md-5:pr-[8rem] "
    >
      <h1 className="text-content text-3xl mt-8 font-extrabold uppercase md-3:text-2xl sm:text-xl l:text-4xl">
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
            <h2 className="text-center text-content font-bold mt-4 mb-4 text-xl sm:text-base l:text-2xl">
              {obj.title}
            </h2>
            <span className="text-center text-content text-base mb-4 sm:text-sm l:text-xl">
              {obj.description}
            </span>
            <button
              onClick={() => {
                open(obj.link);
              }}
              className="flex items-center justify-center hover:animate-pulse font-bold gap-2 p-4 uppercase shadow-button text-white bg-content rounded-md w-28 h-6 l:w-36 l:h-10 l:gap-3 l:p-5 l:text-lg"
            >
              Projeto{" "}
              <img
                className="w-4 h-4 l:w-6 l:h-6"
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
