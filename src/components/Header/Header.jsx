export default function Header() {
  return (
    <header className="h-14 w-full bg-header shadow-md p-6 flex items-center justify-center fixed top-0 z-50">
      <nav className="flex items-center justify-between w-11/12">
        <h1 className="text-2xl font-bold cursor-pointer">LUCAS MACLEAN</h1>
        <ul className="flex items-center justify-center gap-6 text-sm">
          <li className="cursor-pointer hover:opacity-50 ease-in-out duration-500 font-normal">
            Portfólio
          </li>
          <li className="cursor-pointer hover:opacity-50 ease-in-out duration-500 font-normal">
            Resumo
          </li>
          <li className="cursor-pointer hover:opacity-50 ease-in-out duration-500 font-normal">
            Fale comigo
          </li>
        </ul>
      </nav>
    </header>
  );
}
