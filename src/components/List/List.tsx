import React, { FormEvent } from "react";
import { Items } from "../Item";
import classes from "./List.module.css";
import { Card } from "../UI/Card";

export const List: React.FC<{ items: Items[] }> = (props) => {
  return (
    <div>
      <Card>
        <ul className={classes.ulList}>
          {props.items.map((data) => {
            return (
              <li key={data.id}>
                {data.username} : {data.age}
              </li>
            );
          })}
        </ul>
      </Card>
    </div>
  );
};
