import USA from "/light/usa.png";
import MOON from "/light/moon.png";
import SOL from "/dark/sol.png";
import BR from "/light/br.png";
import { useTheme } from "../../hooks/useTheme";

export default function LanguagesFloater() {
  const { theme, setTheme } = useTheme();
  return (
    <section>
      <div className="fixed right-0 top-24 w-12 rounded-l-lg bg-content dark:bg-header h-28 l:w-20 flex flex-col items-center justify-center">
        <ul className="flex flex-col items-center justify-center gap-2">
          <li className="cursor-pointer">
            <figure>
              <img
                className="w-8"
                src={USA}
                alt="Estados Unidos"
                aria-label="Botão de traduzir para o inglês"
              />
            </figure>
          </li>
          <li className="cursor-pointer">
            <figure>
              <img
                className="w-8"
                src={BR}
                alt="Brasil"
                aria-label="Botão de traduzir para o português"
              />
            </figure>
          </li>
          <li className="cursor-pointer">
            <figure>
              {theme === "light" ? (
                <img
                  className="w-6"
                  src={MOON}
                  alt="Lua"
                  aria-label="Botão para ativar o dark mode"
                  onClick={() => setTheme("dark")}
                />
              ) : (
                <img
                  className="w-6"
                  src={SOL}
                  alt="Lua"
                  aria-label="Botão para ativar o light mode"
                  onClick={() => setTheme("light")}
                />
              )}
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
}
