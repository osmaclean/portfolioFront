import "./index.scss";
import GitHub from "/light/placa-do-github.svg";
import LinkedIn from "/light/logotipo-do-linkedin.svg";
import Instagram from "/light/instagram.svg";
import Curriculo from "/light/curriculo.png";

export default function Footer() {
  return (
    <section
      id="sectionFooter"
      className="w-full pt-24 pl-[3rem] sm-1:pl-[1rem] sm-1:pr-[1rem] sm:pl-[2rem] sm:pr-[2rem] pb-11 flex items-center justify-center md:justify-start"
    >
      <div className="w-3/4">
        <h1 className="text-content text-3xl font-bold md-3:text-2xl sm:text-xl l:text-4xl l-3:text-5xl">
          Entre em contato
        </h1>
        <span className="mt-6 flex items-center justify-center hover:animate-pulse font-bold gap-2 p-4 uppercase shadow-button text-white bg-content rounded-md w-96 md-3:w-80 sm:w-64 sm:text-xs sm-2:w-56 sm-2:text-[.65rem] md-3:text-sm antialiased h-6 l:text-xl l:w-[28rem] l:h-10 l-3:text-[1.35rem] l-3:w-[30rem] l-3:h-12">
          contatolucasmaclean@gmail.com
        </span>
        <div className="flex items-center justify-start gap-6 mt-6 w-52 mb-9">
          <figure>
            <img
              src={GitHub}
              alt="Logotipo GitHub"
              aria-label="GitHub Botão"
              className="cursor-pointer h-8 w-8 md-3:h-6 md-3:w-6 l:h-12 l:w-12 hover:opacity-60 transition-all"
              onClick={() => {
                open("https://github.com/osmaclean");
              }}
            />
          </figure>
          <figure>
            <img
              src={LinkedIn}
              alt="Logotipo LinkedIn"
              aria-label="LinkedIn Botão"
              className="cursor-pointer h-8 w-8 md-3:h-6 md-3:w-6 l:h-12 l:w-12 hover:opacity-60 transition-all"
              onClick={() => {
                open("https://www.linkedin.com/in/osmaclean/");
              }}
            />
          </figure>
          <figure>
            <img
              src={Instagram}
              alt="Logotipo Instagram"
              aria-label="Instagram Botão"
              className="cursor-pointer h-8 w-8 md-3:h-6 md-3:w-6 l:h-12 l:w-12 hover:opacity-60 transition-all"
              onClick={() => {
                open("https://www.instagram.com/devstechbrasil/");
              }}
            />
          </figure>
          <figure>
            <img
              src={Curriculo}
              alt="Logotipo Curriculo"
              aria-label="Curriculo Botão"
              className="cursor-pointer h-8 w-8 md-3:h-6 md-3:w-6 l:h-[2.25rem] l:w-12 hover:opacity-60 transition-all"
              onClick={() => {
                open("https://rebrand.ly/Curriculum-LM");
              }}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
