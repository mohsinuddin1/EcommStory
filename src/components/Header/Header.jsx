
import React from "react";

const Header = ({ cartCount, onCartClick, onProfileClick }) => {
  return (
    <header className="bg-red-700 flex justify-between items-center px-4 py-2">
      <h1 className="text-3xl text-white font-semibold">Ecommerce</h1>
      <div className="flex gap-4 items-center">
        <button onClick={onProfileClick} className="text-white text-xl hover:scale-110 transition">
          👤
        </button>
        <button onClick={onCartClick} className="relative">
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-300 text-black text-xs rounded-full px-1.5">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
