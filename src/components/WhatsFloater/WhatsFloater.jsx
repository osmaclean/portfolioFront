import WhatsFigure from "/light/whats.png";
import WhatsDark from "/dark/whatsDark.png";
import { useTheme } from "../../hooks/useTheme";

export default function WhatsFloater({ t }) {
  const { theme } = useTheme();

  return (
    <section className=" fixed right-4 top-80 w-16 h-36 l:w-20 flex flex-col items-center justify-center animate-pulse gap-2">
      <h5 className="font-bold text-sm l:text-lg l-1:text-xl dark:text-header">
        {t("whats")}
      </h5>
      <div className="w-12 h-12 l:w-16 l:h-16 l-1:w-20 l-1:h-20 bg-content dark:bg-header shadow-button rounded-full flex flex-col items-center justify-center">
        <figure>
          {theme === "light" ? (
            <img
              className="cursor-pointer text-center w-7 h-7 l:w-8 l:h-8 l-1:h-10 l-1:w-10"
              onClick={() => {
                open("https://rebrand.ly/whats-portfolio");
              }}
              src={WhatsFigure}
              alt="WhatsApp"
              aria-label="WhatsApp Button"
            />
          ) : (
            <img
              className="cursor-pointer text-center w-7 h-7 l:w-8 l:h-8 l-1:h-10 l-1:w-10"
              onClick={() => {
                open("https://rebrand.ly/whats-portfolio");
              }}
              src={WhatsDark}
              alt="WhatsApp"
              aria-label="WhatsApp Button"
            />
          )}
        </figure>
      </div>
    </section>
  );
}
