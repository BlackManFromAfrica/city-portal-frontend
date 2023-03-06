import React, { useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Form from "../../Components/Form/Form";
import style from "./Auth.module.css";
import { useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  return (
    <div className={`${style.auth} center`}>
      <div className={`${style.info} center`}>
        {location.pathname === "/authorization" ? (
          <IsAccountCreated
            firstText="Нет аккаунта?"
            secondText="Зарегистрироваться"
            url="register"
            info="Добро пожаловать"
          />
        ) : (
          <IsAccountCreated
            firstText="Уже есть аккаунт?"
            secondText="Войти"
            url="/authorization"
            info="Начните чинить мир"
          />
        )}
      </div>
      <Routes>
        <Route path="/register" element={<Form isLogin={true} text='Зарегистрироваться' />} />
        <Route path="/" element={<Form isLogin={false} text='Войти'/>} />
      </Routes>
    </div>
  );
};

const IsAccountCreated = ({ firstText, secondText, url, info }) => {
  return (
    <>
      <div className={style.welcome}>
        <h1 className={style.welcomeText}>{info}</h1>
        <img src="https://i.gifer.com/embedded/download/TDoQ.gif"></img>
      </div>
      <h3 className={style.isAccountText}>
        {firstText}{" "}
        <NavLink to={url}>
          <span>{secondText}</span>
        </NavLink>
      </h3>
    </>
  );
};

export default Auth;
