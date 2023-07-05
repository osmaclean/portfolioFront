export default function Header() {
  return (
    <header className="h-14 sm:h-24 w-full bg-header shadow-md p-6 sm:p-2 flex items-center justify-center fixed top-0 z-50">
      <nav className="flex items-center justify-between w-3/4 md:w-[90%] sm:flex-col sm:gap-4">
        <h1 className="text-2xl font-bold cursor-pointer text-content md2nd:text-xl sm:text-lg sm-2:text-base">
          LUCAS MACLEAN
        </h1>
        <ul className="flex items-center justify-center gap-6 sm:gap-4 text-sm text-content">
          <li className="cursor-pointer hover:opacity-50 ease-in-out duration-500 font-normal ">
            <a href="#sectionWorks">Portfólio</a>
          </li>
          <li className="cursor-pointer hover:opacity-50 ease-in-out duration-500 font-normal">
            <a href="#section">Resumo</a>
          </li>
          <li className="cursor-pointer hover:opacity-50 ease-in-out duration-500 font-normal">
            <a href="#sectionFooter">Fale comigo</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
