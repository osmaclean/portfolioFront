import "./index.scss";
import GitHub from "../../assets/imgs/light/placa-do-github.svg";
import LinkedIn from "../../assets/imgs/light/logotipo-do-linkedin.svg";
import Instagram from "../../assets/imgs/light/instagram.svg";

export default function Footer() {
  return (
    <section
      id="sectionFooter"
      className="w-full pt-24 pl-[3rem] pr-[11.25rem] pb-11 flex items-center justify-center"
    >
      <div className="w-3/4">
        <h1 className="text-content text-3xl font-bold">Get in touch</h1>
        <span className="mt-6 flex items-center justify-center hover:animate-pulse font-bold gap-2 p-4 uppercase shadow-button text-white bg-content rounded-md w-96 antialiased h-6">
          contatolucasmaclean@gmail.com
        </span>
        <div className="flex items-center justify-start gap-6 mt-6 w-52 mb-9">
          <figure>
            <img
              src={GitHub}
              alt="Logotipo GitHub"
              className="cursor-pointer h-8 w-8 hover:opacity-60 transition-all"
              onClick={() => {
                open("https://github.com/osmaclean");
              }}
            />
          </figure>
          <figure>
            <img
              src={LinkedIn}
              alt="Logotipo LinkedIn"
              className="cursor-pointer h-8 w-8 hover:opacity-60 transition-all"
              onClick={() => {
                open("https://www.linkedin.com/in/osmaclean/");
              }}
            />
          </figure>
          <figure>
            <img
              src={Instagram}
              alt="Logotipo Instagram"
              className="cursor-pointer h-8 w-8 hover:opacity-60 transition-all"
              onClick={() => {
                open("https://www.instagram.com/devstechbrasil/");
              }}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
