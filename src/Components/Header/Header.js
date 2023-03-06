import React, { useState } from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const handleClick = () => {
    openBurgerMenu ? setOpenBurgerMenu(false) : setOpenBurgerMenu(true);
  };
  const links = [
    {
      text: "Главная",
      url: "/",
    },
    {
      text: "Профиль",
      url: "/profile",
    },
    {
      text: "Заявки",
      url: "/applications",
    },
  ];
  return (
    <>
      <header className={`${style.header} center`}>
        <NavLink to="/">
          <div className={`${style.logo} flex`}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22C22.75 22.41 22.41 22.75 22 22.75Z"
                fill="#292D32"
              />
              <path
                d="M3.01001 22.76C2.81001 22.76 2.61998 22.68 2.47998 22.54C2.33998 22.4 2.26001 22.21 2.26001 22.01L2.25 7.07004C2.25 6.16004 2.70997 5.30001 3.46997 4.79001L7.46997 2.12003C8.39997 1.50003 9.60002 1.50003 10.52 2.12003L14.52 4.79001C15.29 5.30001 15.74 6.15004 15.74 7.07004L15.75 21.99C15.75 22.4 15.42 22.74 15 22.74L3.01001 22.76ZM9 3.15006C8.76 3.15006 8.52 3.22002 8.31 3.36002L4.31 6.03006C3.96 6.26006 3.75 6.65004 3.75 7.07004L3.76001 21.26L14.26 21.24L14.25 7.07004C14.25 6.65004 14.04 6.26001 13.7 6.04001L9.70001 3.37003C9.49001 3.22003 9.24 3.15006 9 3.15006Z"
                fill="#292D32"
              />
              <path
                d="M19.98 22.76C19.57 22.76 19.23 22.42 19.23 22.01V18C19.23 17.59 19.57 17.25 19.98 17.25C20.39 17.25 20.73 17.59 20.73 18V22.01C20.73 22.42 20.4 22.76 19.98 22.76Z"
                fill="#292D32"
              />
              <path
                d="M20 18.75C18.48 18.75 17.25 17.52 17.25 16V14C17.25 12.48 18.48 11.25 20 11.25C21.52 11.25 22.75 12.48 22.75 14V16C22.75 17.52 21.52 18.75 20 18.75ZM20 12.75C19.31 12.75 18.75 13.31 18.75 14V16C18.75 16.69 19.31 17.25 20 17.25C20.69 17.25 21.25 16.69 21.25 16V14C21.25 13.31 20.69 12.75 20 12.75Z"
                fill="#292D32"
              />
              <path
                d="M15 14.75H3C2.59 14.75 2.25 14.41 2.25 14C2.25 13.59 2.59 13.25 3 13.25H15C15.41 13.25 15.75 13.59 15.75 14C15.75 14.41 15.41 14.75 15 14.75Z"
                fill="#292D32"
              />
              <path
                d="M9 22.75C8.59 22.75 8.25 22.41 8.25 22V18.25C8.25 17.84 8.59 17.5 9 17.5C9.41 17.5 9.75 17.84 9.75 18.25V22C9.75 22.41 9.41 22.75 9 22.75Z"
                fill="#292D32"
              />
              <path
                d="M9 11.25C7.76 11.25 6.75 10.24 6.75 9C6.75 7.76 7.76 6.75 9 6.75C10.24 6.75 11.25 7.76 11.25 9C11.25 10.24 10.24 11.25 9 11.25ZM9 8.25C8.59 8.25 8.25 8.59 8.25 9C8.25 9.41 8.59 9.75 9 9.75C9.41 9.75 9.75 9.41 9.75 9C9.75 8.59 9.41 8.25 9 8.25Z"
                fill="#292D32"
              />
            </svg>
            <h1 className={style.logoText}>CityPortal</h1>
          </div>
        </NavLink>
        <nav className={`${style.menu} center`}>
          {isAuth ? (
            <>
              {links.map((e) => (
                <NavLink to={e.url}>
                  <button className={`${style.link}`}>{e.text}</button>
                </NavLink>
              ))}

              <div className={`${style.auth} center`}>
                <NavLink to="/authorization">
                  <button
                    className={style.authButton}
                    onClick={() => setIsAuth(false)}
                  >
                    Выход
                  </button>
                </NavLink>
              </div>
            </>
          ) : (
            <div className={`${style.auth} center`}>
              <NavLink to="/">
                <button className={`${style.link}`}>Главная</button>
              </NavLink>
              <NavLink to="/authorization">
                <button
                  className={style.authButton}
                  onClick={() => setIsAuth(true)}
                >
                  Вход
                </button>
              </NavLink>
            </div>
          )}
        </nav>
      </header>

      <div className={style.burgerMenu}>
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={style.menuOpen}
          onClick={handleClick}
          style={{
            transform: openBurgerMenu ? "rotate(90deg)" : "none",
          }}
        >
          <path
            d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z"
            fill="#292D32"
          />
          <path
            d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z"
            fill="#292D32"
          />
          <path
            d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z"
            fill="#292D32"
          />
        </svg>
        <div
          className={style.menuMobile}
          style={{
            display: openBurgerMenu ? "block" : "none",
          }}
        >
          <ul className={style.links}>
            {links.map((e) => (
              <li className={style.linkMobile}>
                <NavLink to={e.url}>{e.text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
