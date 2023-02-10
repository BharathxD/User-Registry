import React from "react";
import { Items } from "../Item";
import classes from "./List.module.css";

export const List: React.FC<{ items: Items[] }> = (props) => {
  return (
    <div>
      <ul className={classes.ulList}>
        {props.items.map((data) => {
          return <li key={data.id}>
            {data.text} : {data.age}
            </li>;
        })}
      </ul>
    </div>
  );
};
