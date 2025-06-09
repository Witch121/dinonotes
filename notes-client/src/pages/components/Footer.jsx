import React from "react";

function Footer() {
    return (
      <footer className="footer footer-center p-4 bg-base-200 text-base-content">
          <aside>
            <p>© {new Date().getFullYear()} — All rights reserved by Unicorn’s Soul & Me.</p>
            <p>Crafted in cooperation with insomnia, stubbornness, and whatever free resources I could conjure.</p>
          </aside>
      </footer>
    );
  };
  
  export default Footer;