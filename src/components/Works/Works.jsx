import "./index.scss";
import Blank from "../../assets/imgs/light/blank.svg";

export default function Works({ data }) {
  return (
    <div id="sectionWorks" className="w-full pt-8 pl-[11.25rem] mt-14">
      <h1 className="text-content text-3xl mt-8 font-extrabold uppercase">
        Portfólio
      </h1>
      <div className="w-[59.3rem] pt-12 pb-12 flex flex-wrap items-center justify-between gap-12">
        {data.map((obj) => (
          <div
            key={obj.id}
            className=" w-96 p-4 flex flex-col items-center justify-center"
          >
            <figure>
              <img
                className="w-80 h-80"
                src={obj.imgPathDetail}
                alt={obj.title}
              />
            </figure>
            <h2 className="text-center text-content font-bold mt-4 mb-4 text-xl">
              {obj.title}
            </h2>
            <span className="text-center text-content text-base mb-4">
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
