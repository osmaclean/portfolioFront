import WhatsFigure from "/light/whats.png";

export default function WhatsFloater() {
  return (
    <section className=" fixed right-4 top-80 w-14 h-24 l:w-20 flex flex-col items-center justify-center animate-pulse gap-2">
      <h5 className="font-bold text-sm l:text-lg">Whats</h5>
      <div className="w-12 h-12 l:w-16 l:h-16 bg-content shadow-button rounded-full flex flex-col items-center justify-center">
        <figure>
          <img
            className="cursor-pointer text-center w-7 h-7 l:w-8 l:h-8"
            onClick={() => {
              open("https://rebrand.ly/whats-portfolio");
            }}
            src={WhatsFigure}
            alt="WhatsApp"
            aria-label="WhatsApp Button"
          />
        </figure>
      </div>
    </section>
  );
}
