import React from "react";
import style from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={style.background}>
      <h1>Админ</h1>
      <div className={`${style.avatar} center`}>
        <img
          className={style.userAvatar}
          src="https://coolsen.ru/wp-content/uploads/2021/06/5-7.jpg"
        />
        <svg
          width="230"
          height="230"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={style.updateAvatar}
        >
          <path
            d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
            fill="#ffff"
          />
          <path
            d="M9 10.75C7.48 10.75 6.25 9.52 6.25 8C6.25 6.48 7.48 5.25 9 5.25C10.52 5.25 11.75 6.48 11.75 8C11.75 9.52 10.52 10.75 9 10.75ZM9 6.75C8.31 6.75 7.75 7.31 7.75 8C7.75 8.69 8.31 9.25 9 9.25C9.69 9.25 10.25 8.69 10.25 8C10.25 7.31 9.69 6.75 9 6.75Z"
            fill="#ffff"
          />
          <path
            d="M2.67002 19.7C2.43002 19.7 2.19002 19.58 2.05002 19.37C1.82002 19.03 1.91002 18.56 2.26002 18.33L7.19002 15.02C8.27002 14.29 9.76002 14.38 10.74 15.21L11.07 15.5C11.57 15.93 12.42 15.93 12.91 15.5L17.07 11.93C18.13 11.02 19.8 11.02 20.87 11.93L22.5 13.33C22.81 13.6 22.85 14.07 22.58 14.39C22.31 14.7 21.84 14.74 21.52 14.47L19.89 13.07C19.39 12.64 18.54 12.64 18.04 13.07L13.88 16.64C12.82 17.55 11.15 17.55 10.08 16.64L9.75002 16.35C9.29002 15.96 8.53002 15.92 8.02002 16.27L3.09002 19.58C2.96002 19.66 2.81002 19.7 2.67002 19.7Z"
            fill="#ffff"
          />
        </svg>
      </div>

      <input className={style.username} placeholder="Бомжик" />
      <button className={style.submit}>изменить</button>
    </div>
  );
};

export default Profile;
