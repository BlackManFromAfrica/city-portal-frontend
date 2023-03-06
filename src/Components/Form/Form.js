import React from "react";
import style from "./Form.module.css";
import Input from "../Input/Input";
const Form = ({ isLogin, text }) => {
  return (
    <div className={style.formWrapper}>
      <form className={`${style.form} flex center`}>
        {isLogin && <Input placeholder="Почта" type="password" />}
        <Input placeholder="Имя пользователя" type="text" />
        <Input placeholder="Пароль" type="password" />
        {isLogin && <Input placeholder="Повторите пароль" type="password" />}
        <button className={style.submit}>{text}</button>
      </form>
    </div>
  );
};


export default Form;
