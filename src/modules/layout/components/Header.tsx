import { FC, useState } from "react";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between text-white p-8 h-[79px] border-gray-900 border-b-4 relative">
      {/* Logo */}
      <nav className="flex">
        <a href="/">
          <img src="/Logo.svg" />
        </a>
      </nav>

      {/* Escritorio */}
      <nav className="hidden md:flex gap-8 items-center font-semibold leading-4 text-[#FFFFFFC7] text-[15px] tracking-wide">
        <button className="bg-[#54399F85] w-[6.313rem] h-[2.438rem] rounded-[6.25rem] flex justify-center items-center gap-2 text-[#D0C0FF]">
          <div className="relative flex items-center">
            <img src="/icons/Home2.svg" />
            <img src="/icons/Home.svg" className="absolute bottom-0 left-[5px]" />
          </div>
          Home
        </button>
        <a href="#">Descubrir</a>
        <a href="#">Favoritos</a>
        <button className="bg-[#7855DC] w-[8.063rem] h-[2.438rem] rounded-[6.25rem] flex justify-center items-center gap-2">Subir Obra</button>
        <button>
          <img src="https://i.scdn.co/image/ab67616d0000b273211e6d4c3a41019e9309686d" alt="Perfil" className="w-10 h-10 rounded-full" />
        </button>
      </nav>

      {/* Botón de móvil */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          {/* Icono de menú hamburguesa */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Móvil */}
      <div
        className={`${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        } absolute top-[79px] right-0 w-full bg-[#211626] p-4 flex flex-col items-center gap-4 text-[#FFFFFFC7] text-[15px] font-semibold md:hidden transform transition-all duration-300 ease-in-out`}
      >
        <button className="bg-[#54399F85] w-[6.313rem] h-[2.438rem] rounded-[6.25rem] flex justify-center items-center gap-2 text-[#D0C0FF]">
          <div className="relative flex items-center">
            <img src="/icons/Home2.svg" />
            <img src="/icons/Home.svg" className="absolute bottom-0 left-[5px]" />
          </div>
          Home
        </button>
        <a href="#">Descubrir</a>
        <a href="#">Favoritos</a>
        <button className="bg-[#7855DC] w-[8.063rem] h-[2.438rem] rounded-[6.25rem] flex justify-center items-center gap-2">Subir Obra</button>
        <button>
          <img src="https://i.scdn.co/image/ab67616d0000b273211e6d4c3a41019e9309686d" alt="Perfil" className="w-10 h-10 rounded-full" />
        </button>
      </div>
    </header>
  );
};

export default Header;
