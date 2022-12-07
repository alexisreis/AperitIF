import React from "react";
import Navbar from "../Navbar/index.jsx";

function index() {
  return (
    <body>
      <Navbar />
      <h1>Help</h1>
      <h2>Vite + React + TS (Hamburger + Responsive + Router)</h2>
      <footer className="footer">
        <p className="footer-by">
          A project by{" "}
          <a
            href="https://twitter.com/erdemmkarakas"
            rel="noopener"
            className="small-link"
          >
            Erdem Karakaş
          </a>
          <a
            href="https://twitter.com/erdemmkarakas"
            rel="noopener"
            target="_blank"
            className="no-link icon-twitter"
            aria-label="Follow me on Twitter"
          ></a>
        </p>
      </footer>
    </body>
  );
}

export default index;
