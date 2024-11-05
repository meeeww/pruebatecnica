import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between bg-blue-600 text-white p-8">
      {/* Logo */}
      <nav className="flex">
        <h1>logo</h1>
        <h1>polygon</h1>
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
