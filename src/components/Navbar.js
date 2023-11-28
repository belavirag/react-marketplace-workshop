import React from "react";

const BootstrapNavLink = ({ href, name }) => (
  <li className="nav-item">
    <a className="nav-link" href={href}>
      {name}
    </a>
  </li>
);

const Navbar = () => {
  const links = [
    {
      href: "#",
      name: "Login",
    },

    {
      href: "#",
      name: "Sign Up",
    },

    {
      href: "#",
      name: "About",
    },
  ];

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            {links.map((link) => (
              <BootstrapNavLink {...link} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
