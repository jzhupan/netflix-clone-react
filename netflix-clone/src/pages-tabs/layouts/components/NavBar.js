import * as React from "react";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        <Logo />
      </a>
      <ul>
        <CustomLink href="/home">Home</CustomLink>
        <CustomLink href="/tv-shows">Tv Shows</CustomLink>
        <CustomLink href="/movies">Movies</CustomLink>
        <CustomLink href="/latest">New & Popular</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;

  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}
