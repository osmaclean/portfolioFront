import "./index.scss";
import Blank from "/light/blank.svg";

export default function Works({ data }) {
  return (
    <div
      id="sectionWorks"
      className="w-full pt-8 pl-[11.25rem] pr-[11.25rem] mt-20 sm-1:pl-[1rem] sm-1:pr-[1rem] sm:pl-[2rem] sm:pr-[2rem] md:pl-[3.8rem] md:pr-[3.8rem] mdOne:pl-[11.5rem] md2nd:pl-[11rem] md-3:pl-[10rem] md-3:pr-[10rem] md-4:pl-[9rem] md-4:pr-[9rem] md-5:pl-[8rem] md-5:pr-[8rem] "
    >
      <h1 className="text-content text-3xl mt-8 font-extrabold uppercase md-3:text-2xl sm:text-xl">
        Portfólio
      </h1>
      <div className="pt-12 pb-12 md-3:pt-6 flex flex-wrap items-center justify-between gap-12 md-3:gap-4">
        {data.map((obj) => (
          <div
            key={obj.id}
            className="w-96 md-3:w-72 md-5:w-64 sm:w-52 sm-1:w-44 flex flex-col items-center justify-center"
          >
            <figure>
              <img
                className="w-80 h-80"
                src={obj.imgPathDetail}
                alt={obj.title}
              />
            </figure>
            <h2 className="text-center text-content font-bold mt-4 mb-4 text-xl sm:text-base">
              {obj.title}
            </h2>
            <span className="text-center text-content text-base mb-4 sm:text-sm">
              {obj.description}
            </span>
            <button
              onClick={() => {
                open(obj.link);
              }}
              className="flex items-center justify-center hover:animate-pulse font-bold gap-2 p-4 uppercase shadow-button text-white bg-content rounded-md w-28 h-6"
            >
              Project <img className="w-4 h-4" src={Blank} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
