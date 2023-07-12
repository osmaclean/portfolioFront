export default function Header() {
  return (
    <header className="h-14 sm:h-16 l-3:p-8 w-full bg-header dark:bg-content shadow-md p-6 sm:p-2 flex items-center justify-center fixed top-0 z-50">
      <nav className="flex items-center justify-between w-3/4 md:w-[90%] sm:flex-col sm:gap-2">
        <h1 className="text-2xl font-bold cursor-pointer text-content md2nd:text-xl sm:text-lg sm-2:text-base l:text-3xl l-3:text-4xl dark:text-header">
          LUCAS MACLEAN
        </h1>
        <ul className="flex items-center justify-center gap-6 sm:gap-4 text-sm l:text-lg l-3:text-[1.35rem] text-content dark:text-header">
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
