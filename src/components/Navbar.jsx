import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#Projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
