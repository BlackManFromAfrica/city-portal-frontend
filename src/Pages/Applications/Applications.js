import React, { useState } from "react";
import style from "./Application.module.css";
import ProblemCard from "../../Components/ProblemCard/ProblemCard";
import Input from "./../../Components/Input/Input";
const Applications = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClickOpen = () => {
    setShowModal(true);
  };
  const handleClickClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <main className={style.main}>
        <ProblemCard />
        <ProblemCard />
        <ProblemCard />
        <button className={style.newApplication} onClick={handleClickOpen}>
          <svg
            width="200"
            height="200"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
              fill="#292D32"
            />
            <path
              d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V22C12.75 22.41 12.41 22.75 12 22.75Z"
              fill="#292D32"
            />
            <path
              d="M22 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H22C22.41 11.25 22.75 11.59 22.75 12C22.75 12.41 22.41 12.75 22 12.75Z"
              fill="#292D32"
            />
          </svg>
        </button>
      </main>
      <div
        className={style.modalOverlay}
        style={{
          display: showModal ? "block" : "none",
        }}
      >
        <div className={style.modalBackground} onClick={handleClickClose}></div>
        <div className={style.middleModal}>
          <div className={style.modal}>
            <button className={style.newApplicationModal}>
              <svg
                width="200"
                height="200"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                  fill="#292D32"
                />
                <path
                  d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V22C12.75 22.41 12.41 22.75 12 22.75Z"
                  fill="#292D32"
                />
                <path
                  d="M22 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H22C22.41 11.25 22.75 11.59 22.75 12C22.75 12.41 22.41 12.75 22 12.75Z"
                  fill="#292D32"
                />
              </svg>
            </button>
            <Input placeholder="Название" />
            <textarea
              placeholder="Описание проблемы"
              className={style.textProblem}
            />
            <select className={style.choiceCategory}>
              <option hidden>Выберите категорию</option>
              <option>Уборка мусора</option>
              <option>Бомжи на улице</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Applications;
