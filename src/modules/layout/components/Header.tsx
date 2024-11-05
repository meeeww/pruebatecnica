import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between text-white p-8 h-[4.2vw] border-gray-900 border-b-4">
      {/* Logo */}
      <nav className="flex">
        <img src="/Logo.svg" />
      </nav>

      {/* Información Usuario */}
      <nav className="flex gap-4">
        <div>Home</div>
        <div>Descrubrir</div>
        <div>Favoritos</div>
        <div>Subir Obra</div>
        <div>Foto</div>
      </nav>
    </header>
  );
};

export default Header;
