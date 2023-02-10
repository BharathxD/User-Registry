import React from "react";
import { Card } from "./Card";
import classes from "./ErrorModal.module.css";

export const ErrorModal: React.FC<{title: string, message: string}> = (props) => {
  return (
    <div className={classes.background}>
      <div className={classes.card}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <button>Close</button>
        </footer>
      </div>
    </div>
  );
};
