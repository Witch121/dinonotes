import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/user_icon_dino.jpg";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 flex flex-col lg:flex-row">
      <div className="flex w-full justify-between items-center py-2">
        <Link to="/" className="btn btn-ghost text-xl" onClick={closeMenu}>🦕 DinoNotes</Link>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className="flex flex-col gap-2 lg:hidden">
          <li><Link to="/" onClick={closeMenu}>🏠 Home</Link></li>
          <li><Link to="/previous-notes" onClick={closeMenu}>📚 Notes</Link></li>
          <li><Link to="/create-notes" onClick={closeMenu}>📖 Create a Note</Link></li>
        </ul>
      )}

      <div className="navbar-center hidden lg:flex flex-grow justify-center">
        <ul className="menu menu-horizontal px-1">
          <li className="text-lg"><Link to="/">🏠 Home</Link></li>
          <li className="text-lg"><Link to="/previous-notes">📚 Notes</Link></li>
          <li className="text-lg"><Link to="/create-notes">📖 Create a Note</Link></li>
        </ul>
      </div>

      <div className="navbar-end hidden lg:flex items-center">
        <img src={Logo} alt="User Icon" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
}

export default NavBar;
