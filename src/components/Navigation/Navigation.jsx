import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navigation = () => {
  return (
    <header className={css.header}>
      <p className={css.logo}>The Movie Finder</p>

      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/moviespage" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
