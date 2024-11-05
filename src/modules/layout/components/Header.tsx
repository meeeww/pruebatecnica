import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between text-white p-8 h-[4.2vw] border-gray-900 border-b-4">
      {/* Logo */}
      <nav className="flex">
        <a href="/"><img src="/Logo.svg" /></a>
      </nav>

      {/* Información Usuario */}
      <nav className="flex gap-8 items-center">
        <button className="bg-[#54399F85] w-[6.313rem] h-[2.438rem] rounded-[6.25rem] flex justify-center items-center gap-2 font-regular text-gray-100 tracking-normal text-lg"><img src="/icons/Home.svg" />Home</button>
        <a href="#" className="font-thin text-gray-100 tracking-normal text-lg">Descubrir</a>
        <a href="#" className="font-thin text-gray-100 tracking-normal text-lg">Favoritos</a>
        <button className="bg-[#7855DC] w-[8.063rem] h-[2.438rem] rounded-[6.25rem] flex justify-center items-center gap-2 font-regular text-gray-100 tracking-normal text-lg">Subir Obra</button>
        <button><img src="https://i.scdn.co/image/ab67616d0000b273211e6d4c3a41019e9309686d" alt="Perfil" className="w-10 h-10 rounded-full" /></button>
      </nav>
    </header>
  );
};

export default Header;
