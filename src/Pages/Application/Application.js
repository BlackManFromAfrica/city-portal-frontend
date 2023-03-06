import React from "react";
import style from "./Application.module.css";
const Application = () => {
  return (
    <div className={style.application}>
      <h1 className={style.title}>Уборка мусора</h1>
      <div className={style.timeStamp}>
        <div>
          <h3 className={style.textTimeStamp}>До</h3>
          <img
            className={style.picture}
            src="https://w2e.ru/upload/medialibrary/df4/df49c7b4b2c32d812f2ca34c773bad3d.jpg"
          />
        </div>
        <div>
          <h3 className={style.textTimeStamp}>После</h3>
          <img
            className={style.picture}
            src="https://w2e.ru/upload/medialibrary/df4/df49c7b4b2c32d812f2ca34c773bad3d.jpg"
          />
        </div>
      </div>

      <h2>
        <span className={style.category}>Категория:</span> мусор в городе
      </h2>
      <p>
        Что такое Lorem Ipsum? Lorem Ipsum - это текст-"рыба", часто
        используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной
        "рыбой" для текстов на латинице с начала XVI века. В то время некий
        безымянный печатник создал большую коллекцию размеров и форм шрифтов,
        используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только
        успешно пережил без заметных изменений пять веков, но и перешагнул в
        электронный дизайн. Его популяризации в новое время послужили публикация
        листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее
        время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах
        которых используется Lorem Ipsum.
      </p>
    </div>
  );
};

export default Application;
