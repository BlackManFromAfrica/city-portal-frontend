import React, { useEffect, useState } from "react";
import ProblemCard from "../../Components/ProblemCard/ProblemCard";
import style from "./Main.module.css";
const Main = () => {
  return (
    <main className={style.main}>
      <ProblemCard />
    </main>
  );
};

export default Main;
