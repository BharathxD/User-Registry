import React, { FormEvent } from "react";
import { Items } from "../Item";
import classes from "./List.module.css";
import { Card } from "../UI/Card";

export const List: React.FC<{ items: Items[] }> = (props) => {
  return (
    <div>
      {props.items.length !== 0 && (
        <Card>
          <ul className={classes.ulList}>
            {props.items.map((data) => {
              return (
                <li key={data.id}>
                  <span className={classes.name}>Name: {data.username}</span>
                  <span className={classes.age}>Age: {data.age}</span>
                </li>
              );
            })}
          </ul>
        </Card>
      )}
    </div>
  );
};
